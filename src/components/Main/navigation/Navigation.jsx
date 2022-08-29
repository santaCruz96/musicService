import { useState } from "react";
import useTheme from "../../context-hook/UseTheme";
import BurgerLine from "../burger-line/BurgerLine";
import MenuItem from "../menu-item/MenuItem";
import Icons from "../../icons/Icons";
import logo from "../../../img/logo.png"
import logoBlack from "../../../img/logoBlack.png"
import style from "./Navigation.module.css"

function Navigation() {
    const [menuClass, setMenuClass] = useState(`${style.hidden}`)
    const [isMenuClicked, setIsMenuClicked] = useState(false)
    const { isLight, setIsLight } = useTheme()
    

    const updateMenu = () => {
      if(!isMenuClicked) {
          setMenuClass(`${style.menuList}`)
      }
      else {
          setMenuClass(`${style.hidden}`)
      }
      setIsMenuClicked(!isMenuClicked)
    }
    
  const clickedTheme = () => {
      setIsLight(!isLight)
  } 
    
    return (
      <nav className={isLight ? style.navLight : style.nav}>
        <div className={style.logo}>
          {isLight ? <img className={style.image} src={logoBlack} alt="logo"/> : <img className={style.image} src={logo} alt="logo"/>}
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
            <MenuItem url="/signin" text="Выйти" />
            <Icons className={style.themeSvg} name="theme" onClick={clickedTheme} />
          </ul>
        </div>
      </nav>
    );
  }
  
export default Navigation;
