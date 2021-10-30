import React from "react";
import "./SideBar.css"
import SidebarOption from "./SideBarOption";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "../../Context/DataLayer"

function Sidebar(spotify) {
  const [{ playlists }] = useDataLayerValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
        alt="Spotify logo"
      />

      <SidebarOption title="Ana Sayfa" Icon={HomeIcon} />
      <SidebarOption title="Kütüphane" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">ÇALMA LİSTESİ</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
                return <SidebarOption spotify={spotify} title={playlist.name} id={playlist.id} key={playlist.id}/>
            })}
      
    </div>
  );
}

export default Sidebar; 