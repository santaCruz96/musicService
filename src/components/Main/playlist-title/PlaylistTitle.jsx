import style from "./PlaylistTitle.module.css"
import useTheme from "../../context-hook/UseTheme";

function PlaylistTitle({ className, text }) {

  const {isLight} = useTheme()

    return (
      <div className={isLight ? `${style.playlistColLight} ${className}` : `${style.playlistCol} ${className}`}>{text}</div>
    );
  }
  
export default PlaylistTitle;