import { useNavigate } from 'react-router-dom'
import Search from '../../components/Search/Search'
import smile from '../../img/smile_crying.png'
import style from './NotFound.module.css'
import useTheme from '../../components/Context-hook/UseTheme'

function NotFound() {
    const navigate = useNavigate()
    const {isLight} = useTheme()

    const handleBackToTracks = () => {
        navigate('/tracks')
    }

    return (
        <div className={style.NotFoundWrapper}>
            <section className={style.CenterBlockContent}>
                <Search />
                <div className={style.NotFoundBlock}>
                    <h1 className={isLight ? style.NotFoundTitleLight : style.NotFoundTitle}>404</h1>
                    <div className={style.SmileWrapper}>
                        <p className={isLight ? style.NotFoundTextLight : style.NotFoundText}>Страница не найдена</p>
                        <img className={style.Smile} src={smile} alt="smile" />
                    </div>
                    <p className={isLight ? style.NotFoundDescriptionLight : style.NotFoundDescription}>
                        Возможно, она была удалена или перенесена на другой
                        адрес
                    </p>
                    <button className={style.NotFoundButton}
                        type="button"
                        onClick={handleBackToTracks}
                    >
                        Вернуться на главную
                    </button>
                </div>
            </section>
        </div>
    )
}

export default NotFound