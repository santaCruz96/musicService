import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { setLogin, setToken } from '../../store/slices/authSlice'
import { useGetTokenMutation, useUserLoginMutation } from '../../api/musicApi'
import logo from '../../img/logoBlack.png'
import style from './Login.module.css'

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [login, { data, isSuccess, isLoading }] = useUserLoginMutation()
    const [getToken, { data: token }] = useGetTokenMutation()

    const handleEmailChange = ({ target }) => {
        setEmail(target.value)
    }

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value)
    }

    const handleSignup = () => {
        navigate('/signup')
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        login({ email, password })
        getToken({ email, password })
    }

    useEffect(() => {
        if (isSuccess) {
            document.cookie = `username=${data?.username}`
            dispatch(setToken(token?.access))
            document.cookie = `token=${token?.refresh}`
            dispatch(setLogin())
            navigate('/tracks')
        }
    }, [token])

    return (
        <div className={style.Container}>
            <div className={style.FormWrapper}>
                <form className={style.Form}>
                    <img className={style.Logo} src={logo} alt="logo" />
                    <input className={style.Input}
                        placeholder="Email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    <input className={style.Input}
                        placeholder="Пароль"
                        type="password"
                        onChange={handlePasswordChange}
                    />
                    {isLoading && <p>Загрузка</p>}
                    <button className={style.LoginButton} type="button" onClick={(e) => onSubmitForm(e)}>
                        Войти
                    </button>
                    <button className={style.SignupButton} type="button" onClick={handleSignup}>
                        Зарегистрироваться
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
