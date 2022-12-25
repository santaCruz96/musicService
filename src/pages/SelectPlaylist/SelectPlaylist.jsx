import { useParams } from 'react-router-dom'
import Search from '../../components/Search/Search'
import SelectPlaylistContent from '../../components/Playlist/SelectPlaylistContent/SelectPlaylistContent'
import style from './SelectPlaylist.module.css'
import Icons from '../../components/Icons/Icons'
import useTheme from '../../components/Context-hook/UseTheme'

function SelectPlaylist() {
    const {isLight} = useTheme()
    const playlistArr = ['Плейлист дня', '100 танцевальных хитов', 'Инди заряд']

    const params = useParams()
    const playlistId = params.id

    return (
        <div>
            <div className={style.CenterBlock}>
                <section className={style.CenterBlockContent}>
                    <Search />
                    <h2 className={isLight ? style.CenterBlockTitleLight : style.CenterBlockTitle}>
                        {playlistArr[playlistId - 1]}
                    </h2>
                    <div className={style.TitleWrapper}>
                        <div className={isLight ? style.TitleTrackLight : style.TitleTrack}>ТРЕК</div>
                        <div className={isLight ? style.TitleAuthorLight : style.TitleAuthor}>ИСПОЛНИТЕЛЬ</div>
                        <div className={isLight ? style.TitleAlbumLight : style.TitleAlbum}>АЛЬБОМ</div>
                        <div className={style.TitleTime}>
                            <Icons className={style.WatchIcon} name='watch' />
                        </div>
                    </div>
                    <SelectPlaylistContent playlistId={playlistId} />
                </section>
            </div>
        </div>
    )
}

export default SelectPlaylist