"use client";

import { useState } from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
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
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

/** Labelled Input field */
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

/** Date-picker field using Popover + Calendar */
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

const AddTutor = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    // console.log("Current UserId:", user?.id);

    const [formData, setFormData] = useState({
        userId: user?.id,
        tutorName: "",
        photo: "",
        subjectCategory: "",
        availableDays: "Sun - Thu",
        availableTimeSlot: "5:00 PM - 8:00 PM",
        hourlyFee: "",
        totalSlot: "",
        sessionStartDate: null,
        sessionEndDate: null,
        institution: "",
        experience: "",
        location: "",
        teachingMode: "Offline",
        description: "",
    });

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

        const formattedData = {
            ...formData,
            sessionStartDate: formData.sessionStartDate
                ? formData.sessionStartDate.toISOString().split("T")[0]
                : null,

            sessionEndDate: formData.sessionEndDate
                ? formData.sessionEndDate.toISOString().split("T")[0]
                : null,
        };
        // console.log("Submitting Tutor Data:", formattedData);

        setIsSubmitting(true);

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/tutors`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formattedData),
            },
        );
        const data = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 1200));
        // console.log("Tutor Data Submitted:", data);

        toast.success("Tutor profile created successfully!", {
            description: "Your details have been saved to the database.",
        });

        setIsSuccess(true);
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-background py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <Card className="shadow-xl">
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">
                            Register as a Tutor
                        </CardTitle>
                        <CardDescription>
                            Fill in your details to start teaching
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {!isSuccess ? (
                            <form onSubmit={handleSubmit} className="space-y-8">
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
                                            <FieldSet>
                                                <FormInput
                                                    label="Subject *"
                                                    field="subjectCategory"
                                                    value={
                                                        formData.subjectCategory
                                                    }
                                                    onChange={handleChange}
                                                    placeholder="Chemistry, Math etc."
                                                    required
                                                />
                                            </FieldSet>

                                            <Field>
                                                <FieldLabel className="font-semibold">
                                                    Teaching Mode *
                                                </FieldLabel>
                                                <Select
                                                    value={
                                                        formData.teachingMode
                                                    }
                                                    onValueChange={(v) =>
                                                        handleChange(
                                                            "teachingMode",
                                                            v,
                                                        )
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
                                                value={
                                                    formData.availableTimeSlot
                                                }
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
                                                value={
                                                    formData.sessionStartDate
                                                }
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

                                    <Button
                                        type="submit"
                                        className="w-full hover-primary text-lg py-6 cursor-pointer"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting
                                            ? "Creating Profile..."
                                            : "Register as Tutor"}
                                    </Button>
                                </FieldGroup>
                            </form>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-6">🎉</div>
                                <h2 className="text-2xl font-semibold text-green-600 mb-2">
                                    Registration Successful!
                                </h2>
                                <p className="text-muted-foreground mb-6">
                                    Tutor profile has been created and saved
                                    successfully.
                                </p>
                                <Button
                                    className="hover-primary text-lg py-6 cursor-pointer"
                                    onClick={() => window.location.reload()}
                                >
                                    Register Another Tutor
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddTutor;
