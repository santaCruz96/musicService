import {useState} from "react";
import BurgerLine from "./BurgerLine";
import MenuItem from "./MenuItem";
import logo from "../img/logo.png"
import s from "./css/MainNav.module.css"

function MainNav() {
    const [menuClass, setMenuClass] = useState(`${s.hidden}`)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
      if(!isMenuClicked) {
          setMenuClass(`${s.menuList}`)
      }
      else {
          setMenuClass(`${s.hidden}`)
      }
      setIsMenuClicked(!isMenuClicked)
    }
    
    return (
      <nav className={s.nav}>
        <div className={s.logo}>
          <img className={s.image} src={logo} alt="logo"/>
        </div>
        <div className={s.burger} role="presentation" onClick={updateMenu}> 
          <BurgerLine/>
          <BurgerLine/>
          <BurgerLine/>
        </div>
        <div className={s.menu}>
          <ul className={menuClass}>
            <MenuItem text="Главное"/>
            <MenuItem text="Мой плейлист"/>
            <MenuItem text="Войти"/>
          </ul>
        </div>
      </nav>
    );
  }
  
export default MainNav;
