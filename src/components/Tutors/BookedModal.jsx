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
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const BookedModal = ({ tutor }) => {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm({
        defaultValues: {
            tutorName: tutor?.tutorName,
            studentName: user?.name,
            studentEmail: user?.email,
            studentPhone: "",
        },
    });

    const onSubmit = async (data) => {
        // console.log("Booking Submitted:", data);
        // console.log("Current UserId:", user?.id);

        const { _id, ...tutorData } = tutor || {}; // user ID means created by ID, not the tutor ID

        const bookedData = {
            ...tutorData,
            tutorId: tutor?._id,
            studentId: user?.id,
            studentName: data.studentName,
            studentEmail: data.studentEmail,
            studentPhone: data.studentPhone,
            status: true,
        };
        // console.log(bookedData);

        const { data: tokenData } = await authClient.token();

        // Your API call or Server Action
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/booked`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`,
                },
                body: JSON.stringify(bookedData),
            },
        );

        const resData = await res.json();
        // console.log("API Response:", resData);

        if (res.ok) {
            toast.success("Session booked successfully!");
            setOpen(false);
            router.refresh();
        } else {
            toast.error("Failed to book session. Please try again.");
            return;
        }

        const updateRes = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/booked/${tutor._id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${tokenData?.token}`,
                },
            },
        );
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="w-full text-lg font-medium py-6 hover-primary cursor-pointer"
                    disabled={Number(tutor.totalSlot) === 0}
                    onClick={() => setOpen(true)}
                >
                    Book Session Now
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-sm">
                <DialogHeader className="text-center">
                    <DialogTitle>Book Session Now</DialogTitle>
                    <DialogDescription>
                        Book your tutor session and take the next <br /> step
                        toward your goals.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="border-b-2 text-center">
                        Tutor ID: {tutor._id}
                    </h4>
                    <FieldGroup className="py-4">
                        <Field>
                            <Label>Tutor Name</Label>
                            <Input {...register("tutorName")} readOnly />
                        </Field>

                        <Field>
                            <Label>Student Name</Label>
                            <Input {...register("studentName")} required />
                        </Field>

                        <Field>
                            <Label>Student Email</Label>
                            <Input
                                type="email"
                                {...register("studentEmail")}
                                required
                            />
                        </Field>

                        <Field>
                            <Label>Student Phone</Label>
                            <Input
                                type="tel"
                                {...register("studentPhone")}
                                required
                            />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                variant="outline"
                                type="button"
                                className="cursor-pointer"
                            >
                                Cancel
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer"
                        >
                            {isSubmitting ? "Booking..." : "Book now"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BookedModal;
