"use client";

import { useState } from "react";
import { LuUser, LuLock, LuEye, LuEyeOff, LuMail } from "react-icons/lu";
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
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Image Overlay */}
            {/* <div className="absolute inset-0 bg-foreground bg-cover bg-center opacity-40" /> */}
            {/* <div className="absolute inset-0 bg-black/70 dark:bg-black/80" /> */}

            <Card className="w-full max-w-md bg-card/95 border-border backdrop-blur-xl z-10 shadow-2xl">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="text-4xl font-bold tracking-tight">
                        SIGN UP
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                        Create your account and boost your brain
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">
                                FULL NAME
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <LuUser size={20} />
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
                                    className="pl-11 h-12 bg-input border-border"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-foreground">
                                EMAIL ADDRESS
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <LuMail size={20} />
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
                                    className="pl-11 h-12 bg-input border-border"
                                    required
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="password"
                                className="text-foreground"
                            >
                                PASSWORD
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <LuLock size={20} />
                                </div>
                                <Input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Create a strong password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    className="pl-11 pr-11 h-12 bg-input border-border"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? (
                                        <LuEyeOff size={20} />
                                    ) : (
                                        <LuEye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label
                                htmlFor="confirmPassword"
                                className="text-foreground"
                            >
                                CONFIRM PASSWORD
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <LuLock size={20} />
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
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    className="pl-11 pr-11 h-12 bg-input border-border"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword,
                                        )
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showConfirmPassword ? (
                                        <LuEyeOff size={20} />
                                    ) : (
                                        <LuEye size={20} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-semibold"
                        >
                            CREATE ACCOUNT
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-muted-foreground text-sm">
                            ALREADY HAVE AN ACCOUNT?{" "}
                            <a
                                href="/login"
                                className="text-primary hover:underline font-medium"
                            >
                                LOGIN HERE
                            </a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Register;
