import {useState, useEffect} from "react";
import Icons from "../Icons";
import s from "./css/PlaylistItem.module.css"

function PlaylistItem({title, span, author, album, time}) {
    const [tittleSvgClass, setTittleSvgClass] = useState(`${s.hidden}`)
    const [tittleTextClass, setTittleTextClass] = useState(`${s.skeletonText}`)
    const [tittleLinkClass, setTittleLinkClass] = useState(`${s.hidden}`)
    const [authorClass, setAuthorClass] = useState(`${s.skeletonAuthor}`)
    const [authorLinkClass, setAuthorLinkClass] = useState(`${s.hidden}`)
    const [albumClass, setAlbumClass] = useState(`${s.skeletonAlbum}`)
    const [albumLinkClass, setAlbumLinkClass] = useState(`${s.hidden}`)
    const [timeClass, setTimeClass] = useState(`${s.hidden}`)


    useEffect(
        () => {
       const showSkelet = setTimeout(() => {
        setTittleSvgClass(`${s.titleSvg}`)
        setTittleTextClass("track__title-text")
        setTittleLinkClass(`${s.titleLink}`)
        setAuthorClass(`${s.author}`)
        setAuthorLinkClass(`${s.authorLink}`)
        setAlbumClass(`${s.album}`)
        setAlbumLinkClass(`${s.albumLink}`)
        setTimeClass("track__time")
        }, 5000)
        return () => {
            clearTimeout(showSkelet)
        }
    }, [])
    
    return (
      <div className={s.item}>
        <div className={s.track}>
            <div className={s.title}>
                <div className={s.trackImage}>
                        <Icons className={tittleSvgClass} alt="music" name="note"/>
                </div>
                <div className={tittleTextClass}>
                    <a className={tittleLinkClass} href="http://">
                        {title}
                        <span className={s.trackSpan}>{span}</span>
                    </a>
                </div>
            </div>
            <div className={authorClass}>
                <a className={authorLinkClass} href="http://">{author}</a>
            </div>
            <div className={albumClass}>
                <a className={albumLinkClass} href="http://">{album}</a>
            </div>
            <div className={timeClass}>
                    <Icons className={s.timeSvg} alt="time" name="like"/>
                <span className={s.timeText}>{time}</span>
            </div>
        </div>
      </div>
    );
  }
  
export default PlaylistItem;