export default function Input({ type, onChange, value, checked }) {
  return (
    <input type={type} value={value} checked={checked} onChange={onChange} />
  );
}
