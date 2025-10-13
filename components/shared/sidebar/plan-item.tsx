import { Badge } from "@/components/ui/badge";
import { Item, ItemTitle } from "@/components/ui/item";
import { GripVerticalIcon } from "lucide-react";

export default function PlanItem() {
  return (
    <Item className="p-2 hover:bg-muted/50 cursor-pointer group">
      <GripVerticalIcon className="size-4 text-muted-foreground group-hover:text-foreground transition-all duration-300 cursor-grab" />
      <ItemTitle className="text-muted-foreground group-hover:text-foreground transition-all duration-300">
        Name
      </ItemTitle>
      <Badge className="ml-auto">12</Badge>
    </Item>
  );
}
