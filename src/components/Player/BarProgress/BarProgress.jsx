import { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { play, getTrackId, playNextTrack } from '../../../store/slices/playerSlice'
import style from './BarProgress.module.css'
import useTheme from '../../context-hook/UseTheme'

function BarProgress({ track }) {
    const {isLight} = useTheme()
    const dispatch = useDispatch()

    const isPlaying = useSelector((state) => state.player.isPlaying)
    const trackIds = useSelector((state) => state.player.ids)
    const trackId = useSelector((state) => state.player.id)
    const isShuffle = useSelector((state) => state.player.isShuffle)

    function onNextTrack() {
        const currentTrack = +trackIds.indexOf(trackId)
        if (currentTrack + 1 === trackIds.length) {
            dispatch(getTrackId(trackIds[0]))
            return
        }
        dispatch(playNextTrack(currentTrack))
    }

    const [trackProgress, setTrackProgress] = useState(0)

    const progressBarInterval = useRef(null)
    const { duration } = track

    const progressByPercent = (trackProgress / duration) * 100

    const clearProgressBarInterval = () => {
        if (typeof progressBarInterval.current === 'number') {
            clearInterval(progressBarInterval.current)
        }
    }
    const startProgressTimer = () => {
        clearProgressBarInterval()

        progressBarInterval.current = setInterval(() => {
            setTrackProgress(track.currentTime)
            if (track.ended) {
                dispatch(play(false))
            }
        }, 100)
    }

    const onThumbChange = (e) => {
        clearProgressBarInterval()
        track.currentTime = Number(e.target.value)
        setTrackProgress(Number(e.target.value))
        startProgressTimer()
    }
    if (isPlaying) {
        startProgressTimer()
    }

    useEffect(() => {
        if (track.ended && !isShuffle) {
            onNextTrack()
            dispatch(play(true))
    }
    }, [track.ended, isShuffle])

    return (
        <input className={style.BarProgress}
            type="range"
            step="1"
            min="0"
            max={Number.isNaN(duration) ? '100' : `${duration}`}
            value={trackProgress}
            onChange={onThumbChange}
            style={isLight ? { 
                background: `linear-gradient(
                90deg,
                #57459d ${progressByPercent !== '' ? progressByPercent : '0'}%,
                #d2d2d2 ${progressByPercent !== '' ? progressByPercent : '0'}%)`
            } :
                {
                background: `linear-gradient(
                90deg,
                #57459d ${progressByPercent !== '' ? progressByPercent : '0'}%,
                rgba(46, 46, 46, 1) ${progressByPercent !== '' ? progressByPercent : '0'}%)`
            }}
        />
    )
}

export default BarProgress