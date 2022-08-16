import {useState, useEffect} from "react";
import Control from "./Control";
import Icons from "../Icons";
import s from "./css/Player.module.css"

function Player() {
    const [svgClass, setSvgClass] = useState(`${s.hidden}`)
    const [authorClass, setAuthorClass] = useState(`${s.skeletonAuthor}`)
    const [albumClass, setAlbumClass] = useState(`${s.skeletonAlbum}`)
    const [authorLinkClass, setAuthorLinkClass] = useState(`${s.hidden}`)

    useEffect(
        () => {
       const showSkelet = setTimeout(() => {
            setSvgClass(`${s.trackPlaySvg}`)
            setAuthorClass(`${s.author}`)
            setAlbumClass(`${s.album}`)
            setAuthorLinkClass(`${s.authorLink}`)
        }, 5000)
        return () => {
            clearTimeout(showSkelet)
        }
    }, [])

    return (
      <div className={s.player}>
        <div className={s.controls}>
            <Control className={s.prev} svgClass={s.prevSvg} secondClassName={s.btn} name="prev"/>
            <Control className={s.play} svgClass={s.playSvg} secondClassName={s.btn} name="play"/>
            <Control className={s.next} svgClass={s.nextSvg} secondClassName={s.btn} name="next"/>
            <Control className={s.repeat} svgClass={s.repeatSvg} secondClassName={s.btnIcon} name="repeat"/>
            <Control className={s.shuffle} svgClass={s.shuffleSvg} secondClassName={s.btnIcon} name="shuffle"/>
        </div>
        <div className={s.trackPlay}>
            <div className={s.contain}>
                <div className={s.playImage}>
                    <Icons className={svgClass} alt="music" name="note"/>
                </div>
                <div className={authorClass}>
                    <a className={authorLinkClass} href="http://">Ты та...</a>
                </div>
                <div className={albumClass}>
                    <a className={authorLinkClass} href="http://">Баста</a>
                </div>
            </div>
            <div className={s.likeDis}>
                <Control className={s.like} svgClass={s.likeSvg} secondClassName={s.btnIcon} name="like"/>
                <Control className={s.dislike} svgClass={s.dislikeSvg} secondClassName={s.btnIcon} name="dislike"/>
            </div>
        </div>
      </div>
    );
  }
  
export default Player;