import {useState, useEffect} from "react";
import Icons from "../Icons";

function PlaylistItem({title, span, author, album, time}) {
    const [tittleSvgClass, setTittleSvgClass] = useState("hidden")
    const [tittleTextClass, setTittleTextClass] = useState("skeleton__text")
    const [tittleLinkClass, setTittleLinkClass] = useState("hidden")
    const [authorClass, setAuthorClass] = useState("skeleton__author")
    const [authorLinkClass, setAuthorLinkClass] = useState("hidden")
    const [albumClass, setAlbumClass] = useState("skeleton__album")
    const [albumLinkClass, setAlbumLinkClass] = useState("hidden")
    const [timeClass, setTimeClass] = useState("hidden")


    useEffect(
        () => {
       const showSkelet = setTimeout(() => {
        setTittleSvgClass("track__title-svg")
        setTittleTextClass("track__title-text")
        setTittleLinkClass("track__title-link")
        setAuthorClass("track__author")
        setAuthorLinkClass("track__author-link")
        setAlbumClass("track__album")
        setAlbumLinkClass("track__album-link")
        setTimeClass("track__time")
        }, 5000)
        return () => {
            clearTimeout(showSkelet)
        }
    }, [])
    
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image">
                        <Icons className={tittleSvgClass} alt="music" name="note"/>
                </div>
                <div className={tittleTextClass}>
                    <a className={tittleLinkClass} href="http://">
                        {title}
                        <span className="track__title-span">{span}</span>
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
                    <Icons className="track__time-svg" alt="time" name="like"/>
                <span className="track__time-text">{time}</span>
            </div>
        </div>
      </div>
    );
  }
  
export default PlaylistItem;