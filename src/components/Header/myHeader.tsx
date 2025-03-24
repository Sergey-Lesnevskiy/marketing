import Navigation from "../Navigation/Navigation";
import classes from"./myHeader.module.css";
import logo from "../../../public/logo.svg";
import { useEffect, useState } from "react";

const MyHeader: React.FC = () => {

  const [now, setNow] = useState(new Date());
  // const now = new Date();
  useEffect(()=>{
    setInterval(()=>{
      setNow(new Date())
    },1000);
  })
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt="" />
      </div>
      <Navigation />
      <div className={classes.logo}>Время: {now.toLocaleTimeString()}</div>
    </header>
  );
};
export default MyHeader;
