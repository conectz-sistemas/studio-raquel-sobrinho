export default function Logo({ size = 28 }) {
  return (
    <div
      className="font-display text-accent"
      style={{ fontSize: size, lineHeight: 1, fontWeight: 700 }}
      aria-label="Studio Raquel Sobrinho"
      title="Studio Raquel Sobrinho"
    >
      RS
    </div>
  );
}
