<template>
  <div class="weaponBg main">
    <div class="header">
        <div class="user-gems">{{player.gems || ''}}</div>
        <div class="user-id" >{{'ID:'+player.uid || ''}}</div>
        <div class="title">{{defaultTrans['T_P_EVENT_TITLE']}}</div>
        <div class="poolBtn" @click="showPool"></div>
        <div class="ruleBtn" @click="showEvents"></div>
        <div class="historyBtn" @click="showHistory"></div>
        <ga-toast :show.sync="showToast" :closeAfterContent='false' :before-close="handleClose">
          <div slot="content">
            <!-- prize pool -->
              <div >
                <h1>{{ defaultTrans['T_PRIZEPOOL'] }}</h1>
                <div class="eventsContent prizePool">
                  <template v-for="eachItem in prizePool" >
                    <DrawItem  v-if="eachItem['pk']>0" v-bind="eachItem" v-bind:key="eachItem['pk']"></DrawItem>
                  </template>
                </div>
              </div>
              <!-- question -->
          </div>
        </ga-toast>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import { create } from 'domain'
export default {
  name: 'home',
  components: {
  },
  data(){
    return{
      defaultTrans: {
        T_P_CANCEL: 'Cancel',
        T_P_CONFIRM: 'Confirm',
        T_P_ERR_ACT_CLOSE: 'Event ended',
        T_P_ERR_ACT_NO_OPEN: 'Event start time: :name',
        T_P_ERR_DIAMOND_NONENOUGH: 'You do not have enough diamonds',
        T_P_ERR_LOGIN: 'Log in error, please try again later',
        T_P_ERR_NETWORK: 'Network connection error, please try again later',
        T_P_GOP_LOGIN_ERROR: 'Request user information error',
        T_P_NOT_EVENT_PERIOD: 'not event period',
        T_P_RULE_TITLE: 'Event details',
        T_P_WRONG_REGION: 'wrong region'
      },
      player:{},
      showToast:false,
      userInfo:null,
      prizePool:[]
    }
  },
  methods:{
    getuserInfo(){
      this.$http.get('/userinfo').then(res=>{
        // console.log(res)
        this.defaultTrans = res.data.transify
        this.player = res.data.player
      })
    },
    showPool(){
      this.showToast = true
    },
    showEvents(){

    },
    showHistory(){

    },
    handleClose(cb){
      cb()
    }
  },
  created(){
    this.getuserInfo()
    this.$gaLoading()
  }
}
</script>
