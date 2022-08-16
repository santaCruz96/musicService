import MainNav from "./MainNav";
import MainCenterblock from "./MainCenterblock";
import MainSidebar from "./MainSidebar";
import s from "./css/Main.module.css"

function Main() {
    return (
      <main className={s.main}>
        <MainNav/>
        <MainCenterblock/>
        <MainSidebar/>
      </main>
    );
  }
  
export default Main;