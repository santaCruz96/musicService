import Main from "../../components/Main/Main";
import Bar from "../../components/Bar/Bar";
import Footer from "../../components/Footer/Footer";
import style from "./MainPage.module.css"

function MainPage() {
    return (
      <div className={style.mainPage}>
        <Main/>
        <Bar/>
        <Footer/>
      </div>
    );
  }
  
export default MainPage;