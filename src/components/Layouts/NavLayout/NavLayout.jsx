import { Outlet } from 'react-router-dom'
import Navigation from '../../MenuNavigation/Navigation'
import style from './NavLayout.module.css'
import useTheme from '../../Context-hook/UseTheme'

function NavLayout() {
    const {isLight} = useTheme()

    return (
        <div className={isLight ? style.LayoutWrapperLight : style.LayoutWrapper}>
            <div className={isLight ? style.LayoutContainerLight : style.LayoutContainer}>
                <main>
                    <Navigation />
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default NavLayout