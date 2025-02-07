export const Control = ({ value, min, max, step, label, onChange }: ControlProps) => (
  <div>
    <label>{label} (<span>{value}</span>)</label>
    <br />
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
    />
  </div>
);