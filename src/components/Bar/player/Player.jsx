import {useState, useEffect} from "react";
import Control from "../control/Control";
import Icons from "../../icons/Icons";
import style from "./Player.module.css"

function Player({isPlaying, setIsPlaying}) {
    const [svgClass, setSvgClass] = useState(`${style.hidden}`)
    const [authorClass, setAuthorClass] = useState(`${style.skeletonAuthor}`)
    const [albumClass, setAlbumClass] = useState(`${style.skeletonAlbum}`)
    const [authorLinkClass, setAuthorLinkClass] = useState(`${style.hidden}`)

    useEffect(
        () => {
       const showSkelet = setTimeout(() => {
            setSvgClass(`${style.trackPlaySvg}`)
            setAuthorClass(`${style.author}`)
            setAlbumClass(`${style.album}`)
            setAuthorLinkClass(`${style.authorLink}`)
        }, 5000)
        return () => {
            clearTimeout(showSkelet)
        }
        }, [])
    
    const PlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
      <div className={style.player}>
        <div className={style.controls}>
            <Control className={style.prev} svgClass={style.prevSvg} secondClassName={style.btn} name="prev"/>
            {isPlaying ? <Control onClick={PlayPause} className={style.play} svgClass={style.pauseSvg} secondClassName={style.btn} name="pause" /> :
            <Control onClick={PlayPause} className={style.play} svgClass={style.playSvg} secondClassName={style.btn} name="play"/>}
            <Control className={style.next} svgClass={style.nextSvg} secondClassName={style.btn} name="next"/>
            <Control className={style.repeat} svgClass={style.repeatSvg} secondClassName={style.btnIcon} name="repeat"/>
            <Control className={style.shuffle} svgClass={style.shuffleSvg} secondClassName={style.btnIcon} name="shuffle"/>
        </div>
        <div className={style.trackPlay}>
            <div className={style.contain}>
                <div className={style.playImage}>
                    <Icons className={svgClass} alt="music" name="note"/>
                </div>
                <div className={authorClass}>
                    <a className={authorLinkClass} href="http://">Ты та...</a>
                </div>
                <div className={albumClass}>
                    <a className={authorLinkClass} href="http://">Баста</a>
                </div>
            </div>
            <div className={style.likeDis}>
                <Control className={style.like} svgClass={style.likeSvg} secondClassName={style.btnIcon} name="like"/>
                <Control className={style.dislike} svgClass={style.dislikeSvg} secondClassName={style.btnIcon} name="dislike"/>
            </div>
        </div>
      </div>
    );
  }
  
export default Player;