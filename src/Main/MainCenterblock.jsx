import { useState } from "react";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistItem from "./PlaylisItem";
import Icons from "../Icons";
import s from "./css/MainCenterblock.module.css"

function MainCenterblock() {
    const filters = [
        {
          filterBy: 'исполнителю',
          id: 1,
          options: [
            { option: 'Michael Jackson', optionId: 1 },
            { option: 'Frank Sinantra', optionId: 2 },
            { option: 'Arctic Monkeys', optionId: 3 },
            { option: 'Calvin Harris', optionId: 4 },
            { option: 'Zhu', optionId: 5 },
          ],
        },
        {
          filterBy: 'году выпуска',
          id: 2,
          options: [
            { option: 2022, optionId: 1 },
            { option: 2021, optionId: 2 },
            { option: 2020, optionId: 3 },
            { option: 2019, optionId: 4 },
            { option: 2018, optionId: 5 },
          ],
        },
        {
          filterBy: 'жанру',
          id: 3,
          options: [
            { option: 'Рок', optionId: 1 },
            { option: 'Хип-хоп', optionId: 2 },
            { option: 'Поп-музыка', optionId: 3 },
            { option: 'Техно', optionId: 4 },
            { option: 'Инди', optionId: 5 },
          ],
        },
      ]
    
    const [clicked, setClicked] = useState(null)

    const handleClickFilter = (id) => {
      setClicked((prevId) => prevId === id ? null : id)
    }

    const active = `${s.active}`
  
    return (
      <div className={s.centerblock}>
        <div className={s.search}>
                <Icons className={s.searchSvg} name="search"/>
            <input className={s.text} type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className={s.h2}>Треки</h2>
        <div className={s.filter}>
            <div className={s.filterTitle}>Искать по:</div>
            {filters.map(({ filterBy, id, options }) => (
        <div>
          <button
            key={id}
            onClick={() => handleClickFilter(id)}
            className={
              `${s.button} ${s.buttonText} ${id === clicked ? active : ''}`
            }
            type="button"
          >
            {filterBy}
          </button>
          {id === clicked && (
            <ul
            key={id}
            className= {s.options}
          >
            {options.map(({ option, optionId }) => (
              <li key={optionId} className = {s.option}>{option}</li>
            ))}
          </ul>
          )}
        </div>
      ))}
        </div>
        <div className={s.content}>
            <div className={s.contentTitle}>
                <PlaylistTitle className={s.col01} text="ТРЕК"/>
                <PlaylistTitle className={s.col02} text="ИСПОЛНИТЕЛЬ"/>
                <PlaylistTitle className={s.col03} text="АЛЬБОМ"/>
            <div className={`${s.playlistCol} ${s.col04}`}>
                    <Icons className={s.titleSvg} alt="time" name="watch"/>
                </div>
            </div>
            <div className={s.playlist}>
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
  
export default MainCenterblock; 