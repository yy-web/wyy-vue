
<template>
    <div class="foot_nav_wrap">
        <div class="foot_nav">
            <router-link to="/foundMusic" class="link" activeClass="select" >
                <span class="f_icon dis"></span>
                <span class="name">发现音乐</span>
            </router-link>
            <router-link to="/mine" class="link" activeClass="select"  exact>
                <span class="f_icon music"></span>
                <span class="name">我的音乐</span>
            </router-link >
            <router-link to="/friend" class="link" activeClass="select"  exact>
                <span class="f_icon friend"></span>
                <span class="name">朋友</span>
            </router-link>
            <router-link to="/account" class="link" activeClass="select"  exact>
                <span class="f_icon account"></span>
                <span class="name">账号</span>
            </router-link>

        </div>
    </div>
</template>
<script>
export default{
    name:'footNav',
    data(){
        return{

        }
    }
}

</script>
<style lang="scss" scoped>
  @import '../style/index.scss';
  a{
    text-decoration: none;
  }
  .foot_nav_wrap{
    background: rgba(0,0,0,0.9);
    color: #999;
    position: fixed;
    bottom: 0;
    width: 100%;
    font-size: rem(12);
    z-index: 10;
  }
  .foot_nav{
    display:flex;
    height: rem(49);
    align-items: center;
    .link{
      width: 25%;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #999;
    }
    .select{
      color: #fff;
      .f_icon {
        width: rem(28);
        height: rem(28);
        background-size:cover !important;
      }
      .dis{
        background:url('../../static/img/btm_discovery2.png')no-repeat;
      }
      .music{
        background:url('../../static/img/btm_music2.png')no-repeat;

      }
      .friend{
        background:url('../../static/img/btm_friend2.png')no-repeat;
      }
      .account{
        background:url("../../static/img/btm_account2.png")no-repeat;
      }
    }
  }
  .dis{
    background:url('../../static/img/btm_discovery.png')no-repeat;
  }
  .music{
    background:url('../../static/img/btm_music.png')no-repeat;

  }
  .friend{
    background:url('../../static/img/btm_friend.png')no-repeat;
  }
  .account{
    background:url("../../static/img/btm_account.png")no-repeat;
  }
  .f_icon {
    width: rem(28);
    height: rem(28);
    background-size:cover;
  }
</style>
