import style from './FilterItem.module.css'
import useTheme from '../../context-hook/UseTheme'

function FilterItem({ value, onClickFunction }) {
    const {isLight} = useTheme()

    return (
        <label className={style.FilterItemsLabel} htmlFor="filter">
            <input
                className={style.FilterItem}
                id={value}
                name="filter"
                type="checkbox"
                value={value}
                onClick={onClickFunction}
            />
            <label className={isLight ? style.FilterLabelLight : style.FilterLabel} htmlFor={value}>{value}</label>
        </label>
    )
}  

export default FilterItem
