import { useState, useEffect } from "react";
import s from "./css/SidebarItem.module.css"

function SidebarItem({link}) {
  const [sidebarItemClass, setSidebarItemClass] = useState(`${s.skeletonSidebar}`)
  const [sidebarLinkClass, setSidebarLinkClass] = useState(`${s.hidden}`)

  useEffect(
    () => {
   const showSkelet = setTimeout(() => {
    setSidebarItemClass(`${s.item}`)
    setSidebarLinkClass(`${s.link}`)
    }, 5000)
    return () => {
        clearTimeout(showSkelet)
    }
    }, [])
  

    return (
      <div className={sidebarItemClass}>
        <a className={sidebarLinkClass} href="http://">
            <img className={s.img} src={link} alt="day's playlis" />
        </a>
      </div>
    );
  }
  
export default SidebarItem;