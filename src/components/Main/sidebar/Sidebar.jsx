import SidebarItem from "../sidebar-item/SidebarItem";
import PLAYLISTS from "../../../constants/playlists"
import style from "./Sidebar.module.css"

function Sidebar() {
    return (
      <div className={style.sidebar}>
        <div className={style.personal}>
          <p className={style.personalName}>Sergey.Ivanov</p>
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