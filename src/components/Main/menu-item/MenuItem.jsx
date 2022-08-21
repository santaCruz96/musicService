import { Link } from "react-router-dom";
import style from "./MenuItem.module.css"

function MenuItem({ text, url }) {
    return (
      <li className={style.menuItem}>
        <Link to={url} className={style.menuLink}>{text}</Link>
      </li>
    );
  }
  
export default MenuItem;