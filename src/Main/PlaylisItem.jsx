import Icons from "../Icons";

function PlaylistItem({title, span, author, album, time}) {
    return (
      <div className="playlist__item">
        <div className="playlist__track track">
            <div className="track__title">
                <div className="track__title-image">
                        <Icons className="track__title-svg" alt="music" name="note"/>
                </div>
                <div className="track__title-text">
                    <a className="track__title-link" href="http://">
                        {title}
                        <span className="track__title-span">{span}</span>
                    </a>
                </div>
            </div>
            <div className="track__author">
                <a className="track__author-link" href="http://">{author}</a>
            </div>
            <div className="track__album">
                <a className="track__album-link" href="http://">{album}</a>
            </div>
            <div className="track__time">
                    <Icons className="track__time-svg" alt="time" name="like"/>
                <span className="track__time-text">{time}</span>
            </div>
        </div>
      </div>
    );
  }
  
export default PlaylistItem;