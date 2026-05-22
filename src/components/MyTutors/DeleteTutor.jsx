import { Trash2, Trash2Icon } from "lucide-react";
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
import { redirect } from "next/navigation";

const DeleteTutor = ({ tutor }) => {
    // console.log(tutor._id);
    const handleDelete = async () => {
        const { token } = await auth.api.getToken({
            headers: await headers(),
        });

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_API}/tutors/${tutor._id}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${token}`,
                },
            },
        );
        const data = await res.json();
        // console.log(data);
        // console.log("clicked");
        if (data) {
            redirect("/my-tutors");
        }
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive cursor-pointer"
                >
                    <Trash2 className="w-5 h-5" />
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent size="sm">
                <AlertDialogHeader>
                    <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                        <Trash2Icon />
                    </AlertDialogMedia>
                    <AlertDialogTitle className="text-2xl">
                        Delete tutor?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action will permanently delete this{" "}
                        <span className="text-red-500 font-semibold">
                            {tutor.tutorName}
                        </span>{" "}
                        data. Once deleted, the data cannot be restored.
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
                        onClick={handleDelete}
                        className="cursor-pointer"
                    >
                        Delete
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
};

export default DeleteTutor;
