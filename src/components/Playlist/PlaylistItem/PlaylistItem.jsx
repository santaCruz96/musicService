import { useDispatch } from 'react-redux'
import { getTrackId, play } from '../../../store/slices/playerSlice'
import style from './PlaylistItem.module.css'
import Icons from '../../icons/Icons'
import {
    useAddFavoriteTrackMutation,
    useDeleteFavoriteTrackMutation,
} from '../../../api/musicApi'
import useTheme from '../../context-hook/UseTheme'

function PlaylistItem({
    id,
    trackTitleLink,
    trackTitleText,
    trackAuthorText,
    trackAlbumText,
    trackTime,
    isFavorite,
}) {
    const {isLight} = useTheme()

    const [addTrack] = useAddFavoriteTrackMutation()
    const [deleteTrack] = useDeleteFavoriteTrackMutation()
    const dispatch = useDispatch()

    const playTrackHandler = (e) => {
        e.preventDefault()

        dispatch(getTrackId(+e.target.id))
        dispatch(play(true))
    }

    return (
        <div className={style.PlaylistItem}>
            <div className={style.Track}>
                <div className={style.TrackTitle} role='presentation' onClick={(e) => playTrackHandler(e)}>
                    <div className={style.TrackImageWrapper}>
                        <div className={isLight ? style.TrackIconWrapperLight : style.TrackIconWrapper}>
                            <Icons className={style.TrackIconImage} name='note' />
                        </div>
                    </div>
                    <div className={style.TrackTitleText} id={id}>
                        <a className={isLight ? style.TrackTitleLinkLight : style.TrackTitleLink}
                            id={id}
                            onClick={(e) => playTrackHandler(e)}
                            href={trackTitleLink}
                        >
                            {trackTitleText}
                            <span className={isLight ? style.TrackTitleSpanLight : style.TrackTitleSpan} />
                        </a>
                    </div>
                </div>
                <p className={isLight ? style.TrackAuthorLight : style.TrackAuthor}>{trackAuthorText}</p>
                <p className={isLight ? style.TrackAlbumLight : style.TrackAlbum}>{trackAlbumText}</p>
                <div className={style.TrackTime}>
                    <div className={style.TrackTimeWrapper}>
                        <div
                            className={style.TrackLikeIconWrapper}
                            style={isLight ? { fill: isFavorite ? '#696969' : 'transparent' } : { fill: isFavorite ? '#FFFFFF' : 'transparent' }}
                            role='presentation'
                            onClick={() => {
                                if (isFavorite) {
                                    deleteTrack(id)
                                } else if (!isFavorite) {
                                    addTrack(id)
                                }
                            }}
                        >
                            <Icons className={style.TrackLikeIcon} name='like' />
                        </div>
                        <span className={isLight ? style.TrackTimeTextLight : style.TrackTimeText}>{trackTime}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaylistItem