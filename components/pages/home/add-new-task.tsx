import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { PlusIcon } from "lucide-react";

export default function AddNewTask() {
  return (
    <Button
      variant="outline"
      size="lg"
      className="border-dashed border-2 justify-between px-2"
    >
      <div className="flex items-center gap-2">
        <PlusIcon />
        <span>New Task</span>
      </div>

      <KbdGroup>
        <Kbd>Crtl</Kbd>
        <Kbd>L</Kbd>
      </KbdGroup>
    </Button>
  );
}
