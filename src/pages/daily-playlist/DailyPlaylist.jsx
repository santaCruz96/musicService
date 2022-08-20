import { useParams } from "react-router-dom";
import { useState } from "react";
import PlaylistTitle from "../../components/Main/playlist-title/PlaylistTitle";
import PlaylistItem from "../../components/Main/playlist-item/PlaylisItem";
import Icons from "../../components/icons/Icons";
import FILTERS from "../../constants/filters";
import PLAYLISTS from "../../constants/playlists";
import style from "./DailyPlaylist.module.css"

function MainCenterblock() {
    const params = useParams()

    const playlist = PLAYLISTS.find((playlist) => playlist.id === Number(params.id))

    const [clicked, setClicked] = useState(null)

    const handleClickFilter = (id) => {
      setClicked((prevId) => prevId === id ? null : id)
    }

    const active = `${style.active}`
  
    return (
      <div className={style.centerblock}>
        <div className={style.search}>
                <Icons className={style.searchSvg} name="search"/>
            <input className={style.text} type="search" placeholder="Поиск" name="search"/>
        </div>
        <h2 className={style.h2}>{playlist.text}</h2>
        <div className={style.filter}>
            <div className={style.filterTitle}>Искать по:</div>
            {FILTERS.map(({ filterBy, id, options }) => (
        <div>
          <button
            key={id}
            onClick={() => handleClickFilter(id)}
            className={
              `${style.button} ${style.buttonText} ${id === clicked ? active : ''}`
            }
            type="button"
          >
            {filterBy}
          </button>
          {id === clicked && (
            <ul
            key={id}
            className= {style.options}
          >
            {options.map(({ option, optionId }) => (
              <li key={optionId} className = {style.option}>{option}</li>
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
            <div className={`${style.playlistCol} ${style.col04}`}>
                    <Icons className={style.titleSvg} alt="time" name="watch"/>
                </div>
            </div>
                <div className={style.playlist}>
                    {playlist.songs.map((song) => (
                        <PlaylistItem
                            title={song.title}
                            span={song.span}
                            author={song.author}
                            album={song.album}
                            time={song.time}
                        />   
                    ))}
            </div>
        </div>
      </div>
    );
}
  
export default MainCenterblock; 