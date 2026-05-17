"use client";

import { useState } from "react";
import { LuUser, LuLock, LuEye, LuEyeOff } from "react-icons/lu";
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

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Login attempt:", formData);
        // Add your login logic here
    };

    return (
        <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 bg-black bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-black/70 dark:bg-black/80" />

            <Card className="w-full max-w-md bg-card/95 border-border backdrop-blur-xl z-10 shadow-2xl">
                <CardHeader className="text-center pb-8">
                    <CardTitle className="text-4xl font-bold tracking-tight">
                        LOGIN
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                        Access your cognitive training platform
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-foreground">
                                NAME
                            </Label>
                            <div className="relative">
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                                    <LuUser size={20} />
                                </div>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="pl-11 h-12 bg-input border-border focus-visible:ring-ring"
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
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
                                        })
                                    }
                                    className="pl-11 pr-11 h-12 bg-input border-border focus-visible:ring-ring"
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

                        <Button
                            type="submit"
                            className="w-full h-12 text-lg font-semibold"
                        >
                            SUBMIT
                        </Button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-muted-foreground text-sm">
                            DON&apos;T HAVE AN ACCOUNT?{" "}
                            <a
                                href="/register"
                                className="text-primary hover:underline font-medium"
                            >
                                SIGN UP NOW
                            </a>
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Login;
