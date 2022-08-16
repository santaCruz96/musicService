import SidebarItem from "./SidebarItem";
import logo1 from "../img/playlist01.png"
import logo2 from "../img/playlist02.png"
import logo3 from "../img/playlist03.png"
import s from "./css/MainSidebar.module.css"

function MainSidebar() {
    return (
      <div className={s.sidebar}>
        <div className={s.personal}>
          <p className={s.personalName}>Sergey.Ivanov</p>
          <div className={s.avatar}> </div>
        </div>
        <div className={s.block}>
          <div className={s.list}>
            <SidebarItem link={logo1}/>
            <SidebarItem link={logo2}/>
            <SidebarItem link={logo3}/>
          </div>
        </div>
      </div>
    );
  }
  
export default MainSidebar;