import MainNav from "./MainNav";
import MainCenterblock from "./MainCenterblock";
import MainSidebar from "./MainSidebar";

function Main() {
    return (
      <main className="main">
        <MainNav/>
        <MainCenterblock/>
        <MainSidebar/>
      </main>
    );
  }
  
export default Main;