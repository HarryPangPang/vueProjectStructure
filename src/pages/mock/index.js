// 引入mockjs
const Mock = require('mockjs');
Mock.setup({
    timeout: 800, // 设置延迟响应，模拟向后端请求数据
});
// 获取 mock.Random 对象
const Random = Mock.Random; // eslint-disable-line no-unused-vars

const get_reward = ()=> {
    return {
        "status":"success",
        "msg":"",
        "data":{
        }
    }
}

const history = ()=> {
    return {
        "status":"success",
        "msg":"",
        "data":{
            "history":[
                {
                    "items":[
                        11,12,11,9,8
                    ],
                    "price":100,
                    "created_at": 1560490492
                },
                {
                    "items":[
                        11,12
                    ],
                    "price":10,
                    "created_at": 1560490492
                },
                {
                    "items":[
                        11,9,8
                    ],
                    "price":10,
                    "created_at": 1560490492
                },
                {
                    "items":[
                        8
                    ],
                    "price":0,
                    "created_at": 1560490492
                },
                {
                    "items":[
                        11,12,11,9,8
                    ],
                    "price":100,
                    "created_at": 1560490492
                }
            ]
        }
    }
    
}

const roll = (status = 0) => {
    let rollsatus = status
    let response = null
    switch (rollsatus) {
        case 0:
            response = {
                "status": "success",
                "msg": "",
                "data": {
                    "rewards": [
                        12, 0, 8, 9, 10
                    ]
                }
            }

            break;
        case 1:
            response = {
                "status":"success",
                "msg":"",
                "data":{
                    "rewards":[
                        1,2,3,4,5,0
                    ]
                }
            }

            break;
        case 2:
            response = { 
                "status": "success", 
                "msg": "", 
                "data": { 
                    "rewards": [17, 3, 19, 14, 11] 
                } 
            }
            break;
        case 3:
            response = {
                "status": "success", 
                "msg": "", 
                "data": {
                    "rewards": [19, 19, 32, 35, 33]
                }
            }
            break;
        default:
            break;
    }
    return response
}

const userinfo = (status=0)=> {
    let userinfostatus = status
    let response = null
    switch (userinfostatus) {
        case 0:
            response = {
                "status": "success",
                "msg": "",
                "data": {
                  "player": {
                    "uid": 12345678,
                    "gems": 9999,
                    "nickname": ""
                  },
                  "common_config": {
                    "start_time": 1561361814,
                    "end_time": 1561361814,
                    "region": "SG",
                    "lang": "en"
                  },
                  "event_config": {
                    "pool": [
                      {
                        "img": "./static/items/reward_1.png",
                        "quality": 1,
                        "name": "testname testname testname testname",
                        "num": 1,
                        "pk": 12
                      },
                      {
                        "img": "./static/items/reward_2.png",
                        "quality": 2,
                        "name": "testname testname testname testnametestname testname testname testnametestname testname testname testname",
                        "num": 5,
                        "pk": 11
                      },
                      {
                        "img": "./static/items/reward_3.png",
                        "quality": 3,
                        "name": "testname testname testname testname",
                        "num": 1,
                        "pk": 10
                      },
                      {
                        "img": "./static/items/reward_4.png",
                        "quality": 4,
                        "name": "testname testname testname testname",
                        "num": 2,
                        "pk": 9
                      },
                      {
                        "img": "./static/items/reward_5.png",
                        "quality": 5,
                        "name": "testname testname testname testname",
                        "num": 3,
                        "pk": 8
                      }
                    ],
                    "once_spin": 25,
                    "five_spin": 120,
                    "free": 2,
                    "lego_pool": [
                      {
                        "img": "./static/items/reward_1.png",
                        "position": 5,
                        "name":"testname"
                      },
                      {
                        "img": "./static/items/reward_2.png",
                        "position": 4,
                        "name":"testname"
                      },
                      {
                        "img": "./static/items/reward_3.png",
                        "position": 3,
                        "name":"testname"
                      },
                      {
                        "img": "./static/items/reward_4.png",
                        "position": 2,
                        "name":"testname"
                      },
                      {
                        "img": "./static/items/reward_5.png",
                        "position": 1,
                        "name":"testname"
                      }
                    ]
                  },
                  "player_event": {
                    "lego_num": 3,
                    "stage": [1]
                  },
                  "transify": {
                    "T_BRICKS":"bricks",
                    "T_BUTTON_INFO": "Get prizes or bricks.",
                    "T_CONGRATS": "Congratulations",
                    "T_FREE": "FREE",
                    "T_HISTORY": "HISTORY",
                    "T_PRIZEPOOL": "PRIZE POOL",
                    "T_P_EVENT_TITLE": "collecting bricks",
                    "T_RULE": "rule",
                    "T_RULE_DESC": "1.每日可以免費抽獎{0}次",
                    "T_SKIP": "SKIP",
                    "T_SPIN_1": "1 SPIN",
                    "T_SPIN_5": "5 SPIN",
                    "T_TITLE": "collecting bricks",
                    "T_P_CANCEL": "Cancel",
                    "T_P_CONFIRM": "Confirm",
                    "T_P_ERR_ACT_CLOSE": "Event ended",
                    "T_P_ERR_ACT_NO_OPEN": "Event start time: :name",
                    "T_P_ERR_DIAMOND_NONENOUGH": "You do not have enough diamonds",
                    "T_P_ERR_LOGIN": "Log in error, please try again later",
                    "T_P_ERR_NETWORK": "Network connection error, please try again later",
                    "T_P_GOP_LOGIN_ERROR": "Request user information error",
                    "T_P_NOT_EVENT_PERIOD": "not event period",
                    "T_P_RULE_TITLE": "Event details",
                    "T_P_WRONG_REGION": "wrong region",
                    "T_CONFIRM_DRAW":"Confirm to spin",
                    "T_P_CONGARTS":"Congratulations on getting"
                  }
                }
              }              
            break;
        case 1:
            response = {
                "status": "success",
                "msg": "",
                "data": {
                    "player": {
                        "uid": 10001646,
                        "gems": 79470,
                        "nickname": "wanbeta"
                    },
                    "common_config": {
                        "start_time": 1561961280,
                        "end_time": 1564553280,
                        "region": "US",
                        "lang": "en-my",
                        "region_lang": "US_en"
                    },
                    "event_config": {
                        "pool": [
                            {
                                "img": "",
                                "quality": 1,
                                "name": "brick token",
                                "num": 1,
                                "pk": 2
                            },
                            {
                                "img": "https://freefiremobile-a.akamaihd.net/common/OB14/us/Icon_box_weaponskin_Newyear_MP40.png",
                                "quality": 4,
                                "name": "\u50cf\u7d20\u773c\u955c",
                                "num": 1,
                                "pk": 3
                            },
                            {
                                "img": "https://freefiremobile-a.akamaihd.net/common/OB14/us/Icon_face_female_head_sc_HackerGirl_HD.png",
                                "quality": 5,
                                "name": "\u6bc1\u706d\u4e4b\u7ffc",
                                "num": 1,
                                "pk": 4
                            },
                            {
                                "img": "https://freefiremobile-a.akamaihd.net/common/OB14/us/Icon_Avatar_male_hair_cos_mob_skull.png",
                                "quality": 1,
                                "name": "\u5c0f\u4e111\u80cc\u5305",
                                "num": 1,
                                "pk": 5
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Clown Backpack",
                                "num": 1,
                                "pk": 6
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Moco",
                                "num": 1,
                                "pk": 7
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u52b3\u62c9",
                                "num": 1,
                                "pk": 8
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u5c9b\u7530\u96bc",
                                "num": 1,
                                "pk": 9
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u5cf6\u7530\u96bc\u89d2\u8272\u788e\u7247\u5e78\u904b\u7bb1",
                                "num": 1,
                                "pk": 10
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u5973\u7279\u5de5\u89d2\u8272\u788e\u7247\u5e78\u904b\u7bb1",
                                "num": 1,
                                "pk": 11
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Antonio frag box",
                                "num": 1,
                                "pk": 12
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Wukong frag box",
                                "num": 1,
                                "pk": 13
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Moco\u7684\u788e\u7247\u5b9d\u7bb1",
                                "num": 1,
                                "pk": 14
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Diamond Gacha",
                                "num": 1,
                                "pk": 15
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u6253\u62db\u547c",
                                "num": 1,
                                "pk": 16
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u9f13\u638c",
                                "num": 1,
                                "pk": 17
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u4e1b\u6797\u5996\u7cbe",
                                "num": 1,
                                "pk": 18
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Gun Gacha Voucher",
                                "num": 1,
                                "pk": 19
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Chicken Dinner",
                                "num": 1,
                                "pk": 20
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u53ef\u7231\u7acb\u65b9\u4f53",
                                "num": 1,
                                "pk": 21
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u8840\u6708SCAR\u7279\u6548\u69cdbox",
                                "num": 1,
                                "pk": 22
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u661f\u7a7a\u7075\u517d\u4e3b\u9898\u6b66\u5668\u76ae\u80a4\u5b9d\u7bb1",
                                "num": 1,
                                "pk": 23
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u732b\u732b",
                                "num": 1,
                                "pk": 24
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u673a\u68b0\u72d7",
                                "num": 1,
                                "pk": 25
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u4e3b\u5bb0",
                                "num": 1,
                                "pk": 26
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u626b\u63cf\u5668\u7545\u73a9\u5361\uff083\u5929\uff09",
                                "num": 1,
                                "pk": 27
                            },
                            {
                                "img": "https://freefiremobile-a.akamaihd.net/common/OB14/us/Icon_avatar_male_top_cos_ninja.png",
                                "quality": 1,
                                "name": "\u7bdd\u706b\u68d2\u7545\u73a9\u5361\uff083\u5929\uff09",
                                "num": 1,
                                "pk": 28
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u7a7a\u6295\u4fe1\u6807\u7545\u73a9\u5361\uff083\u5929\uff09",
                                "num": 1,
                                "pk": 29
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u8865\u7ed9\u5730\u56fe\u7545\u73a9\u5361\uff083\u5929\uff09",
                                "num": 1,
                                "pk": 30
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u8d4f\u91d1\u4ee4\u724c\u7545\u73a9\u5361\uff083\u5929\uff09",
                                "num": 1,
                                "pk": 31
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "PVE\u590d\u6d3b\u5e01",
                                "num": 1,
                                "pk": 32
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "Clown Surfboard",
                                "num": 1,
                                "pk": 33
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u5929\u4f7f\u4e4b\u4f51",
                                "num": 1,
                                "pk": 34
                            },
                            {
                                "img": "",
                                "quality": 1,
                                "name": "\u9b54\u5973\u7684\u5b88\u62a4",
                                "num": 1,
                                "pk": 35
                            }
                        ],
                        "once_spin": 20,
                        "fivetimes_spin": 100,
                        "free": 0,
                        "lego_pool": [
                            {
                                "img": "",
                                "position": 1,
                                "name": "Bounty Loadout"
                            },
                            {
                                "img": "",
                                "position": 2,
                                "name": "pet food"
                            },
                            {
                                "img": "",
                                "position": 3,
                                "name": "Gun Gacha"
                            },
                            {
                                "img": "",
                                "position": 4,
                                "name": "Diamond Gacha"
                            },
                            {
                                "img": "",
                                "position": 5,
                                "name": "Mad Brickman Bundle"
                            }
                        ]
                    },
                    "player_event": {
                        "lego_num": 5,
                        "stage": [
                            1,
                            2,
                            3,
                            4,
                            5
                        ]
                    },
                    "transify": {
                        "status": "network",
                        "T_P_CANCEL": "Cancel",
                        "T_P_CONFIRM": "Confirm",
                        "T_P_ERR_ACT_CLOSE": "Event ended",
                        "T_P_ERR_ACT_NO_OPEN": "Event start time: :name",
                        "T_P_ERR_DIAMOND_NONENOUGH": "You do not have enough diamonds",
                        "T_P_ERR_LOGIN": "Log in error, please try again later",
                        "T_P_ERR_NETWORK": "Network connection error, please try again later",
                        "T_P_GOP_LOGIN_ERROR": "Request user information error",
                        "T_P_NOT_EVENT_PERIOD": "not event period",
                        "T_P_RULE_TITLE": "Event details",
                        "T_P_TEMPORARY_CLOSE": "The event is temporary closed",
                        "T_P_WRONG_REGION": "wrong region",
                        "T_BRICKS": "bricks",
                        "T_BUTTON_INFO": "Get prizes or bricks.",
                        "T_CONFIRM_DRAW": "Confirm to spin",
                        "T_CONGRATS": "Congratulations",
                        "T_ERR_BRICK_LACK": "",
                        "T_ERR_NOFREESPINS": "",
                        "T_ERR_OWNED": "",
                        "T_FREE": "FREE",
                        "T_HISTORY": "HISTORY",
                        "T_PRIZEPOOL": "PRIZE POOL",
                        "T_P_CONGARTS": "Congratulations on getting",
                        "T_P_EVENT_TITLE": "collecting bricks",
                        "T_RULE": "rule",
                        "T_RULE_DESC": "1.\u6bcf\u65e5\u53ef\u4ee5\u514d\u8cbb\u62bd\u734e{0}\u6b21",
                        "T_SKIP": "SKIP",
                        "T_SPIN_1": "1 SPIN",
                        "T_SPIN_5": "5 SPIN",
                        "T_TITLE": "collecting bricks"
                    }
                }
            }
            break;
        case 2:
            response = {
                "status":"error",
                "msg":"T_P_ERR_ACT_NO_OPEN",
                "data":{
                    "common_config":{
                        "start_time":1561472411,
                        "end_time":1561482411
                    }
                }
            }
            break;
        default:
            break;
    }
    return response
}

Mock.mock('/get_reward', 'get', get_reward);

Mock.mock('/history', 'get', history);

Mock.mock('/roll', 'get', roll());

Mock.mock('/userinfo', 'get', userinfo());