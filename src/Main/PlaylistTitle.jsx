import s from "./css/PlaylistTitle.module.css"

function PlaylistTitle({ className, text }) {
    return (
      <div className={`${s.playlistCol} ${className}`}>{text}</div>
    );
  }
  
export default PlaylistTitle;