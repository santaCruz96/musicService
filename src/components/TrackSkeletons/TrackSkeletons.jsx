import note from '../../img/icon/note.svg'
import getSkeletonArray from '../../utils/getSkeletonArray'
import style from './TrackSkeletons.module.css'

function TrackSkeletons() {
    const skeletonArray = getSkeletonArray()

    return (
        <div className={style.ContentWrapper}>
            {skeletonArray.map((track) => (
                <div className={style.TrackSkeletonWrapper} key={track}>
                    <div className={style.SkeletonImageWrapper}>
                        <img className={style.TrackImageSkeleton} src={note} alt="music" />
                    </div>
                    <div className={style.TrackTitleSkeleton} />
                    <div className={style.TrackAuthorSkeleton} />
                    <div className={style.TrackAlbumSkeleton} />
                    <div className={style.TrackTimeSkeleton} />
                </div>
            ))}
        </div>
    )
}

export default TrackSkeletons