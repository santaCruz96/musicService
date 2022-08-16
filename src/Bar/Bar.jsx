import Player from "./Player";
import Volume from "./Volume";
import s from "./css/Bar.module.css"

function Bar() {
    return (
      <div className={s.bar}>
        <div className={s.content}>
          <div className={s.progress}/>
          <div className={s.block}>
            <Player/>
            <Volume/>
          </div>
        </div>
      </div>
    );
  }
  
export default Bar;