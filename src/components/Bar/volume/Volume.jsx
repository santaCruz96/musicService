import Icons from "../../icons/Icons";
import style from "./Volume.module.css"

function Volume() {
    return (
        <div className={style.volume}>
            <div className={style.content}>
                <div className={style.image}>
                    <Icons className={style.volumeSvg} alt="volume" name="volume"/>
                </div>
                <div className={`${style.progressLine} ${style.btn}`}>
                    <input className={`${style.progressLine} ${style.btn}`} type="range" name="range"/>
                </div>
            </div>
        </div>
    );
  }
  
export default Volume;