import Search from '../../components/Search/Search'
import FavoritePlaylistContent from '../../components/Playlist/FavoritePlaylistContent/FavoritePlaylistContent'
import style from './UserPlaylist.module.css'
import Icons from '../../components/Icons/Icons'
import useTheme from '../../components/Context-hook/UseTheme'

function UserPlaylist() {
    const { isLight } = useTheme()

    return (
        <div>
            <div className={style.CenterBlock}>
                <section className={style.CenterBlockContent}>
                    <Search />
                    <h2 className={isLight ? style.CenterBlockTitleLight : style.CenterBlockTitle}>
                        Мои треки
                    </h2>
                    <div className={style.TitleWrapper}>
                        <div className={isLight ? style.TitleTrackLight : style.TitleTrack}>ТРЕК</div>
                        <div className={isLight ? style.TitleAuthorLight : style.TitleAuthor}>ИСПОЛНИТЕЛЬ</div>
                        <div className={isLight ? style.TitleAlbumLight : style.TitleAlbum}>АЛЬБОМ</div>
                        <div className={style.TitleTime}>
                            <Icons className={style.WatchIcon} name='watch' />
                        </div>
                    </div>
                    <FavoritePlaylistContent />
                </section>
            </div>
        </div>
    )
}

export default UserPlaylist