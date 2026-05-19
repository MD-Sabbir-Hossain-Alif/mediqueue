"use client";

import { useState } from "react";
import {
    LuUser,
    LuLock,
    LuEye,
    LuEyeOff,
    LuMail,
    LuHeartPulse,
    LuImage,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FcGoogle } from "react-icons/fc";
import { Field, FieldError, FieldLabel } from "../ui/field";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { authClient } from "@/lib/auth-client";

// Validation Schema
const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    image: z.string().optional(),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters long")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter"),
});

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: { name: "", email: "", image: "", password: "" },
        mode: "onBlur",
    });

    const onSubmit = async (formData) => {
        const { data, error } = await authClient.signUp.email({
            name: formData.name,
            email: formData.email,
            password: formData.password,
            image: formData.image,
            callbackURL: "/",
        });

        if (data) {
            // console.log("Registration successful:", data);
            toast.success("Registration successful!", {
                description: "Welcome to MediQueue",
            });
        } else if (error) {
            toast.error(error.message || "Registration failed");
            return;
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* ── Left branding panel ── */}
            <div className="hidden lg:flex lg:w-1/2 bg-background p-4 flex-col items-center justify-center relative overflow-hidden">
                {/* decorative circles */}
                <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-foreground/5" />
                <div className="absolute -bottom-32 -right-20 w-80 h-80 rounded-full bg-foreground/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 rounded-full bg-foreground/3" />

                <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
                    {/* Brand name */}
                    <h1 className="text-4xl font-bold text-foreground tracking-tight mb-2">
                        MediQueue
                    </h1>
                    <p className="text-foreground/60 text-sm font-medium uppercase tracking-widest mb-8">
                        Tutor Booking Platform
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-px bg-foreground/30 mb-8" />

                    {/* Features list */}
                    <ul className="text-foreground/80 text-sm space-y-4 text-left w-full">
                        {[
                            "Access 500+ verified best tutors",
                            "Study physics, chemistry, mathematics & more",
                            "Book sessions that fit your schedule",
                            "Track your progress with smart analytics",
                        ].map((feat) => (
                            <li key={feat} className="flex items-start gap-3">
                                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full dark:bg-[#72cfff] bg-[#367e95] flex items-center justify-center text-white dark:text-black text-xs font-bold">
                                    ✓
                                </span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Right form panel ── */}
            <div className="w-full lg:w-1/2 flex items-center justify-center sm:p-4 md:p-0 overflow-y-auto">
                <div className="w-full max-w-md py-8">
                    <Card className="border-border shadow-sm">
                        <CardHeader className="text-center">
                            <CardTitle className="text-3xl font-bold tracking-tight">
                                Create account
                            </CardTitle>
                            <CardDescription className="text-muted-foreground">
                                Join thousands of medical students today
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-3"
                            >
                                {/* Full Name Field */}
                                <Field>
                                    <FieldLabel htmlFor="name">
                                        Full Name
                                    </FieldLabel>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuUser size={18} />
                                        </div>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            className="pl-10 h-11 bg-input dark:bg-input-dark"
                                            {...form.register("name")}
                                        />
                                    </div>
                                    <FieldError>
                                        {form.formState.errors.name?.message}
                                    </FieldError>
                                </Field>

                                {/* Email Field */}
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email address
                                    </FieldLabel>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuMail size={18} />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="pl-10 h-11 bg-input dark:bg-input-dark"
                                            {...form.register("email")}
                                        />
                                    </div>
                                    <FieldError>
                                        {form.formState.errors.email?.message}
                                    </FieldError>
                                </Field>

                                {/* Photo Url Field */}
                                <Field>
                                    <FieldLabel htmlFor="photoUrl">
                                        Photo Url
                                    </FieldLabel>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuImage size={18} />
                                        </div>
                                        <Input
                                            id="photoUrl"
                                            type="text"
                                            placeholder="https://example.com/photo.jpg"
                                            className="pl-10 h-11 bg-input dark:bg-input-dark"
                                            {...form.register("photoUrl")}
                                        />
                                    </div>
                                    <FieldError>
                                        {
                                            form.formState.errors.photoUrl
                                                ?.message
                                        }
                                    </FieldError>
                                </Field>

                                {/* Password Field */}
                                <Field>
                                    <FieldLabel htmlFor="password">
                                        Password
                                    </FieldLabel>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuLock size={18} />
                                        </div>
                                        <Input
                                            id="password"
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Create a strong password"
                                            className="pl-10 pr-10 h-11 bg-input dark:bg-input-dark"
                                            {...form.register("password")}
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {showPassword ? (
                                                <LuEyeOff size={18} />
                                            ) : (
                                                <LuEye size={18} />
                                            )}
                                        </button>
                                    </div>
                                    <FieldError>
                                        {
                                            form.formState.errors.password
                                                ?.message
                                        }
                                    </FieldError>
                                </Field>

                                <Button
                                    type="submit"
                                    className="w-full h-11 mt-3 font-semibold transition-all duration-300 bg-primary hover:bg-(--primary-hover) 
                                cursor-pointer"
                                >
                                    Create account
                                </Button>

                                {/* Divider */}
                                <div className="relative mb-3">
                                    <div className="absolute inset-0 flex items-center">
                                        <span className="w-full border-t border-border" />
                                    </div>
                                    <div className="relative flex justify-center text-xs uppercase">
                                        <span className="bg-card px-2 text-muted-foreground">
                                            or
                                        </span>
                                    </div>
                                </div>

                                {/* Google */}
                                <Button
                                    type="button"
                                    className="w-full h-11 gap-2 font-semibold transition-all duration-300 bg-primary hover:bg-(--primary-hover) 
                                cursor-pointer"
                                >
                                    <FcGoogle size={20} />
                                    Continue with Google
                                </Button>
                            </form>

                            <div className="mt-3 text-center">
                                <p className="text-muted-foreground text-sm">
                                    Already have an account?{" "}
                                    <a
                                        href="/login"
                                        className="text-primary hover:underline font-semibold"
                                    >
                                        Sign in
                                    </a>
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Register;
