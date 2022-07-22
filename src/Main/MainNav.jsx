import BurgerLine from "./BurgerLine";
import MenuItem from "./MenuItem";
import logo from "../img/logo.png"

function MainNav() {
    return (
      <nav className="main__nav nav">
        <div className="nav__logo logo">
          <img className="logo__image" src={logo} alt="logo"/>
        </div>
        <div className="nav__burger burger"> 
          <BurgerLine/>
          <BurgerLine/>
          <BurgerLine/>
        </div>
        <div className="nav__menu menu">
          <ul className="menu__list">
            <MenuItem text="Главное"/>
            <MenuItem text="Мой плейлист"/>
            <MenuItem text="Войти"/>
          </ul>
        </div>
      </nav>
    );
  }
  
export default MainNav;