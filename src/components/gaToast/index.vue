<template>
 <transition name="gaToast" >
    <div class="toast-bg" v-show="show" @click="handleClose()">
        <div class="toast-container">
            <div class="toast-main fadeInup" >
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
    name: 'toast',
    props: {
        show: {
            type: Boolean,
            default: false
        },
        closeAfterContent:{
            type: Boolean,
            default: false
        },
        beforeClose:Function
    },
    data(){
        return{
            hideAfterContent:true
        }
    },
    methods: {
        handleClose() {
            if(!this.closeAfterContent){
                 if(typeof this.beforeClose === 'function'){
                this.beforeClose(this.hide)
                }else{
                    this.hide()
                }
            }else{
                this.hide()
            }
        },
        // 点击遮罩关闭
        hide(){
            this.$emit('update:show',false)
        }
    }
}
</script>
<style lang="scss" scoped>
.toast-bg{
    opacity: .7;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 50;
    background-color: rgba(0, 0, 0, 0.95);
    top: 0;
    left: 0;
}
.toast-container{
    width: 100vw;
    height: 100vh;
}
.toast-main{
    position: absolute;
    top: 50%;
    left: 50%;
}
.gaToast-leave-to{
    opacity: 0;
}
.gaToast-leave{
    opacity: 1;
}
.gaToast-leave-active{
     transition: all .5s ease
}
</style>