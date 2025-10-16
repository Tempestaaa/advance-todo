type Props = {
  label: string;
  children: React.ReactNode;
};

export default function GeneralList({ label, children }: Props) {
  return (
    <section className="flex flex-col gap-2">
      <header className="font-bold uppercase text-xs text-muted-foreground">
        {label}
      </header>

      <menu>{children}</menu>
    </section>
  );
}
