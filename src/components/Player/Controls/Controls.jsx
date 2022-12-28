import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Icons from '../../icons/Icons'
import {
    getTrackId,
    play,
    playNextTrack,
    playPrevTrack,
    repeatTrack,
    shuffleTracks,
    sortTracks,
} from '../../../store/slices/playerSlice'
import style from './Controls.module.css'
import useTheme from '../../context-hook/UseTheme'

function Controls({ track }) {
    const {isLight} = useTheme()
    const dispatch = useDispatch()

    const isPlaying = useSelector((state) => state.player.isPlaying)
    const trackIds = useSelector((state) => state.player.ids)
    const trackId = useSelector((state) => state.player.id)
    const isShuffle = useSelector((state) => state.player.isShuffle)
    const isRepeat = useSelector((state) => state.player.isRepeat)

    const onTogglePlay = () => {
        dispatch(play(!isPlaying))
    }

    const onNextTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId)
        if (currentTrack + 1 === trackIds.length) {
            dispatch(getTrackId(trackIds[0]))
            return
        }
        dispatch(playNextTrack(currentTrack))
    }

    const onPrevTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId)
        if (!currentTrack) {
            dispatch(getTrackId(trackIds[0]))
            return
        }
        dispatch(playPrevTrack(currentTrack))
    }

    const onShuffle = () => {
        if (isShuffle) {
            dispatch(sortTracks())
        } else {
            dispatch(shuffleTracks())
        }
    }

    const onRepeat = () => {
        track.loop = !isRepeat
        dispatch(repeatTrack())
    }

    useEffect(() => {
        if (isPlaying) {
            track.play()
        } else {
            track.pause()
        }
    }, [isPlaying])

    return (
        <div className={style.ControlsWrapper}>
            <div className={style.PlayerButton} role='presentation' onClick={onPrevTrack}>
                <div className={style.PrevIconWrapper}>
                    <Icons className={style.PrevIcon} name="prev" />
                </div>
            </div>
            <div className={style.PlayerButton} role='presentation' onClick={onTogglePlay}>
                {isPlaying ? (
                    <div className={style.PlayIconWrapper}>
                        <Icons className={style.PlayIcon} name="pause" />
                    </div>
                ) : (
                    <div className={style.PlayIconWrapper}>
                        <Icons className={style.PlayIcon} name="play" />
                    </div>
                )}
            </div>
            <div className={style.PlayerButton} role='presentation' onClick={onNextTrack}>
                <div className={style.NextIconWrapper}>
                    <Icons className={style.NextIcon} name="next" />
                </div>
            </div>
            <div className={style.PlayerButton} role='presentation' onClick={onRepeat}>
                <div className={style.RepeatIconWrapper} style={isLight ? { stroke: isRepeat ? '#000000' : '#696969'} : { stroke: isRepeat ? '#FFFFFF' : '#696969'}}>
                    <Icons className={style.RepeatIcon} name='repeat' />
                </div>
            </div>
            <div className={style.PlayerButton} role='presentation' onClick={onShuffle}>
                <div className={style.ShuffleIconWrapper} style={{ stroke: isShuffle ? '#FFFFFF' : '#696969'}}>
                    <Icons className={style.ShuffleIcon} name="shuffle"/>
                </div>
            </div>
        </div>
    )
}

export default Controls