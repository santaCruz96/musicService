import {useState, useEffect} from "react";
import Control from "./Control";
import Icons from "../Icons";

function Player() {
    const [svgClass, setSvgClass] = useState("hidden")
    const [authorClass, setAuthorClass] = useState("player__skeleton-author")
    const [albumClass, setAlbumClass] = useState("player__skeleton-album")
    const [authorLinkClass, setAuthorLinkClass] = useState("hidden")

    useEffect(
        () => {
       const showSkelet = setTimeout(() => {
            setSvgClass("track-play__svg")
            setAuthorClass("track-play__author")
            setAlbumClass("track-play__album")
            setAuthorLinkClass("track-play__author-link")
        }, 5000)
        return () => {
            clearTimeout(showSkelet)
        }
    }, [])

    return (
      <div className="bar__player player">
        <div className="player__controls">
            <Control className="player__btn-prev" secondClassName="" name="prev"/>
            <Control className="player__btn-play" secondClassName="_btn" name="play"/>
            <Control className="player__btn-next" secondClassName="" name="next"/>
            <Control className="player__btn-repeat" secondClassName="_btn-icon" name="repeat"/>
            <Control className="player__btn-shuffle" secondClassName="_btn-icon" name="shuffle"/>
        </div>
        <div className="player__track-play track-play">
            <div className="track-play__contain">
                <div className="track-play__image">
                    <Icons className={svgClass} alt="music" name="note"/>
                </div>
                <div className={authorClass}>
                    <a className={authorLinkClass} href="http://">Ты та...</a>
                </div>
                <div className={albumClass}>
                    <a className={authorLinkClass} href="http://">Баста</a>
                </div>
            </div>
            <div className="track-play__like-dis">
                <Control className="track-play__like" secondClassName="_btn-icon" name="like"/>
                <Control className="track-play__dislike" secondClassName="_btn-icon" name="dislike"/>
            </div>
        </div>
      </div>
    );
  }
  
export default Player;