import Search from '../../components/Search/Search'
import Filter from '../../components/Filter/Filter/Filter'
import Playlist from '../../components/Playlist/Playlist/Playlist'
import Sidebar from '../../components/Sidebar/Sidebar'
import style from './Tracks.module.css'
import Icons from '../../components/icons/Icons'
import useTheme from '../../components/context-hook/UseTheme'

function Tracks() {
    const { isLight } = useTheme()
    
    return (
        <>
            <div className={style.CenterBlock}>
                <section className={style.CenterBlockContent}>
                    <Search />
                    <h2 className={isLight ? style.CenterBlockTitleLight : style.CenterBlockTitle}>Треки</h2>
                    <Filter />
                    <div className={style.TitleWrapper}>
                        <div className={isLight ? style.TitleTrackLight : style.TitleTrack}>ТРЕК</div>
                        <div className={isLight ? style.TitleAuthorLight : style.TitleAuthor}>ИСПОЛНИТЕЛЬ</div>
                        <div className={isLight ? style.TitleAlbumLight : style.TitleAlbum}>АЛЬБОМ</div>
                        <div className={style.TitleTime}>
                            <Icons className={style.WatchIcon} name='watch' />
                        </div>
                    </div>
                    <Playlist />
                </section>
            </div>
            <Sidebar />
        </>
    )
}

export default Tracks