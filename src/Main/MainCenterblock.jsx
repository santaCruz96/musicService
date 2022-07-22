import FilterButton from "./FilterButton";
import PlaylistTitle from "./PlaylistTitle";
import PlaylistItem from "./PlaylisItem";
import Icons from "../Icons";

function MainCenterblock() {
    return (
      <div className="main__centerblock centerblock">
        <div className="centerblock__search search">
                <Icons className="search__svg" name="search"/>
            <input className="search__text" type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className="centerblock__h2">Треки</h2>
        <div className="centerblock__filter filter">
            <div className="filter__title">Искать по:</div>
            <FilterButton className="author" text="исполнителю"/>
            <FilterButton className="year" text="году выпуска"/>
            <FilterButton className="genre" text="жанру"/>
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