import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useTheme from '../context-hook/UseTheme'
import { setLogout } from '../../store/slices/authSlice'
import style from './Navigation.module.css'
import logo from '../../img/logo.png'
import logoBlack from '../../img/logoBlack.png'
import Icons from '../icons/Icons'

function Navigation() {
    const [menuShown, setMenuShown] = useState(false)
    const { isLight, setIsLight } = useTheme()

    const burgerClickHandler = () => setMenuShown(!menuShown)

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(setLogout())
        document.cookie = 'token=; max-age=-1'
        document.cookie = 'username=; max-age=-1'
    }

    const clickedTheme = () => {
        setIsLight(!isLight)
    } 

    return (
        <section className={isLight ? style.NavigationLight : style.Navigation}>
            {isLight ?
                <img className={style.LogoNav} src={logoBlack} alt="logo" /> :
                <img className={style.LogoNav} src={logo} alt="logo" />
            }
            <div className={style.Burger} role='presentation' onClick={burgerClickHandler}>
                <span className={isLight ? style.BurgerLineLight : style.BurgerLine}/>
                <span className={isLight ? style.BurgerLineLight : style.BurgerLine}/>
                <span className={isLight ? style.BurgerLineLight : style.BurgerLine}/>
            </div>
            <div className={style.Menu} style={{ display: menuShown ? 'block' : 'none' }}>
                <ul className={isLight ? style.MenuListLight : style.MenuList}>
                    <NavLink to="/tracks">
                        <li className={isLight ? style.MenuItemLight : style.MenuItem}>Главная</li>
                    </NavLink>
                    <NavLink to="/my_playlist">
                        <li className={isLight ? style.MenuItemLight : style.MenuItem}>Мой плейлист</li>
                    </NavLink>
                    <NavLink to="/login" onClick={onLogout}>
                        <li className={isLight ? style.MenuItemLight : style.MenuItem}>Выйти</li>
                    </NavLink>
                    <Icons onClick={clickedTheme} className={style.ThemeIcon} name='theme'/>
                </ul>
            </div>
        </section>
    )
}

export default Navigation