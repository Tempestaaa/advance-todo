import AddNewTask from "@/components/pages/home/add-new-task";
import ExtenedPlanList from "@/components/pages/home/extened-plan-list";
import WelcomeHeader from "@/components/pages/home/welcome-header";

export default function HomePage() {
  return (
    <article className="flex flex-col gap-8">
      <WelcomeHeader />

      <div className="flex flex-col gap-4">
        <AddNewTask />
        <ExtenedPlanList />
      </div>
    </article>
  );
}
