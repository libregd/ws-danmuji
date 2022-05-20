# 要解决的问题

1. ~~input把用户 input 的内容绑定到 btn 上提交到一个函数上？~~
[TUTORIAL](https://github.com/libregd/dictionary-app-in-react/issues/1#issuecomment-1114087077)
2. InputWS 组件和Show 组件来说，InputWS组件通过input ，set了一个variable。这个variable怎么作为参数```{id}```传给另一个组件Show？
```ts
// app.tsx
     <InputWS />
     <Show id={123}/>
```
3. input框的输入匹配，输入的不全部是数字就提醒是错误的。
【FormValidation.tsx】是提供了一个大致的处理，但是也有问题，不知道咋和已有的inpu二合一....

4. 要考虑room是404 的状态，404了说明可能有输入错的数字，思路是根据fetch，看回复的status，没问题再考虑去拉取弹幕。

报错是这样，感觉需要找点fetch教程看看.....
> has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to fetch the resource with CORS disabled.


5. 通过bilibili-live-ws,拿到了数据，但是这个数据是，会不停的改和刷新的。

    - 要么就是记录，来一个就筛选分类存到不同的对象里，每个数据需要记录timestamp，这样综合面板就能按顺序播放。后续是需要学习怎么滚起来。
    - 要么是每个信息不存，直接生成jsx，不停的在一个box里追加这个生成的jsx。这个合理很多.....



6. 根据 roomid 更新 show 的内容，不同类型需要不同的 style，


# 一些笔记

对于根据 roomid 获取到的 data，有以下几种, 主要来说，人气，弹幕，

```js
// rank 人气
{
    "cmd": "ONLINE_RANK_COUNT",
    "data": {
        "count": 277
    }
}
// stop live room id?
{
    "cmd": "STOP_LIVE_ROOM_LIST",
    "data": {
        "room_id_list": [
            22550028,
            ....
        ]
    }
}
// 弹幕
{
    "cmd": "DANMU_MSG",
    "info": [
        [
            0,
            1,
            25,
            16777215,
            1653040729071,
            1653040705,
            0,
            "3cd6b3be",
            0,
            0,
            0,
            "",
            0,
            "{}",
            "{}",
            {
                "mode": 0,
                "show_player_type": 0,
                "extra": "{\"send_from_me\":false,\"mode\":0,\"color\":16777215,\"dm_type\":0,\"font_size\":25,\"player_mode\":1,\"show_player_type\":0,\"content\":\"好家伙，馋了\",\"user_hash\":\"1020703678\",\"emoticon_unique\":\"\",\"bulge_display\":0,\"recommend_score\":10,\"main_state_dm_color\":\"\",\"objective_state_dm_color\":\"\",\"direction\":0,\"pk_direction\":0,\"quartet_direction\":0,\"yeah_space_type\":\"\",\"yeah_space_url\":\"\",\"jump_to_url\":\"\",\"space_type\":\"\",\"space_url\":\"\"}"
            }
        ],
        "好家伙，馋了",
        [
            4965602,
            "Alex_Dain",
            0,
            0,
            0,
            10000,
            1,
            ""
        ],
        [
            25,
            "帅Pi",
            "少年Pi",
            92613,
            398668,
            "",
            0,
            6809855,
            398668,
            6850801,
            3,
            1,
            13046
        ],
        [
            20,
            0,
            6406234,
            ">50000",
            0
        ],
        [
            "",
            ""
        ],
        0,
        0,
        null,
        {
            "ts": 1653040729,
            "ct": "561E83C7"
        },
        0,
        0,
        null,
        null,
        0,
        70
    ]
}
// "ROOM_REAL_TIME_MESSAGE_UPDATE
{
    "cmd": "ROOM_REAL_TIME_MESSAGE_UPDATE",
    "data": {
        "roomid": 21395462,
        "fans": 1252179,
        "red_notice": -1,
        "fans_club": 372
    }
}
// 多少人看过？
{
    "cmd": "WATCHED_CHANGE",
    "data": {
        "num": 4693,
        "text_small": "4693",
        "text_large": "4693人看过"
    }
}
// 表情包
{
    "cmd": "INTERACT_WORD",
    "data": {
        "contribution": {
            "grade": 0
        },
        "dmscore": 20,
        "fans_medal": {
            "anchor_roomid": 2930168,
            "guard_level": 3,
            "icon_id": 0,
            "is_lighted": 1,
            "medal_color": 1725515,
            "medal_color_border": 6809855,
            "medal_color_end": 5414290,
            "medal_color_start": 1725515,
            "medal_level": 23,
            "medal_name": "变喵娘",
            "score": 50007337,
            "special": "",
            "target_id": 22840678
        },
        "identities": [
            3,
            1
        ],
        "is_spread": 0,
        "msg_type": 1,
        "roomid": 22642754,
        "score": 1703042415748,
        "spread_desc": "",
        "spread_info": "",
        "tail_icon": 0,
        "timestamp": 1653025078,
        "trigger_time": 1653025077669581800,
        "uid": 403457314,
        "uname": "隐玄喵玄隐",
        "uname_color": ""
    }
}
// 续费舰长
cmd :NOTICE_MSG

```
