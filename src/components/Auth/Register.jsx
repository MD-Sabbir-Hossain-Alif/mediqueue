"use client";

import { useState } from "react";
import {
    LuUser,
    LuLock,
    LuEye,
    LuEyeOff,
    LuMail,
    LuHeartPulse,
} from "react-icons/lu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        console.log("Register:", formData);
    };

    return (
        <div className="min-h-screen bg-background flex">
            {/* ── Left branding panel ── */}
            <div className="hidden lg:flex lg:w-1/2 bg-primary flex-col items-center justify-center p-12 relative overflow-hidden">
                {/* decorative circles */}
                <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-primary-foreground/5" />
                <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-primary-foreground/5" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-foreground/[0.03]" />

                <div className="relative z-10 flex flex-col items-center text-center max-w-sm">
                    {/* Logo mark */}
                    <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 mb-6">
                        <LuHeartPulse className="w-10 h-10 text-primary-foreground" />
                    </div>

                    {/* Brand name */}
                    <h1 className="text-4xl font-bold text-primary-foreground tracking-tight mb-2">
                        MediQueue
                    </h1>
                    <p className="text-primary-foreground/60 text-sm font-medium uppercase tracking-widest mb-8">
                        Medical Learning Platform
                    </p>

                    {/* Divider */}
                    <div className="w-12 h-px bg-primary-foreground/30 mb-8" />

                    {/* Features list */}
                    <ul className="text-primary-foreground/80 text-sm space-y-4 text-left w-full">
                        {[
                            "Access 500+ verified medical tutors",
                            "Study anatomy, physiology, pharmacology & more",
                            "Book sessions that fit your schedule",
                            "Track your progress with smart analytics",
                        ].map((feat) => (
                            <li key={feat} className="flex items-start gap-3">
                                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-xs font-bold">
                                    ✓
                                </span>
                                {feat}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* ── Right form panel ── */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 overflow-y-auto">
                <div className="w-full max-w-md py-8">
                    {/* Mobile logo (shown only on small screens) */}
                    <div className="flex items-center gap-3 mb-8 lg:hidden">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary">
                            <LuHeartPulse className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold text-foreground">
                            MediQueue
                        </span>
                    </div>

                    <Card className="border-border shadow-sm">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-3xl font-bold tracking-tight">
                                Create account
                            </CardTitle>
                            <CardDescription className="text-muted-foreground mt-1">
                                Join thousands of medical students today
                            </CardDescription>
                        </CardHeader>

                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Full Name */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-foreground font-medium"
                                    >
                                        Full name
                                    </Label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuUser size={18} />
                                        </div>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            value={formData.name}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    name: e.target.value,
                                                })
                                            }
                                            className="pl-10 h-11 bg-input border-border"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="email"
                                        className="text-foreground font-medium"
                                    >
                                        Email address
                                    </Label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuMail size={18} />
                                        </div>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    email: e.target.value,
                                                })
                                            }
                                            className="pl-10 h-11 bg-input border-border"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="password"
                                        className="text-foreground font-medium"
                                    >
                                        Password
                                    </Label>
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
                                            value={formData.password}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    password: e.target.value,
                                                })
                                            }
                                            className="pl-10 pr-10 h-11 bg-input border-border"
                                            required
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
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <Label
                                        htmlFor="confirmPassword"
                                        className="text-foreground font-medium"
                                    >
                                        Confirm password
                                    </Label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                            <LuLock size={18} />
                                        </div>
                                        <Input
                                            id="confirmPassword"
                                            type={
                                                showConfirmPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            placeholder="Confirm your password"
                                            value={formData.confirmPassword}
                                            onChange={(e) =>
                                                setFormData({
                                                    ...formData,
                                                    confirmPassword:
                                                        e.target.value,
                                                })
                                            }
                                            className="pl-10 pr-10 h-11 bg-input border-border"
                                            required
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword,
                                                )
                                            }
                                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            {showConfirmPassword ? (
                                                <LuEyeOff size={18} />
                                            ) : (
                                                <LuEye size={18} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    className="w-full h-11 font-semibold mt-2"
                                >
                                    Create account
                                </Button>
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-muted-foreground text-sm">
                                    Already have an account?{" "}
                                    <a
                                        href="/login"
                                        className="text-primary hover:underline font-medium"
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
