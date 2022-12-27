import { useDispatch } from 'react-redux'
import { filterByYear } from '../../../store/slices/filterSlice'
import style from './FilterItemYears.module.css'
import useTheme from '../../Context-hook/UseTheme'

function FilterItemYears() {
    const dispatch = useDispatch()
    const {isLight} = useTheme()

    const onYearFilter = (e) => {
        dispatch(filterByYear(e.target.value))
    }

    return (
        <div className={style.FilterItemsYearWrapper}>
            <label className={style.FilterItemsYearLabel} htmlFor="year-filter">
                <input
                    id="year-filter-new"
                    name="year-filter"
                    type="radio"
                    value="newest"
                    onClick={onYearFilter}
                />
                <label className={isLight ? style.FilterYearLabelLight : style.FilterYearLabel} htmlFor="year-filter-new">
                    Более новые
                </label>
                <input
                    id="year-filter-old"
                    name="year-filter"
                    type="radio"
                    value="oldest"
                    onClick={onYearFilter}
                />
                <label className={isLight ? style.FilterYearLabelLight : style.FilterYearLabel} htmlFor="year-filter-old">
                    Более старые
                </label>
                <input
                    id="year-filter-default"
                    name="year-filter"
                    type="radio"
                    value="default"
                    onClick={onYearFilter}
                />
                <label className={isLight ? style.FilterYearLabelLight : style.FilterYearLabel} htmlFor="year-filter-default">
                    Любые
                </label>
            </label>
        </div>
    )
}

export default FilterItemYears
