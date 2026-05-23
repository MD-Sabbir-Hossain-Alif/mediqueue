"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { toast } from "sonner";

import { useState } from "react";
import { CalendarIcon, Edit2 } from "lucide-react";
import { format } from "date-fns";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function FormInput({ label, field, value, onChange, ...props }) {
    return (
        <Field>
            <FieldLabel className="font-semibold">{label}</FieldLabel>
            <Input
                value={value}
                onChange={(e) => onChange(field, e.target.value)}
                {...props}
            />
        </Field>
    );
}

function DatePickerField({ label, field, value, onChange }) {
    return (
        <Field>
            <FieldLabel className="font-semibold">{label}</FieldLabel>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                    >
                        {value
                            ? format(value, "PPP")
                            : `Pick ${field.includes("Start") ? "start" : "end"} date`}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={value}
                        onSelect={(date) => onChange(field, date)}
                        disabled={(date) => date < new Date()}
                    />
                </PopoverContent>
            </Popover>
        </Field>
    );
}

const UpdateTutor = ({ tutor }) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    // console.log(tutor);
    const {
        userId,
        tutorName,
        photo,
        subjectCategory,
        availableDays,
        availableTimeSlot,
        hourlyFee,
        totalSlot,
        sessionStartDate,
        sessionEndDate,
        institution,
        experience,
        location,
        teachingMode,
        description,
    } = tutor;

    const [formData, setFormData] = useState({
        userId,
        tutorName,
        photo,
        subjectCategory,
        availableDays,
        availableTimeSlot,
        hourlyFee,
        totalSlot,
        sessionStartDate,
        sessionEndDate,
        institution,
        experience,
        location,
        teachingMode,
        description,
    });

    const subjects = [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "Computer Science",
        "Accounting",
        "Economics",
        "History",
        "Geography",
    ];

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (field, value) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.tutorName ||
            !formData.photo ||
            !formData.subjectCategory ||
            !formData.location ||
            !formData.institution ||
            !formData.description
        ) {
            toast.error("Please fill all required fields");
            return;
        }

        // console.log(formData);

        const formattedData = {
            ...formData,
            hourlyFee: Number(formData.hourlyFee),
            totalSlot: Number(formData.totalSlot),
            sessionStartDate: new Date(formData.sessionStartDate),
            sessionEndDate: new Date(formData.sessionEndDate),
        };

        // console.log(formattedData);
        setIsSubmitting(true);

        const { data: tokenData } = await authClient.token();
        // console.log(tokenData);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/tutors/${tutor._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`,
                },
                body: JSON.stringify(formattedData),
            },
        );
        const data = await res.json();
        await new Promise((resolve) => setTimeout(resolve, 1200));

        if (data) {
            toast.success("Tutor profile updated successfully!", {
                description: "Your details have been updated in the database.",
            });
            router.refresh();
        }
        if (!data) {
            toast.error("Tutor profile update failed!", {
                description: "Please try again",
            });
        }

        setIsSuccess(true);
        setIsSubmitting(false);
    };

    const handleOpenChange = (val) => {
        setOpen(val);
        // Reset success state when dialog closes
        if (!val) setIsSuccess(false);
    };

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-primary hover:bg-primary/10 hover:text-primary cursor-pointer"
                >
                    <Edit2 className="w-5 h-5" />
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto dark:bg-black/30">
                <DialogHeader className="text-center">
                    <DialogTitle>Update Tutor Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your tutor profile here. Click save when
                        you&apos;re done.
                    </DialogDescription>
                </DialogHeader>

                {!isSuccess ? (
                    <form onSubmit={handleSubmit}>
                        <FieldGroup>
                            {/* Basic Information */}
                            <FieldSet>
                                <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput
                                        label="Tutor Full Name *"
                                        field="tutorName"
                                        value={formData.tutorName}
                                        onChange={handleChange}
                                        placeholder="Ayesha Rahman"
                                        required
                                    />
                                    <FormInput
                                        label="Profile Photo URL *"
                                        field="photo"
                                        value={formData.photo}
                                        onChange={handleChange}
                                        placeholder="https://i.ibb.co/..."
                                        required
                                    />
                                </FieldGroup>
                            </FieldSet>

                            {/* Subject & Teaching Mode */}
                            <FieldSet>
                                <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <Field>
                                        <FieldLabel className="font-semibold">
                                            Subject *
                                        </FieldLabel>
                                        <Select
                                            value={formData.subjectCategory}
                                            onValueChange={(v) =>
                                                handleChange(
                                                    "subjectCategory",
                                                    v,
                                                )
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {subjects.map((mode) => (
                                                    <SelectItem
                                                        key={mode}
                                                        value={mode}
                                                    >
                                                        {mode}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Field>

                                    <Field>
                                        <FieldLabel className="font-semibold">
                                            Teaching Mode *
                                        </FieldLabel>
                                        <Select
                                            value={formData.teachingMode}
                                            onValueChange={(v) =>
                                                handleChange("teachingMode", v)
                                            }
                                        >
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {[
                                                    "Online",
                                                    "Offline",
                                                    "Both",
                                                ].map((mode) => (
                                                    <SelectItem
                                                        key={mode}
                                                        value={mode}
                                                    >
                                                        {mode}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </Field>
                                </FieldGroup>

                                <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput
                                        label="Available Days"
                                        field="availableDays"
                                        value={formData.availableDays}
                                        onChange={handleChange}
                                        placeholder="Tue - Sat"
                                    />
                                    <FormInput
                                        label="Time Slot"
                                        field="availableTimeSlot"
                                        value={formData.availableTimeSlot}
                                        onChange={handleChange}
                                        placeholder="3:30 PM - 6:30 PM"
                                    />
                                </FieldGroup>
                            </FieldSet>

                            {/* Fee, Slots & Dates */}
                            <FieldSet>
                                <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <FormInput
                                        label="Hourly Fee (৳) *"
                                        field="hourlyFee"
                                        value={formData.hourlyFee}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="880"
                                    />
                                    <FormInput
                                        label="Total Slots *"
                                        field="totalSlot"
                                        value={formData.totalSlot}
                                        onChange={handleChange}
                                        type="number"
                                        placeholder="132"
                                    />
                                    <DatePickerField
                                        label="Session Start Date *"
                                        field="sessionStartDate"
                                        value={formData.sessionStartDate}
                                        onChange={handleChange}
                                    />
                                    <DatePickerField
                                        label="Session End Date"
                                        field="sessionEndDate"
                                        value={formData.sessionEndDate}
                                        onChange={handleChange}
                                    />
                                </FieldGroup>
                            </FieldSet>

                            {/* Institution, Experience, Location & Description */}
                            <FieldGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                <FormInput
                                    label="Location *"
                                    field="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="Lalbag, Rangpur"
                                />
                                <FormInput
                                    label="Institution *"
                                    field="institution"
                                    value={formData.institution}
                                    onChange={handleChange}
                                    placeholder="Carmichael College"
                                />
                                <FormInput
                                    label="Experience *"
                                    field="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    placeholder="5+ year in carmichael college"
                                />
                            </FieldGroup>

                            <Field>
                                <FieldLabel className="font-semibold">
                                    Description *
                                </FieldLabel>
                                <Textarea
                                    placeholder="Write a detailed description about yourself as a tutor..."
                                    className="min-h-10"
                                    value={formData.description}
                                    onChange={(e) =>
                                        handleChange(
                                            "description",
                                            e.target.value,
                                        )
                                    }
                                />
                            </Field>
                        </FieldGroup>

                        <DialogFooter className="mt-6">
                            <DialogClose asChild>
                                <Button type="button" variant="outline">
                                    Cancel
                                </Button>
                            </DialogClose>
                            <Button
                                type="submit"
                                className="hover-primary cursor-pointer"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Saving..." : "Save Changes"}
                            </Button>
                        </DialogFooter>
                    </form>
                ) : (
                    <div className="text-center py-10">
                        <div className="text-6xl mb-4">🎉</div>
                        <h2 className="text-2xl font-semibold text-green-600 mb-2">
                            Tutor Profile Updated!
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Your tutor profile has been updated successfully.
                        </p>
                        <DialogClose asChild>
                            <Button className="hover-primary cursor-pointer">
                                Close
                            </Button>
                        </DialogClose>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTutor;
