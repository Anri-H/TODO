import "./Input.scss";

export default function Input({ type, onChange, value, checked }) {
  return (
    <input
      className="input"
      type={type}
      value={value}
      checked={checked}
      onChange={onChange}
    />
  );
}
