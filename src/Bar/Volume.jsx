import Icons from "../Icons";

function Volume() {
    return (
        <div className="bar__volume-block volume">
            <div className="volume__content">
                <div className="volume__image">
                    <Icons className="volume__svg" alt="volume" name="volume"/>
                </div>
                <div className="volume__progress-line _btn">
                    <input className="volume__progress-line _btn" type="range" name="range"/>
                </div>
            </div>
        </div>
    );
  }
  
export default Volume;