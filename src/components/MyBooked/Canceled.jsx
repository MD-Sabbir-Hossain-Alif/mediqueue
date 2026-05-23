import { CircleX, X } from "lucide-react";
import { Button } from "../ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMedia,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Canceled = ({ tutor }) => {
    const router = useRouter();
    const handleCancel = async () => {
        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/booked/update/${tutor._id}`,
            {
                method: "PATCH",
                headers: {
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ status: false }),
            },
        );
        const data = await res.json();

        if (data) {
            toast.success("Delete Successfully");
            router.refresh();
        }
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    disabled={!tutor.status}
                    className="text-black/80 hover:bg-black/10 hover:text-black cursor-pointer"
                >
                    <X className="w-5 h-5" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <CircleX />
                    </AlertDialogMedia>
                    <AlertDialogTitle className="text-2xl">
                        Cancel tutor session?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will permanently Cencel this{" "}
                        <span className="text-red-500 font-semibold">
                            {tutor.tutorName}
                        </span>{" "}
                        session. Once canceled, the session cannot be restored.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        variant="outline"
                        className="cursor-pointer"
                    >
                        Cancel
                    </AlertDialogCancel>
                    <AlertDialogAction
                        variant="destructive"
                        onClick={handleCancel}
                        className="cursor-pointer"
                    >
                        Confirm
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default Canceled;
