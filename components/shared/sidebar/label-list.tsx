import GeneralList from "@/components/shared/sidebar/general-list";
import { TagIcon } from "lucide-react";
import Link from "next/link";

const labels = [
  {
    color: "#a1a1a1",
    name: "Personal",
  },
  {
    color: "#a1a1a1",
    name: "Work",
  },
  {
    color: "#a1a1a1",
    name: "To read",
  },
  {
    color: "#9810fa",
    name: "Follow-up",
  },
  {
    color: "#e17100",
    name: "To-do",
  },
  {
    color: "#00a63e",
    name: "Travel",
  },
];

export default function LabelList() {
  return (
    <GeneralList label="Labels">
      {labels.map((item) => (
        <Link
          key={item.name}
          href={`/todo?tag=${item.name.toLowerCase()}`}
          className="flex items-center gap-2 py-1.5 px-2 rounded-md hover hover:bg-muted/50"
        >
          <TagIcon style={{ color: `${item.color}` }} className="size-4" />
          <span>{item.name}</span>
        </Link>
      ))}
    </GeneralList>
  );
}
