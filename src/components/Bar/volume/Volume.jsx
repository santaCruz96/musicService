import { useRef, useState } from "react";
import Icons from "../../icons/Icons";
import style from "./Volume.module.css"
import useTheme from "../../context-hook/UseTheme";

function Volume() {
    const {isLight} = useTheme()
    const [volumeBefore, setVolumeBefore] = useState(50)
    const volumeInput = useRef()

    const showVolume = () => {
        setVolumeBefore(volumeInput.current.value)
    }

    return (
        <div className={style.volume}>
            <div className={style.content}>
                <div className={style.image}>
                    <Icons className={style.volumeSvg} alt="volume" name="volume"/>
                </div>
                <div className={`${style.progress} ${style.btn}`}>
                    <input className={isLight ? `${style.progressLineLight} ${style.btn}` : `${style.progressLine} ${style.btn}`} type="range" name="range" ref={volumeInput} onInput={showVolume} />
                    <div className={style.selectBtn} style={{left: `${`${volumeBefore}%`}`}}/> 
                    <div className={isLight ? style.progressBeforeLight : style.progressBefore} style={{width: `${`${volumeBefore}%`}`}} />
                </div>
            </div>
        </div>
    );
  }
  
export default Volume;