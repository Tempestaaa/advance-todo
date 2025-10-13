import { Button } from "@/components/ui/button";
import { ArrowLeftRightIcon } from "lucide-react";

export default function SidebarHeader() {
  return (
    <header className="h-12 flex items-center gap-4">
      <div className="h-full aspect-square rounded-md bg-foreground"></div>

      <div className="flex flex-col">
        <h4 className="text-xl font-bold">Plan.io</h4>
        <p className="text-muted-foreground">Username</p>
      </div>

      <Button variant="ghost" className="ml-auto">
        <ArrowLeftRightIcon />
      </Button>
    </header>
  );
}
