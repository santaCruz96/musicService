import SidebarItem from "./SidebarItem";
import logo1 from "../img/playlist01.png"
import logo2 from "../img/playlist02.png"
import logo3 from "../img/playlist03.png"

function MainSidebar() {
    return (
      <div className="main__sidebar sidebar">
        <div className="sidebar__personal">
          <p className="sidebar__personal-name">Sergey.Ivanov</p>
          <div className="sidebar__avatar"> </div>
        </div>
        <div className="sidebar__block">
          <div className="sidebar__list">
            <SidebarItem link={logo1}/>
            <SidebarItem link={logo2}/>
            <SidebarItem link={logo3}/>
          </div>
        </div>
      </div>
    );
  }
  
export default MainSidebar;