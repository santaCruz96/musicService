import { Link } from "react-router-dom";
import logo from "../../img/logoBlack.png";
import style from "./SignUp.module.css"

function SignUp() {
    return (
        <div className={style.signupScreen}>
            <div className={style.signUpBlock}>
                <form className={style.form} id="formLigin" action="#">
                    <div className={style.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <input className={style.input} type="text" name="login" id="loginReg" placeholder="Логин"/>
                    <input className={style.input} type="text" name="password" id="passwordFirst" placeholder="Пароль"/>
                    <input className={style.input} type="text" name="password" id="passwordSecond" placeholder="Повторите пароль" />
                    <button className={style.signupBtn} id="signUpEnter" type="button">
                        <Link to="/">Зарегистрироваться</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp;