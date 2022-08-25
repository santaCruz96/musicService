import { Link } from "react-router-dom";
import style from "./MenuItem.module.css"
import useTheme from "../../context-hook/UseTheme";

function MenuItem({ text, url }) {
  const {isLight} = useTheme()

    return (
      <li className={style.menuItem}>
        <Link to={url} className={isLight ? style.menuLinkLight : style.menuLink}>{text}</Link>
      </li>
    );
  }
  
export default MenuItem;