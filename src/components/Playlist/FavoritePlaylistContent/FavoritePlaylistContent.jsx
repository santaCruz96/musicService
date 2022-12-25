import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { useGetFavoriteTracksQuery } from '../../../api/musicApi'
import { clearTracksId, getTracksId } from '../../../store/slices/playerSlice'
import formatDuration from '../../../utils/formatDuration'
import TrackSkeletons from '../../TrackSkeletons/TrackSkeletons'
import style from './FavoritePlaylistContent.module.css'

function FavoritePlaylistContent() {
    const dispatch = useDispatch()

    const { data, isLoading, isSuccess } = useGetFavoriteTracksQuery('')

    const trackTitle = useSelector((state) => state.search.searchValue)

    useEffect(() => {
        dispatch(clearTracksId())

        if (isSuccess) {
            data?.map((track) => dispatch(getTracksId(track.id)))
        }
    }, [data])

    return (
        <div>
            {isLoading && 
              <TrackSkeletons />  
            }
            {isSuccess &&
                <div className={style.PlaylistContent}>
                {data
                    ?.filter(({ name }) =>
                        name.toLowerCase().includes(trackTitle)
                    )
                    .map(
                        ({
                            id,
                            name,
                            author,
                            album,
                            track_file,
                            duration_in_seconds,
                        }) => (
                            <PlaylistItem
                                key={id}
                                id={id}
                                trackTitleLink={track_file}
                                trackTitleText={name}
                                trackAuthorText={author}
                                trackAlbumText={album}
                                trackTime={formatDuration(duration_in_seconds)}
                                isFavorite
                            />
                        )
                    )}
            </div>
            }
        </div>
    )
}

export default FavoritePlaylistContent