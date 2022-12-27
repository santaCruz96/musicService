import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Categories from '../Categories/Categories'
import FilterItem from '../FilterItem/FilterItem'
import FilterItemYears from '../FilterItemYears/FilterItemYears'
import useTheme from '../../context-hook/UseTheme'
import {
    addFilterByAuthor,
    addFilterByGenre,
    deleteAuthors,
    deleteGenres,
} from '../../../store/slices/filterSlice'
import style from './Filter.module.css'

function Filter() {
    const dispatch = useDispatch()
    const {isLight} = useTheme()

    const genres = useSelector((state) => state.filter.genres)
    const authors = useSelector((state) => state.filter.authors)

    const filteredByYear = useSelector((state) => state.filter.filteredByYear)
    const filteredByGenre = useSelector((state) => state.filter.filteredByGenre)
    const filteredByAuthor = useSelector(
        (state) => state.filter.filteredByAuthor
    )
    const genresValue = useSelector((state) => state.filter.filterGenresValue)
    const authorsValue = useSelector((state) => state.filter.filterAuthorsValue)

    const [isActive, setActive] = useState(null)

    const onAddGenre = (e) => {
        if (!e.target.checked) {
            dispatch(deleteGenres(e.target.value))
        } else {
            dispatch(addFilterByGenre(e.target.value))
        }
    }

    const onAddAuthor = (e) => {
        if (!e.target.checked) {
            dispatch(deleteAuthors(e.target.value))
        } else {
            dispatch(addFilterByAuthor(e.target.value))
        }
    }

    return (
        <div className={style.FilterWrapper}>
            <div className={isLight ? style.FilterTitleLight : style.FilterTitle}>Искать по:</div>
            <div
                className={style.ButtonWrapper}
                role='presentation'
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'author' : null
                    )
                }
            >
                <Categories
                    text="исполнителю"
                    isActive={filteredByAuthor}
                    count={String(authorsValue.length)}
                />
                <div className={isLight ? style.AuthorWrapperLight : style.AuthorWrapper} style={isActive === 'author' ? { display: 'block' } : { display: 'none' }}>
                    <div className={isLight ? style.FilterItemsLight : style.FilterItems}>
                        {authors
                            .filter(
                                (item, pos) => authors.indexOf(item) === pos
                            )
                            .map((item) => (
                                <FilterItem
                                    key={item}
                                    value={item}
                                    onClickFunction={onAddAuthor}
                                />
                            ))}
                    </div>
                </div>
            </div>
            <div
                className={style.ButtonWrapper}
                role='presentation'
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'year' : null
                    )
                }
            >
                <Categories
                    text="году выпуска"
                    isActive={filteredByYear}
                    count="1"
                />
                <div className={isLight ? style.YearWrapperLight : style.YearWrapper}
                    style={isActive === 'year' ? { display: 'block' } : { display: 'none' }}
                >
                    <FilterItemYears />
                </div>
            </div>
            <div
                className={style.ButtonWrapper}
                role='presentation'
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'genre' : null
                    )
                }
            >
                <Categories
                    text="жанру"
                    isActive={filteredByGenre}
                    count={String(genresValue.length)}
                />
                <div className={isLight ? style.GenreWrapperLight : style.GenreWrapper}
                    style={isActive === 'genre' ? { display: 'block' } : { display: 'none' }}
                >
                    <div className={isLight ? style.FilterItemsLight : style.FilterItems}>
                        {genres
                            .filter((item, pos) => genres.indexOf(item) === pos)
                            .map((item) => (
                                <FilterItem
                                    key={item}
                                    value={item}
                                    onClickFunction={onAddGenre}
                                />
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter