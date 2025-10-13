import { Item, ItemTitle } from "@/components/ui/item";
import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { PlusIcon } from "lucide-react";

type Props = {
  addItemText: "Create new list" | "Create new workspace";
};

export default function AddItemButton({ addItemText }: Props) {
  return (
    <Item className="p-2 hover:bg-muted/50 cursor-pointer group">
      <PlusIcon className="size-4 text-muted-foreground group-hover:text-foreground transition-all duration-300" />
      <ItemTitle className="text-muted-foreground group-hover:text-foreground transition-all duration-300">
        {addItemText}
      </ItemTitle>
      <KbdGroup className="ml-auto">
        <Kbd>Ctrl</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>
    </Item>
  );
}
