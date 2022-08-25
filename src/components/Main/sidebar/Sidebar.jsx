import SidebarItem from "../sidebar-item/SidebarItem";
import PLAYLISTS from "../../../constants/playlists"
import style from "./Sidebar.module.css"
import useTheme from "../../context-hook/UseTheme";

function Sidebar() {
  const {isLight} = useTheme()

    return (
      <div className={style.sidebar}>
        <div className={style.personal}>
          <p className={isLight ? style.personalNameLight : style.personalName}>Sergey.Ivanov</p>
          <div className={style.avatar}> </div>
        </div>
        <div className={style.block}>
          <div className={style.list}>
            <SidebarItem playlists={PLAYLISTS}/>
          </div>
        </div>
      </div>
    );
  }
  
export default Sidebar;