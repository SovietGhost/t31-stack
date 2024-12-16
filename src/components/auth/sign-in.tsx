"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignIn() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center py-4">
            <Card
                className={cn(
                    "w-full max-w-md",
                    "border-0 sm:border shadow-none sm:shadow-md", // Apply border and shadow only on small screens and up
                    "mx-auto" // Center the card horizontally
                )}
            >
                <CardHeader>
                    <CardTitle className="text-lg sm:text-xl text-center">
                        Sign In
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm text-center">
                        Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="grid gap-4"
                    >
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Checkbox
                                id="remember"
                                checked={rememberMe}
                                onCheckedChange={(checked) =>
                                    setRememberMe(checked as boolean)
                                }
                            />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            onClick={() =>
                                authClient.signIn.email(
                                    {
                                        email,
                                        password,
                                        rememberMe,
                                    },
                                    {
                                        onSuccess: (context) => {
                                            toast.success(
                                                "Logged in successfully"
                                            );
                                            router.push("/");
                                        },
                                        onError(context) {
                                            toast.error("Error while logging", {
                                                description:
                                                    context.error.message,
                                            });
                                        },
                                    }
                                )
                            }
                        >
                            Login
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
