"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function NotAdmin() {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 5000);

        return () => clearTimeout(timer);
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-destructive">
                        <AlertCircle className="h-5 w-5" />
                        Access Denied
                    </CardTitle>
                    <CardDescription>
                        You don't have admin privileges
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                        Sorry man, you're not an admin. You'll be redirected to
                        the home page in 5 seconds.
                    </p>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => router.push("/")}
                    >
                        Go to Home Page Now
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
