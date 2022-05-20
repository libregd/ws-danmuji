import {
  LiveWS,
  // getRoomid,
  //   LiveTCP,
  //   KeepLiveWS,
  //   KeepLiveTCP,
} from "bilibili-live-ws";

type Room = {
  id: number;
};

const Show = (props: Room) => {
  const live = new LiveWS(props.id);
  live.on("live", () => {
    live.on("msg", (data) => {
      // console.log(data);
      
    });
  });
  return (<div className="container">
      {props.id}</div>);
};

export default Show;
