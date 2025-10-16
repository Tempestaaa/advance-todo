import TodoCard from "@/components/pages/todo/todo-card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  name: string;
  numberOfTasks: number;
};

export default function TodoList({ icon, name, numberOfTasks }: Props) {
  const Icon = icon;

  return (
    <div className="rounded-md p-4 border flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <h6 className="flex items-center gap-2">
          <Icon className="size-5 stroke-3" />
          <span className="font-semibold text-lg">{name}</span>
        </h6>

        <Button size="sm" className="text-xs">
          {numberOfTasks}
        </Button>
      </header>

      <ul className="flex flex-col gap-4">
        {[...Array(4)].map((_, id) => (
          <TodoCard key={id} />
        ))}
      </ul>
    </div>
  );
}
