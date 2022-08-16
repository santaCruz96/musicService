import Main from "../Main/Main";
import Bar from "../Bar/Bar";
import Footer from "../Footer/Footer";
import s from "./css/Container.module.css"

function Container() {
    return (
      <div className={s.container}>
        <Main/>
        <Bar/>
        <Footer/>
      </div>
    );
  }
  
export default Container;