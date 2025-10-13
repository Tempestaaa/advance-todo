import dayjs from "dayjs";

export default function WelcomeHeader() {
  const hour = +dayjs().format("H");
  const welcomeText = () => {
    if (hour >= 0 && hour < 13) return "Morning";
    else if (hour >= 13 && hour < 19) return "Afternoon";
    else return "Evening";
  };
  const date = dayjs().format("ddd, D MMMM YYYY");

  return (
    <header className="h-12 flex flex-col">
      <h4 className="text-xl font-bold">Welcome {welcomeText()}, Username!</h4>
      <p className="text-muted-foreground">It&apos;s {date}</p>
    </header>
  );
}
