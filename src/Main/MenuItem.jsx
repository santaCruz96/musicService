import s from "./css/MenuItem.module.css"

function MenuItem({ text }) {
    return (
      <li className={s.menuItem}>
        <a href="http://" className={s.menuLink}>{text}</a>
      </li>
    );
  }
  
export default MenuItem;