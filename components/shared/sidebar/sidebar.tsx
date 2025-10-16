import LabelList from "@/components/shared/sidebar/label-list";
import MainList from "@/components/shared/sidebar/main-list";
import SearchBar from "@/components/shared/sidebar/search-bar";
import SidebarHeader from "@/components/shared/sidebar/sidebar-header";
import { Separator } from "@/components/ui/separator";

export default function Sidebar() {
  return (
    <aside className="sticky top-0 left-0 w-xs h-dvh max-h-dvh shrink-0 p-4 flex flex-col gap-4 bg-muted/50">
      <SidebarHeader />
      <Separator />
      <SearchBar />
      <div className="flex-1 flex flex-col gap-4 overflow-y-auto scrollbar">
        <MainList />
        <LabelList />
      </div>
    </aside>
  );
}
