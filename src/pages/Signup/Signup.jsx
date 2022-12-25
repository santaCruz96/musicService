import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserSignupMutation } from '../../api/musicApi'
import logo from '../../img/logoBlack.png'
import style from './Signup.module.css'

function Signup() {
    const [signup, { isSuccess, error }] = useUserSignupMutation()

    const [userValues, setUserValues] = useState({
        username: '',
        email: '',
        password: '',
    })
    const [wrongPassword, setWrongPassword] = useState(null)

    const [validatePassword, setValidatePassword] = useState('')
    
    const onSignup = (e) => {
        e.preventDefault()

        if (userValues.password === validatePassword) {
            signup(userValues)
            setWrongPassword(null)
        } else {
            setWrongPassword('Пароли не совпадают')
        }
    }

    const handleLoginChange = (e) => {
        setUserValues({
            ...userValues,
            username: e.target.value,
        })
    }

    const handleEmailChange = (e) => {
        setUserValues({
            ...userValues,
            email: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setUserValues({
            ...userValues,
            password: e.target.value,
        })
    }

    const handleValidatePasswordChange = (e) => {
        setValidatePassword(e.target.value)
    }

    return (
        <div className={style.Container}>
            <div className={style.FormWrapper}>
                <form className={style.Form}>
                    <img className={style.Logo} src={logo} alt="logo" />
                    <input className={style.Input}
                        placeholder="Имя"
                        type="text"
                        onChange={handleLoginChange}
                    />
                    {error && error.data.username && (
                        <span className={style.ErrorNameMessage}>
                            {error.data.username[0]}
                        </span>
                    )}
                    <input className={style.Input}
                        placeholder="Email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    {error && error.data.email && (
                        <span className={style.ErrorEmailMessage}>
                            {error.data.email[0]}
                        </span>
                    )}
                    <input className={style.Input}
                        placeholder="Пароль"
                        type="password"
                        onChange={handlePasswordChange}
                    />
                    {error && error.data.password && (
                        <span className={style.ErrorPasswordMessage}>
                            {error.data.password[0]}
                        </span>
                    )}
                    <input className={style.Input}
                        placeholder="Повторите пароль"
                        type="password"
                        onChange={handleValidatePasswordChange}
                    />
                    {wrongPassword != null &&
                        <p className={style.WrongPassword}>{wrongPassword}</p>
                    }
                    <button type='button' className={style.FormButton} onClick={(e) => onSignup(e)}>
                        Зарегистрироваться
                    </button>
                    {isSuccess && <Navigate to="/login" replace />}
                </form>
            </div>
        </div>
    )
}

export default Signup