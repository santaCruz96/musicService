function SidebarItem({link}) {
    return (
      <div className="sidebar__item">
        <a className="sidebar__link" href="http://">
            <img className="sidebar__img" src={link} alt="day's playlis" />
        </a>
      </div>
    );
  }
  
export default SidebarItem;