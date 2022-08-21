import style from "./PlaylistTitle.module.css"

function PlaylistTitle({ className, text }) {
    return (
      <div className={`${style.playlistCol} ${className}`}>{text}</div>
    );
  }
  
export default PlaylistTitle;