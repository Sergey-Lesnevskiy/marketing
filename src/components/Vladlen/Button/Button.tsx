import { ButtonProps } from "../../../interface/interface";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  onClick,
  isActive,
  disabled,
}) => {
  // function handelClick() {
  //   console.log("click");
  // }

  return (
    <>
      {text && (
        <button
        disabled={disabled}
          className={isActive ? "button active" : "button"}
          onClick={onClick}
        >
          {text}
        </button>
      )}
      {children && (
        <button
        disabled={disabled}
          className={isActive ? "button active" : "button"}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
