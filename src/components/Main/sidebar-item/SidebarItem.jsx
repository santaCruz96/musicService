import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./SidebarItem.module.css"

function SidebarItem({playlists}) {
  const [sidebarItemClass, setSidebarItemClass] = useState(`${style.skeletonSidebar}`)
  const [sidebarLinkClass, setSidebarLinkClass] = useState(`${style.hidden}`)

  useEffect(
    () => {
   const showSkelet = setTimeout(() => {
    setSidebarItemClass(`${style.item}`)
    setSidebarLinkClass(`${style.link}`)
    }, 5000)
    return () => {
        clearTimeout(showSkelet)
    }
    }, [])
  

  return (
    <div>
      {playlists.map((playlist) => (
        <div className={sidebarItemClass}>
          <Link key={playlist.id} className={sidebarLinkClass} to={`/playlist/${playlist.id}`}>
              <img className={style.img} src={playlist.image} alt="day's playlis" />
          </Link>
        </div>
      ))}
    </div>
  );
}
  
export default SidebarItem;