import {useState} from "react";
import BurgerLine from "./BurgerLine";
import MenuItem from "./MenuItem";
import logo from "../img/logo.png"

function MainNav() {
    const [menuClass, setMenuClass] = useState("hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
      if(!isMenuClicked) {
          setMenuClass("menu__list")
      }
      else {
          setMenuClass("hidden")
      }
      setIsMenuClicked(!isMenuClicked)
    }
    
    return (
      <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src={logo} alt="logo"/>
        </div>
        <div className="nav__burger burger" role="presentation" onClick={updateMenu}> 
          <BurgerLine/>
          <BurgerLine/>
          <BurgerLine/>
        </div>
        <div className="nav__menu menu">
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
