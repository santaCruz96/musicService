import AppRoutes from "../routes";
import style from "./App.module.css";

function App() {

  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

  return (
    <div className={style.wrapper}>
      <AppRoutes user={cookieValue}/>
    </div>
  );
}

export default App;
