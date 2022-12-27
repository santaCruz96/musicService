import style from "./Categories.module.css"
import useTheme from '../../context-hook/UseTheme'

function Categories({ text, isActive, count }) {
    const {isLight} = useTheme()

    return (
        <div className={isLight ?
            `${style.FilterButtonLight} ${isActive ? style.FilterButtonActive : ''}`
            :
            `${style.FilterButton} ${isActive ? style.FilterButtonActive : ''}`}
        >
            <p>{text}</p>
            <div className={isLight ? style.FilterButtonCountLight : style.FilterButtonCount} style={isActive ? { display: 'block' } : { display: 'none' }}>
                {count}
            </div>
        </div>
    )
}

export default Categories