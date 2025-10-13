import GeneralList from "@/components/shared/sidebar/general-list";
import SidebarHeader from "@/components/shared/sidebar/sidebar-header";

export default function Sidebar() {
  return (
    <aside className="basis-1/4 rounded-md flex flex-col gap-8">
      <SidebarHeader />

      <section className="flex-1 overflow-y-auto space-y-8">
        <GeneralList header="Private" addItemText="Create new list" />
        <GeneralList header="Workspace" addItemText="Create new workspace" />
      </section>
    </aside>
  );
}
