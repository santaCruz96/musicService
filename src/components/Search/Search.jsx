import { useDispatch } from 'react-redux'
import { search } from '../../store/slices/searchSlice'
import style from './Search.module.css'
import Icons from '../Icons/Icons'
import useTheme from '../Context-hook/UseTheme'

function Search() {
    const {isLight} = useTheme()
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        dispatch(search(e.target.value))
    }

    return (
        <div className={style.SearchBlock}>
            <Icons className={style.SearchIcon} name='search' />
            <input
                className={isLight ? style.SearchInputLight : style.SearchInput}
                onChange={onChangeHandler}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </div>
    )
}

export default Search