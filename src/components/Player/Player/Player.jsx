import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTrackByIdQuery } from '../../../api/musicApi'
import Controls from '../Controls/Controls'
import Track from '../Track/Track'
import Volume from '../Volume/Volume'
import BarProgress from '../BarProgress/BarProgress'
import { getCurrentTrack } from '../../../store/slices/playerSlice'
import style from './Player.module.css'
import useTheme from '../../Context-hook/UseTheme'

function Player() {
    const dispatch = useDispatch()
    const {isLight} = useTheme()

    const currentTrackLink = useSelector(
        (state) => state.player.currentTrackLink
    )
    const isPlaying = useSelector((state) => state.player.isPlaying)
    const trackId = useSelector((state) => state.player.id)
    const isShow = useSelector((state) => state.player.showPlayer)

    const { data } = useGetTrackByIdQuery(trackId)

    const [track, setTrack] = useState(new Audio(currentTrackLink))

    if (isPlaying) {
        track.autoplay = true
    }

    useEffect(() => {
        dispatch(getCurrentTrack(data?.track_file))
    }, [data])

    useEffect(() => {
        track.pause()
        track.remove()

        setTrack(new Audio(currentTrackLink))
    }, [currentTrackLink])

    return (
        <div className={isLight ? style.ContentWrapperLight : style.ContentWrapper} style={{bottom: isShow ? '0' : '-100%'}}>
            <BarProgress track={track} />
            <div className={style.PlayerBlock}>
                <div className={style.BarPlayer}>
                    <Controls track={track} />
                    <Track />
                </div>
                <Volume track={track} />
            </div>
        </div>
    )
}

export default Player