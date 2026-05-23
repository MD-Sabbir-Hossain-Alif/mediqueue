"use client";

import { AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const ExpiredDialog = ({ tutor }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    className="w-full text-lg font-medium py-6 cursor-pointer text-yellow-400  dark:text-orange-900"
                >
                    Session Expired
                </Button>
            </DialogTrigger>
            <DialogContent size="sm" className="text-center">
                <DialogHeader>
                    <DialogTitle className="text-2xl flex flex-col justify-center items-center gap-5">
                        <div className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive p-2 rounded-full">
                            <AlertTriangle />
                        </div>
                        Session Expired!
                    </DialogTitle>
                    <DialogDescription>
                        <span className="text-red-500 font-semibold">
                            {tutor.tutorName}&apos;s
                        </span>{" "}
                        session Expried permanently
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default ExpiredDialog;
