import { Spinner } from "@/components/ui/spinner";

const loading = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2 min-h-[90vh]">
            <Spinner className="size-10" />
            <span className="text-lg text-black dark:text-white">
                Loading...
            </span>
        </div>
    );
};

export default loading;
