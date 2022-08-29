import AppRoutes from "../routes";
import ThemeProvider from "../components/contexts/ThemeProvider";
import style from "./App.module.css";

function App() {

  const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

  return (
    <div className={style.wrapper}>
      <ThemeProvider>
        <AppRoutes user={cookieValue}/>
      </ThemeProvider>
    </div>
  );
}

export default App;
