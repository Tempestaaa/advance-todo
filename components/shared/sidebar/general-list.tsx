import AddItemButton from "@/components/shared/sidebar/add-item-button";
import PlanItem from "@/components/shared/sidebar/plan-item";

type Props = {
  header: "Private" | "Workspace";
  addItemText: "Create new list" | "Create new workspace";
};

export default function GeneralList({ header, addItemText }: Props) {
  return (
    <section className="flex flex-col gap-2">
      <header>
        <h6 className="text-base font-bold">{header}</h6>
      </header>

      <ul className="flex flex-col gap-1">
        <PlanItem />
        <AddItemButton addItemText={addItemText} />
      </ul>
    </section>
  );
}
