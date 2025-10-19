import GeneralList from "@/components/shared/sidebar/general-list";
import { TagIcon } from "lucide-react";
import Link from "next/link";

const labels = [
  {
    name: "Active",
    href: "active",
  },
  {
    name: "Completed",
    href: "completed",
  },
  {
    name: "In progress",
    href: "in-progress",
  },
  {
    name: "Paused",
    href: "paused",
  },
  {
    name: "Cancelled",
    href: "cancelled",
  },
];

export default function LabelList() {
  return (
    <GeneralList label="States">
      {labels.map((item) => (
        <Link
          key={item.name}
          href={`/todo?tag=${item.href}`}
          className="flex items-center gap-2 py-1.5 px-2 rounded-md hover hover:bg-muted/50"
        >
          <TagIcon className="size-4" />
          <span>{item.name}</span>
        </Link>
      ))}
    </GeneralList>
  );
}
