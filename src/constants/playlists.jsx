import logo1 from "../img/playlist01.png";
import logo2 from "../img/playlist02.png";
import logo3 from "../img/playlist03.png";

const PLAYLISTS = [
    {
        id: 1,
        text: 'Плейлист дня',
        image: logo1 ,
        songs: [
            {title: "Guilt", author: "Nero", album: "Welcome Reality", time:"4:44"},
            {title: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time:"2:22"},
            {title: "I’m Fire", author: "Ali Bakgor", album: "I’m Fire", time:"2:22"},
            {title: "Non Stop", span: "(Remix)", author:"Стоункат, Psychopath", album:"Non Stop", time:"4:12"},
            {title: "Run Run", span: "(feat. AR/CO)", author: "Jaded, Will Clarke, AR/CO", album: "Run Run", time:"2:54"},
        ]
    }, 
    {
        id: 2,
        text: '100 танцевальных хитов',
        image: logo2 ,
        songs: [
            {title: "Guilt", author: "Nero", album: "Welcome Reality", time:"4:44"},
            {title: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time:"2:22"},
            {title: "I’m Fire", author: "Ali Bakgor", album: "I’m Fire", time:"2:22"},
            {title: "Non Stop", span: "(Remix)", author:"Стоункат, Psychopath", album:"Non Stop", time:"4:12"},
            {title: "Run Run", span: "(feat. AR/CO)", author: "Jaded, Will Clarke, AR/CO", album: "Run Run", time:"2:54"},
        ]
    },
    {
        id: 3,
        text: 'Инди заряд',
        image: logo3,
        songs: [
            {title: "Guilt", author: "Nero", album: "Welcome Reality", time:"4:44"},
            {title: "Elektro", author: "Dynoro, Outwork, Mr. Gee", album: "Elektro", time:"2:22"},
            {title: "I’m Fire", author: "Ali Bakgor", album: "I’m Fire", time:"2:22"},
            {title: "Non Stop", span: "(Remix)", author:"Стоункат, Psychopath", album:"Non Stop", time:"4:12"},
            {title: "Run Run", span: "(feat. AR/CO)", author: "Jaded, Will Clarke, AR/CO", album: "Run Run", time:"2:54"},
        ]
    }
]

export default PLAYLISTS;