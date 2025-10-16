import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoonIcon } from "lucide-react";

export default function SidebarHeader() {
  return (
    <section className="flex items-center gap-2">
      <figure className="h-10 aspect-square rounded-md bg-foreground"></figure>

      <div className="flex flex-col">
        <p className="font-bold">Username</p>

        <Badge
          variant="secondary"
          className="flex items-center gap-1 rounded w-fit px-1"
        >
          <div className="size-1.5 rounded-full bg-green-600" />
          <small className="text-green-600">Active</small>
        </Badge>
      </div>

      <Button variant="ghost" className="ml-auto">
        <MoonIcon />
      </Button>
    </section>
  );
}
