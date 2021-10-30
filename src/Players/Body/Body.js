import React from "react";
import "./Body.css";
import Header from "./Header";
import { useDataLayerValue } from "../../Context/DataLayer"
import { PlayCircleFilled, Favorite, MoreHoriz } from "@material-ui/icons";
import SongRow from "./SongRow";
import {useSoundLayerValue} from "../../Context/SoundLayer"

function Body({ spotify }) {
  const [{ discover_weekly }] = useDataLayerValue();
  const [{current_playlist, tracks, track}] = useDataLayerValue();
  const [{playing, volume}, soundDispatch] = useSoundLayerValue();
 
  

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
      <img
                    src={current_playlist ? current_playlist?.images[0].url : 'https://cdn.shortpixel.ai/client/to_webp,q_lossy,ret_img,w_250/https://www.hypebot.com/wp-content/uploads/2020/07/discover-weekly-250x250.png'}
                    alt=""/>
        <div className="body__infoText">
          <strong>ÇALMA LİSTESİ</strong>
          <h2>Haftalık Keşfet</h2>
          <p>Sevdikleriniz ve daha fazlası</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilled className="body__shuffle" />
          <Favorite fontSize="large" />
          <MoreHoriz />
         
        </div>
        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
             </div>
        </div>
             
      
    
  );
}

export default Body;