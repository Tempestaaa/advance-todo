import TodoList from "@/components/pages/todo/todo-list";
import { Button } from "@/components/ui/button";
import {
  CircleCheckIcon,
  CircleIcon,
  LoaderCircleIcon,
  PlusIcon,
} from "lucide-react";

export default function TodoPage() {
  return (
    <div className="p-4 flex flex-col gap-8 h-full">
      <header className="flex items-center justify-between">
        <h4 className="text-2xl font-semibold">To Do List</h4>

        <Button size="sm">
          <PlusIcon />
          <span>Add new task</span>
        </Button>
      </header>

      <section className="grid grid-cols-3 gap-4 h-full">
        <TodoList icon={CircleIcon} name="Active" numberOfTasks={4} />
        <TodoList
          icon={LoaderCircleIcon}
          name="In Progress"
          numberOfTasks={4}
        />
        <TodoList icon={CircleCheckIcon} name="Completed" numberOfTasks={4} />
      </section>
    </div>
  );
}
