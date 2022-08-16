import Icons from "../Icons";
import s from "./css/Volume.module.css"

function Volume() {
    return (
        <div className={s.volume}>
            <div className={s.content}>
                <div className={s.image}>
                    <Icons className={s.volumeSvg} alt="volume" name="volume"/>
                </div>
                <div className={`${s.progressLine} ${s.btn}`}>
                    <input className={`${s.progressLine} ${s.btn}`} type="range" name="range"/>
                </div>
            </div>
        </div>
    );
  }
  
export default Volume;