import { useState } from 'react'
import Icons from '../../Icons/Icons'
import style from './Volume.module.css'
import useTheme from '../../Context-hook/UseTheme'

function Volume({ track }) {
    const {isLight} = useTheme()

    const [isVolumeOn, setIsVolumeOn] = useState(true)
    const [volumeValue, setVolumeValue] = useState(0.2)
    const [prevVolumeValue, setPrevVolumeValue] = useState(0)

    track.volume = volumeValue

    const onVolumeChange = (e) => {
        if (!isVolumeOn) {
            setIsVolumeOn(true)
        }
        setVolumeValue(Number(e.target.value))
    }

    const onVolumeToggle = () => {
        setIsVolumeOn(!isVolumeOn)
        if (isVolumeOn) {
            setPrevVolumeValue(volumeValue)
            setVolumeValue(0)
        } else {
            setVolumeValue(prevVolumeValue)
        }
    }

    return (
        <div className={style.VolumeWrapper}>
            <div className={style.VolumeContent}>
                <div className={style.ImageWrapper}>
                    <div className={style.VolumeIcon} role='presentation' onClick={() => onVolumeToggle()}>
                            <Icons className={style.VolumeIcon} name="volume" />
                    </div>
                </div>
                <div className={style.ProgressWrapper}>
                    <input
                        className={isLight ? style.ProgressLineLight : style.ProgressLine}
                        type="range"
                        name="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volumeValue}
                        onChange={(e) => onVolumeChange(e)}
                    />
                </div>
            </div>
        </div>
    )
}

export default Volume