interface ProgressRingProps {
  value: number;
  label: string;
  sublabel: string;
}

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function ProgressRing({ value, label, sublabel }: ProgressRingProps) {
  const offset = CIRCUMFERENCE - (value / 100) * CIRCUMFERENCE;

  return (
    <div className="ring">
      <svg viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={RADIUS} />
        <circle
          className="meter"
          cx="60"
          cy="60"
          r={RADIUS}
          style={{ strokeDashoffset: offset }}
        />
      </svg>
      <p>
        {label}
        <br />
        <strong>{sublabel}</strong>
      </p>
    </div>
  );
}
