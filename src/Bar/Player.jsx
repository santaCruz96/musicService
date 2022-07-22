import Control from "./Control";
import Icons from "../Icons";

function Player() {
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
                    <Icons className="track-play__svg" alt="music" name="note"/>
                </div>
                <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">Ты та...</a>
                </div>
                <div className="track-play__album">
                    <a className="track-play__author-link" href="http://">Баста</a>
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