import "../styles/Button.css";

function Button({ type = "button", onClick, children, variant }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={variant ? `${variant}-btn` : ""}
    >
      {children}
    </button>
  );
}

export default Button;
