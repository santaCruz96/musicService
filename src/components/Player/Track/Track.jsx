import { useSelector } from 'react-redux'
import Icons from '../../Icons/Icons'
import FavoriteButtons from '../FavoriteButtons/FavoriteButtons'
import { useGetTrackByIdQuery } from '../../../api/musicApi'
import styleSkeleton from '../../TrackSkeletons/TrackSkeletons.module.css'
import style from './Track.module.css'
import useTheme from '../../Context-hook/UseTheme'

function Track() {
    const {isLight} = useTheme()

    const trackId = useSelector((state) => state.player.id)
    const { data, isLoading, isSuccess } = useGetTrackByIdQuery(trackId)

    return (
        <div className={style.TrackWrapper}>
            <div className={style.TrackContainer}>
                <div className={isLight ? style.PlayImageWrapperLight : style.PlayImageWrapper}>
                    <Icons className={style.PlayIconImage} name='note' />
                </div>
                {isSuccess && (
                    <>
                        <div className={style.TrackName}>
                            <a className={isLight ? style.TrackPlayLinkLight : style.TrackPlayLink} href={data.track_file}>
                                {data.name}
                            </a>
                        </div>
                        <div className={style.TrackAuthor}>
                            <a className={isLight ? style.TrackAuthorLinkLight : style.TrackAuthorLink} href={data.track_file}>
                                {data.author}
                            </a>
                        </div>
                    </>
                )}
                {isLoading && (
                    <>
                        <div className={style.TrackName}>
                            <div className={styleSkeleton.Skeleton} />
                        </div>
                        <div className={style.TrackAuthor}>
                            <div className={styleSkeleton.Skeleton} />
                        </div>
                    </>
                )}
            </div>
            <FavoriteButtons />
        </div>
    )
}

export default Track