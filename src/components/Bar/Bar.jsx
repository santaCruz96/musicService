import Player from "./player/Player";
import Volume from "./volume/Volume";
import style from "./Bar.module.css"

function Bar() {
    return (
      <div className={style.bar}>
        <div className={style.content}>
          <div className={style.progress}/>
          <div className={style.block}>
            <Player/>
            <Volume/>
          </div>
        </div>
      </div>
    );
  }
  
export default Bar;