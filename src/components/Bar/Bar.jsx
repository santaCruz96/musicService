import { useRef, useState, useEffect } from "react";
import Player from "./player/Player";
import Volume from "./volume/Volume";
import style from "./Bar.module.css";

function Bar() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [songProgress, setSongProgress] = useState(0)
  const [songLength, setSongLength] = useState(0)

  const audioElem = useRef()
  const clickRef = useRef()

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    }
    else {
      audioElem.current.pause();
    }
  }, [isPlaying])

  const onPlaying = () => {
    const {duration} = audioElem.current;
    const {currentTime} = audioElem.current;
    
    setSongProgress(currentTime / duration * 100)
    setSongLength(duration)
  }

  const checkWidth = (e)=>
  {
    const width = clickRef.current.clientWidth;
    const offset = e.nativeEvent.offsetX;

    const divprogress = offset / width * 100;
    audioElem.current.currentTime = divprogress / 100 * songLength;
  }

  const publicURL = process.env.PUBLIC_URL

    return (
      <div className={style.bar}>
        <div className={style.content}>
          <audio src={`${publicURL}/Bobby_Marleni_-_Dropin.mp3`} ref={audioElem} onTimeUpdate={onPlaying}><track kind="captions"/></audio>
          <div className={style.progress} ref={clickRef} role="presentation" onClick={checkWidth}>
            <div className={style.progressLine} style={{width: `${`${songProgress}%`}`}} />
          </div>
          <div className={style.block}>
            <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <Volume/>
          </div>
        </div>
      </div>
    );
}
  
export default Bar;