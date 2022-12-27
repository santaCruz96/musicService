import { useSelector } from 'react-redux'
import Icons from '../../icons/Icons'
import {
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from '../../../api/musicApi'
import style from './FavoriteButtons.module.css'

function FavoriteButtons() {
    const currentTrackId = useSelector((state) => state.player.id)

    const [addTrack] = useAddFavoriteTrackMutation()
    const [deleteTrack] = useDeleteFavoriteTrackMutation()

    const onAddTrack = () => {
        addTrack(currentTrackId)
    }

    const onDeleteTrack = () => {
        deleteTrack(currentTrackId)
    }

    return (
        <div className={style.Wrapper}>
            <div className={style.LikeButton} role='presentation' onClick={onAddTrack}>
                <div className={style.LikeIconWrapper}>
                    <Icons className={style.LikeIcon} name="like" />
                </div>
            </div>
            <div className={style.DislikeButton} role='presentation' onClick={onDeleteTrack}>
                <div className={style.LikeIconWrapper}>
                    <Icons className={style.LikeIcon} name="dislike" />
                </div>
            </div>
        </div>
    )
}

export default FavoriteButtons