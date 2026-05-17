import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";


export default function Home() {
	return (
		<div>
			<Button className="bg-blue-500">Hello, I am Shadcn</Button>
			<ModeToggle />
		</div>
	);
}
