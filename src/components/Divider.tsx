export default function Divider({ dark = false }: { dark?: boolean }) {
  const color = dark ? "bg-gold-light/30" : "bg-gold-light";
  const borderColor = dark ? "border-gold-light/30" : "border-gold";
  return (
    <div className="flex items-center justify-center gap-4 py-2">
      <div className={`h-px w-20 ${color}`} />
      <div
        className={`h-2 w-2 rotate-45 border ${borderColor}`}
      />
      <div className={`h-px w-20 ${color}`} />
    </div>
  );
}
