import Main from "../../components/Main/Main";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import style from "./MainPage.module.css"
import useTheme from "../../components/context-hook/UseTheme";

function MainPage() {
  const {isLight} = useTheme()

    return (
      <div className={isLight ? style.mainPageLight : style.mainPage}>
        <Main/>
        <Bar/>
        <Footer/>
      </div>
    );
  }
  
export default MainPage;