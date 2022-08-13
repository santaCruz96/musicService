import {useState, useEffect} from "react";

function SidebarItem({link}) {
  const [sidebarItemClass, setSidebarItemClass] = useState("skeleton__sidebar")
  const [sidebarLinkClass, setSidebarLinkClass] = useState("hidden")

  useEffect(
    () => {
   const showSkelet = setTimeout(() => {
    setSidebarItemClass("sidebar__item")
    setSidebarLinkClass("sidebar__link")
    }, 5000)
    return () => {
        clearTimeout(showSkelet)
    }
    }, [])
  

    return (
      <div className={sidebarItemClass}>
        <a className={sidebarLinkClass} href="http://">
            <img className="sidebar__img" src={link} alt="day's playlis" />
        </a>
      </div>
    );
  }
  
export default SidebarItem;