import { useState } from "react";
import PlaylistTitle from "../playlist-title/PlaylistTitle";
import PlaylistItem from "../playlist-item/PlaylisItem";
import Icons from "../../icons/Icons";
import FILTERS from "../../../constants/filters";
import style from "./Centerblock.module.css"
import useTheme from "../../context-hook/UseTheme";

function Centerblock() {
    const {isLight} = useTheme()  

    const [clicked, setClicked] = useState(null)

    const handleClickFilter = (id) => {
      setClicked((prevId) => prevId === id ? null : id)
    }

    const active = `${style.active}`
  
    return (
      <div className={style.centerblock}>
        <div className={isLight ? style.searchLight : style.search}>
                <Icons className={style.searchSvg} name="search"/>
            <input className={isLight ? style.textLight : style.text} type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className={isLight ? style.h2Light : style.h2}>Треки</h2>
        <div className={style.filter}>
            <div className={isLight ? style.filterTitleLight : style.filterTitle}>Искать по:</div>
            {FILTERS.map(({ filterBy, id, options }) => (
        <div>
          <button
            key={id}
            onClick={() => handleClickFilter(id)}
            className={
              isLight ? `${style.buttonLight} ${style.buttonText} ${id === clicked ? active : ''}` :
                        `${style.button} ${style.buttonText} ${id === clicked ? active : ''}` 
            }
            type="button"
          >
            {filterBy}
          </button>
          {id === clicked && (
            <ul
            key={id}
            className= {isLight ? style.optionsLight : style.options}
          >
            {options.map(({ option, optionId }) => (
              <li key={optionId} className = {isLight ? style.optionLight : style.option}>{option}</li>
            ))}
          </ul>
          )}
        </div>
      ))}
        </div>
        <div className={style.content}>
            <div className={style.contentTitle}>
                <PlaylistTitle className={style.col01} text="ТРЕК"/>
                <PlaylistTitle className={style.col02} text="ИСПОЛНИТЕЛЬ"/>
                <PlaylistTitle className={style.col03} text="АЛЬБОМ"/>
            <div className={isLight ? `${style.playlistColLight} ${style.col04}` : `${style.playlistCol} ${style.col04}`}>
                    <Icons className={style.titleSvg} alt="time" name="watch"/>
                </div>
            </div>
            <div className={style.playlist}>
                <PlaylistItem title="Guilt" author="Nero" album="Welcome Reality" time="4:44"/>
                <PlaylistItem title="Elektro" author="Dynoro, Outwork, Mr. Gee" album="Elektro" time="2:22"/>
                <PlaylistItem title="I’m Fire" author="Ali Bakgor" album="I’m Fire" time="2:22"/>
                <PlaylistItem title="Non Stop" span="(Remix)" author="Стоункат, Psychopath" album="Non Stop" time="4:12"/>
                <PlaylistItem title="Run Run" span="(feat. AR/CO)" author="Jaded, Will Clarke, AR/CO" album="Run Run" time="2:54"/>
                <PlaylistItem title="Eyes on Fire" span="(Zeds Dead Remix)" author="Blue Foundation, Zeds Dead" album="Eyes on Fire" time="5:20"/>
                <PlaylistItem title="Mucho Bien" span="(Hi Profile Remix)" author="HYBIT, Mr. Black, Offer Nissim, Hi Profile" album="Mucho Bien" time="3:41"/>
                <PlaylistItem title="Knives n Cherries" author="minthaze" album="Captivating" time="1:48"/>
                <PlaylistItem title="How Deep Is Your Love" author="Calvin Harris, Disciples" album="How Deep Is Your Love" time="3:32"/>
                <PlaylistItem title="Morena" author="Tom Boxer" album="Soundz Made in Romania" time="3:36"/>
            </div>
        </div>
      </div>
    );
}
  
export default Centerblock; 