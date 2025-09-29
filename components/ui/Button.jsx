import { btnDefaults } from "../../utils/config";

function Button({ children }) {
  const { type, color, size } = btnDefaults;
  return (
    <button
      type={type}
      className={`${color} ${size} ${rounded} ${shadow} ${transition}`}
    >
      {children}
    </button>
  );
}

export default Button;
