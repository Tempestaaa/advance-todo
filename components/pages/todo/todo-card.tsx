import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemHeader,
  ItemSeparator,
  ItemTitle,
} from "@/components/ui/item";
import {
  MessageSquareIcon,
  MoreVerticalIcon,
  PaperclipIcon,
  PenLineIcon,
} from "lucide-react";

export default function TodoCard() {
  return (
    <Item className="border border-border">
      <div className="flex items-center justify-between w-full">
        <ItemHeader className="flex flex-col items-start gap-0">
          <ItemTitle className="text-base">Task name</ItemTitle>
          <ItemDescription className="text-xs">Remaining time</ItemDescription>
        </ItemHeader>

        <ItemActions>
          <Badge>
            <div className="size-1 rounded-full bg-background" />
            <small>Priority</small>
          </Badge>
        </ItemActions>
      </div>

      <ItemSeparator className="border-t border-dashed" />

      <ItemContent className="text-muted-foreground line-clamp-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero
        odit officiis, neque harum facilis. Reprehenderit non eum expedita ab
        vero eveniet blanditiis, consectetur sunt, fugit pariatur facilis, animi
        sapiente!
      </ItemContent>

      <ItemSeparator />

      <ItemFooter className="justify-baseline gap-4">
        <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
          <Avatar className="size-6">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar className="size-6">
            <AvatarImage
              src="https://github.com/maxleiter.png"
              alt="@maxleiter"
            />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <Avatar className="size-6">
            <AvatarImage
              src="https://github.com/evilrabbit.png"
              alt="@evilrabbit"
            />
            <AvatarFallback>ER</AvatarFallback>
          </Avatar>
          <Button rounded="full" className="size-6 z-10">
            <PenLineIcon />
          </Button>
        </div>

        <div className="text-muted-foreground flex items-center gap-1">
          <PaperclipIcon className="size-4" />
          <small>1</small>
        </div>

        <div className="text-muted-foreground flex items-center gap-1">
          <MessageSquareIcon className="size-4" />
          <small>3</small>
        </div>

        <Button variant="ghost" size="sm" className="ml-auto">
          <MoreVerticalIcon />
        </Button>
      </ItemFooter>
    </Item>
  );
}
