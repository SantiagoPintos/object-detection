export const Control = ({ value, min, max, step, label, onChange }: ControlProps) => (
  <div>
      <label htmlFor={label} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type="range"
        id={label}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number.parseFloat(e.target.value))}
        className="w-full mt-1 block bg-gray-200 rounded-md shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <span className="text-sm text-gray-500 ml-2">{value}</span>
    </div>
);