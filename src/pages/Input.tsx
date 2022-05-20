// import FormValidation from "../components/FormValidation";
import { useState } from "react";

const TestWS = () => {
  var [roomID, setRoomId] = useState("");
  var [urlStatus, setUrlStatus] = useState("ok?");
async function TestRoomStatus(id:string) {
// 21395462 wutuobang
try {
  const roomURL = 'https://live.bilibili.com/'+ id
  const res = await fetch(roomURL,{mode:'no-cors'})
  console.log('response.status: ', res.status); // 👉️ 200
  console.log(res)
} catch (error) {
  setUrlStatus("url noooot ok,error")
  console.log(error)
}

  
} 
  return (
    <div className="box border-0">
      {/* <FormValidation /> */}
      <div className="field">
        <form
          onSubmit={(e) => {
            // 阻止默认的提交表单行为
            e.preventDefault();
            // 执行我们想要执行的事件
           TestRoomStatus(roomID);
          }}
        >
          <div className="control columns mx-5">
            <div className="column is-8">
              <input
                className="input is-primary"
                placeholder="enter room id, full id"
                onChange={(e) => {
                  setRoomId(e.target.value);
                }}
              />
            </div>
            <div className="column is-2">
              <button className="button is-primary">submit</button>
            </div>
            {/* 在 form 中的 btn 点击的话默认会触发 form 的 submit 事件 */}
          </div>
        </form>
      </div>
      {/* <TestRoomStatus url={}/> */}
             {urlStatus}   
    </div>
  );
};

export default TestWS;
