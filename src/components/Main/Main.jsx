import { Route, Routes } from "react-router-dom";
import Navigation from  "./navigation/Navigation";
import Centerblock from "./center-block/Centerblock";
import MyPlaylist from "../../pages/my-playlist/MyPlaylist";
import Sidebar from "./sidebar/Sidebar";
import DailyPlaylist from "../../pages/daily-playlist/DailyPlaylist"
import style from "./Main.module.css"

function Main() {
    return (
      <main className={style.main}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Centerblock/>} />
          <Route path="playlist/my" element={<MyPlaylist />} />
          <Route path="playlist/:id" element={<DailyPlaylist />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Sidebar/>} />
        </Routes>
        
      </main>
    );
  }
  
export default Main;