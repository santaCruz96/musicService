import { useDispatch } from 'react-redux'
import { getPlaylistId } from '../../store/slices/playlistSlice'
import style from './SidebarItem.module.css'

function SidebarItem({ src, isLoading, id }) {
    const dispatch = useDispatch()

    const onPlaylistId = (e) => {
        dispatch(getPlaylistId(e.target.id))
    }

    return (
        <div>
            <div className={style.SidebarItem}>
                {isLoading && <div className={style.Skeleton} />}
                {!isLoading && (
                    <div className={style.SidebarImage}
                        id={id}
                        role='presentation'
                        onClick={(e) => onPlaylistId(e)}
                    >
                        <img src={src} alt='complitations'/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SidebarItem