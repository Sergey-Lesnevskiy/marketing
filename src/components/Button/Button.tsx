import { ButtonProps } from "../../interface/interface";
import "./Button.css";

const Button: React.FC<ButtonProps> = ({ text, children , onClick, isActive}) => {
  // function handelClick() {
  //   console.log("click");
  // }

  return (
    <>
      {text&&<button className={isActive?'button active':'active'} onClick={onClick}>{text}</button>}
      {children && <button className={isActive?'button active':'active'} onClick={onClick}>{children}</button>} 
    </>
  );
};

export default Button;
