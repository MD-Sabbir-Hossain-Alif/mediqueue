"use client";

import { useState } from "react";
import { LuUser, LuLock, LuEye, LuEyeOff, LuHeartPulse } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldError } from "@/components/ui/field";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner";
import { FcGoogle } from "react-icons/fc";

// Validation Schema
const loginSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
    password: z
        .string()
        .min(1, "Password is required")
        .min(6, "Password must be at least 6 characters long"),
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
        mode: "onBlur",
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        try {
            console.log("Login attempt:", data);
            await new Promise((resolve) => setTimeout(resolve, 1200));

            toast.success("Login successful!", {
                description: "Welcome back to MediQueue",
            });
        } catch (error) {
            toast.error("Login failed. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* Left Branding Panel  */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col items-center justify-center p-12 relative overflow-hidden">
                <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                    <h1 className="text-4xl font-bold text-primary-foreground tracking-tight mb-2">
                        MediQueue
                    </h1>
                    <p className="text-primary-foreground/60 text-sm font-medium uppercase tracking-widest mb-8">
                        Tutor Booking Platform
                    </p>
                    <div className="w-12 h-px bg-primary-foreground/30 mb-8" />
                    <p className="text-primary-foreground/80 text-lg leading-relaxed">
                        Connect with expert tutors for physics, chemistry,
                        mathematics, biology, economics, english and more.
                    </p>
                </div>
            </div>

            {/* Right Form Panel */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <div className="mb-8 lg:hidden">
                        <span className="text-xl font-bold">MediQueue</span>
                    </div>

                    <Card>
                        <CardHeader className="pb-6 text-center">
                            <CardTitle className="text-3xl font-bold tracking-tight">
                                Welcome back
                            </CardTitle>
                            <CardDescription>
                                Sign in to continue your learning journey
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                            >
                                {/* Email Field */}
                                <Field>
                                    <FieldLabel htmlFor="email">
                                        Email address
                                    </FieldLabel>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuUser size={18} />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            className="pl-10 h-11"
                                            {...form.register("email")}
                                        />
                                    </div>
                                    <FieldError>
                                        {form.formState.errors.email?.message}
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
                                            placeholder="Enter your password"
                                            className="pl-10 pr-10 h-11"
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
                                    className="w-full h-11 font-medium transition-all duration-300 bg-primary hover:bg-(--primary-hover) 
                                cursor-pointer"
                                >
                                    Sign in
                                </Button>

                                {/* Divider */}
                                <div className="relative mb-5">
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
                                    className="w-full h-11 gap-2 font-medium transition-all duration-300 bg-primary hover:bg-(--primary-hover) 
                                cursor-pointer"
                                >
                                    <FcGoogle size={20} />
                                    Continue with Google
                                </Button>
                            </form>

                            <div className="mt-6 text-center text-sm text-muted-foreground">
                                Don&apos;t have an account?{" "}
                                <a
                                    href="/register"
                                    className="text-primary hover:underline font-medium"
                                >
                                    Create one free
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Login;
