import {useState, useEffect} from "react";
import Icons from "../../icons/Icons";
import style from "./PlaylistItem.module.css"
import useTheme from "../../context-hook/UseTheme";

function PlaylistItem({ title, span, author, album, time }) {
    const {isLight} = useTheme()
    const [tittleSvgClass, setTittleSvgClass] = useState(`${style.hidden}`)
    const [tittleTextClass, setTittleTextClass] = useState(`${style.skeletonText}`)
    const [tittleLinkClass, setTittleLinkClass] = useState(`${style.hidden}`)
    const [authorClass, setAuthorClass] = useState(`${style.skeletonAuthor}`)
    const [authorLinkClass, setAuthorLinkClass] = useState(`${style.hidden}`)
    const [albumClass, setAlbumClass] = useState(`${style.skeletonAlbum}`)
    const [albumLinkClass, setAlbumLinkClass] = useState(`${style.hidden}`)
    const [timeClass, setTimeClass] = useState(`${style.hidden}`)


    useEffect(
        () => {
       const showSkelet = setTimeout(() => {
        setTittleSvgClass(`${style.titleSvg}`)
        setTittleTextClass("track__title-text")
        setTittleLinkClass(`${style.titleLink}`)
        setAuthorClass(`${style.author}`)
        setAuthorLinkClass(`${style.authorLink}`)
        setAlbumClass(`${style.album}`)
        setAlbumLinkClass(`${style.albumLink}`)
        setTimeClass("track__time")
        }, 5000)
        return () => {
            clearTimeout(showSkelet)
        }
    }, [])
    
    return (
      <div className={style.item}>
        <div className={style.track}>
            <div className={style.title}>
                <div className={isLight ? style.trackImageLight : style.trackImage}>
                        <Icons className={tittleSvgClass} alt="music" name="note"/>
                </div>
                <div className={tittleTextClass}>
                        <a className={isLight ? style.titleLinkLight : tittleLinkClass} href="http://">
                        {title}
                        <span className={isLight ? style.trackSpanLight : style.trackSpan}>{span}</span>
                    </a>
                </div>
            </div>
            <div className={authorClass}>
                <a className={isLight ? style.authorLinkLight : authorLinkClass} href="http://">{author}</a>
            </div>
            <div className={albumClass}>
                <a className={isLight ? style.albumLinkLight : albumLinkClass} href="http://">{album}</a>
            </div>
            <div className={timeClass}>
                    <Icons className={style.timeSvg} alt="time" name="like"/>
                <span className={isLight ? style.timeTextLight : style.timeText}>{time}</span>
            </div>
        </div>
      </div>
    );
  }
  
export default PlaylistItem;