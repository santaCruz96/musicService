import { Link } from "react-router-dom";
import logo from "../../img/logoBlack.png";
import style from "./SignIn.module.css"

function SignIn() {
    return (
        <div className={style.enterScreen}>
            <div className={style.signUpBlock}>
                <form className={style.form} id="formLigin" action="#">
                    <div className={style.logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <input className={`${style.input} ${style.login}`} type="text" name="login" id="loginReg" placeholder="Логин"/>
                    <input className={style.input} type="text" name="password" id="passwordFirst" placeholder="Пароль" />
                    <button className={style.enterBtn} id="btnEnter" type="button">
                        <Link to="/">Войти</Link>
                    </button>
                    <button className={style.signupBtn} id="btnSignUp" type="button">
                        <Link to="/signup">Зарегистрироваться</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignIn;