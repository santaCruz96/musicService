import {useState} from "react";
import BurgerLine from "../burger-line/BurgerLine";
import MenuItem from "../menu-item/MenuItem";
import logo from "../../../img/logo.png"
import style from "./Navigation.module.css"

function Navigation() {
    const [menuClass, setMenuClass] = useState(`${style.hidden}`)
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
      if(!isMenuClicked) {
          setMenuClass(`${style.menuList}`)
      }
      else {
          setMenuClass(`${style.hidden}`)
      }
      setIsMenuClicked(!isMenuClicked)
    }
    
    return (
      <nav className={style.nav}>
        <div className={style.logo}>
          <img className={style.image} src={logo} alt="logo"/>
        </div>
        <div className={style.burger} role="presentation" onClick={updateMenu}> 
          <BurgerLine/>
          <BurgerLine/>
          <BurgerLine/>
        </div>
        <div className={style.menu}>
          <ul className={menuClass}>
            <MenuItem url="/" text="Главное"/>
            <MenuItem url="/playlist/my" text="Мой плейлист"/>
            <MenuItem url="/signin" text="Выйти"/>
          </ul>
        </div>
      </nav>
    );
  }
  
export default Navigation;
