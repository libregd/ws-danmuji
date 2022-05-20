import {
  LiveWS,
  getRoomid,
  LiveTCP,
  KeepLiveWS,
  KeepLiveTCP,
} from "bilibili-live-ws";
import { useState } from "react";
import React from "react";
// const [roomID, setRoomId] = useState();

export interface Props {}
// 放一个input框用来给用户输入房间号
const RoomInput = () => {
  return (
    <div className="block m-5">
      <div className="field">
        <div className="control columns mx-5">
          <div className="column  is-8">
            <input
              className="input "
              type="text"
              placeholder="enter bilibili live room id "
            />
          </div>
          <div className="column is-2">
            <button className="button is-link ">Submit</button>
          </div>
          <div className="column is-2">
            <div className="select">
              <select>
                <option>full id</option>
                <option>short id</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const live = new LiveWS(22642754);
// const [data, setData] = useState(0);
// live.on("open", () => console.log("Connection is established"));
live.on("live", () => {
  live.on("msg", (data)=>{
    console.log(data);
  } );


});

const testWS = () => {
  return (
    <div className="box border-0">
      <title>hello</title>
      <RoomInput />
    </div>
  );
};

export default testWS;
