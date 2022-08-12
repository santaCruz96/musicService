import { useState } from "react";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistItem from "./PlaylisItem";
import Icons from "../Icons";

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
    
    const [clicked, setClicked] = useState(false)

    return (
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
                <Icons className="search__svg" name="search"/>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            {filters.map(({ filterBy, id, options }) => (
        <div>
          <button
            key={id}
            onClick={() => {
              setClicked(id)
            }}
            className={
              id === clicked ? 'filter__button _btn-text active' : 'filter__button _btn-text'
            }
            type="button"
          >
            {filterBy}
          </button>
          <ul
            key={id}
            className={
              id === clicked
                ? 'filter__options' : 'hidden'
            }
          >
            {options.map(({ option, optionId }) => (
              <li key={optionId} className = 'option'>{option}</li>
            ))}
          </ul>
        </div>
      ))}
        </div>
        <div className="centerblock__content">
            <div className="content__title playlist-title">
                <PlaylistTitle className="col01" text="ТРЕК"/>
                <PlaylistTitle className="col02" text="ИСПОЛНИТЕЛЬ"/>
                <PlaylistTitle className="col03" text="АЛЬБОМ"/>
                <div className="playlist-title__col col04">
                    <Icons className="playlist-title__svg" alt="time" name="watch"/>
                </div>
            </div>
            <div className="content__playlist playlist">
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