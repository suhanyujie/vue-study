<template id="topic-list-box">
  <div id="app-list">
    <section class="flipview focus" data-loop="cloned">
      <ul class="container">
        <li></li>
        <li>
          <a href="http://go.zol.com/topic/6017466.html">
            <img src="http://i4.mercrt.fd.zol-img.com.cn/g5/M00/0F/06/ChMkJ1fI3OCIWEz7AADtVgZN0z0AAU6swFaRMQAAO1u884.jpg">
          </a>
        </li>
        <li>
          <a href="http://tuan.zol.com/25896.html">
            <img src="http://i0.mercrt.fd.zol-img.com.cn/g5/M00/0F/02/ChMkJ1fH_lyIe2HpAAG-CwzvKmgAAU5wwHoXJIAAb4j330.jpg">
          </a>
        </li>
        <li>
          <a href="http://go.zol.com/topic/6012414.html">
            <img src="http://i1.mercrt.fd.zol-img.com.cn/g5/M00/0F/07/ChMkJ1fJEkaIQ87OAAJI69jzOecAAU7HAL49FcAAkkD367.jpg">
          </a>
        </li>
        <li></li>
      </ul>
      <div class="tabs"><i></i><i></i><i></i></div>
    </section>
    <section class="menu wap-index clearfix">
      <ul>
        <li><a href="/index.php?c=Qiang_Index">限时抢购</a></li>
        <li><a href="http://m.zol.com/tuan/">团购</a></li>
        <li><a href="http://m.zol.com/index.php?c=Shop_List&amp;str=c34_s57">手机</a></li>
        <li><a href="http://m.zol.com/geek/">极客商店</a></li>
        <li><a href="javascript:;" id="allType">全部分类</a></li>
      </ul>
    </section>
    <section class="recommend-section">
      <header>热卖推荐</header>
      <div id="bar_list_div">
        <!--v-link="getTopicLink(item.duoBaoId)"-->
        <ul class="product-list clearfix">
          <li v-for="item in items">
            <a href="./detail.html">
              <figure><img v-bind:src="item.picUrl"></figure>
              <span class="title">{{ item.duoBaoName }}</span>
              <span class="price">¥{{ item.needNumber }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'hello vue',
      items: '',
      listApi: 'http://api.zol.com/zol_shop_api/?ZSAppModule=ShopApp.Index.YouHuiGou.getYouHuiGouInfo&ZSAppKey=fbAN4ngRYA9y.&ZSAutoToken=871B8C426B8023039A59C032FD669CBF&ZSAutoParams=vs&vs=and100',
      baseUrl: 'https://cnodejs.org/topic/'
    }
  },
  props: [],
  created: function () {

  },
  components: {

  },
  ready: function () {
    this.getCustomers()
  },
  methods: {
    getCustomers: function () {
      this.$http.get(this.listApi).then(function (response) {
        // 响应成功回调
        // console.log(response.body)
        var jsonObj = JSON.parse(response.body)
        jsonObj = jsonObj.info.duobaoInfo
        console.log(jsonObj)
        this.$set('items', jsonObj)
      })
    },
    getTopicLink: function (topicId) {
      // return '/detail/' + topicId
      return '/detail.html'
    }
  }
}

</script>

<style>
  /*menu*/
  .menu { margin: 0; padding: 20px 0 10px; border-top: 0; border-bottom: 1px solid #e0e0e0; background: #fff; }
  .menu li { float: left; width: 20%; }
  .menu a { display: block; padding: 40px 0 0; height: 24px; font-size: 14px; line-height: 32px; color: #333; text-align: center; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
  .menu li:nth-child(1) a { background: url(http://icon.zol-img.com.cn/newshop/wap/shop/index/qiang_ico.png) no-repeat center top; -webkit-background-size: 40px 40px; background-size: 40px 40px; }
  .menu li:nth-child(2) a { background: url(http://icon.zol-img.com.cn/newshop/wap/shop/index/tuan_ico.png) no-repeat center top; -webkit-background-size: 40px 40px; background-size: 40px 40px; }
  .menu li:nth-child(3) a { background: url(http://icon.zol-img.com.cn/newshop/wap/shop/index/chou_ico.png) no-repeat center top; -webkit-background-size: 40px 40px; background-size: 40px 40px; }
  .menu li:nth-child(4) a { background: url(http://icon.zol-img.com.cn/newshop/shop/geek/share_geek_lv.png) no-repeat center top; -webkit-background-size: 40px 40px; background-size: 40px 40px; }
  .menu li:nth-child(5) a { background: url(http://icon.zol-img.com.cn/newshop/wap/shop/index/u20.png) no-repeat center top; -webkit-background-size: 40px 40px; background-size: 40px 40px; }
  /*section*/
  section { margin: 10px 0; border-top: 1px solid #e0e0e0; border-bottom: 1px solid #e0e0e0; background: #fff; }
  section > header { position: relative; padding: 0 10px 0 19px; height: 44px; font-size: 15px; line-height: 44px; }
  section > header:after { position: absolute; top: 15px; left: 10px; width: 2px; height: 14px; content: ""; background: #ce1a1b; -webkit-box-radius: 10px; border-radius: 10px; }
  section > header .more { position: absolute; top: 0; right: 10px; padding: 0 10px 0 0; width: 54px; text-align: right; font-size: 12px; color: #999; }
  section > header a:before { position: absolute; top: 16px; right: 0; display: block; width: 6px; height: 11px; content: ""; background-position: -106px -54px; }
  /* recommend-section */
  .recommend-section { border-bottom: 0 none; }
  .recommend-section > header { padding: 0 10px 0 27px; }
  .recommend-section > header:after { position: absolute; top: 14px; left: 10px; width: 13px; height: 17px; content: ""; background-position: -99px -30px; }
  /* product-list */
  .product-list { border-top: 1px solid #e6e6e6; }
  .product-list li { float: left; width: 50%; overflow: hidden; border-width: 0 1px 1px 0; border-style: solid; border-color: #e6e6e6; box-sizing: border-box; background: #fff; }
  .product-list a { display: block; padding: 10px; }
  .product-list figure { position: relative; height: 150px; line-height: 150px; text-align: center; overflow: hidden; }
  .product-list figure:before { position: absolute; left: 0; top: 0; width: 100%; height: 100%; content: ""; z-index: -1; background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAAUVBMVEX////6+vrn5+f////t7e3o6Oj7+/vx8fH29vbq6uru7u7m5ubp6en4+Pjz8/Pr6+vv7+/09PT9/f3s7Oz39/f19fXy8vL+/v7w8PD8/Pz5+fkCHrnIAAAAAXRSTlMAQObYZgAAApBJREFUeF6tl1dyIzEMBZnj5Dy6/0F3vaoyvDJBGLTet6prmoAIUNSjXfAm2vwvNhofnBbNWfZk87fYtC8ttDOsGc0aTu7HHTZXY4+Fg/Mqk1G+gtRuHyDwddRXDl9z/8904Yr5N1lLhegPoxp5ymH2cp+6BuBcr8rmV96njppuxMecOqYwnTv48SfAQTByPgZjSWFu3F7rKimaskwI7xBtuZHCx7MRaN4rLHaE51uF7ZuFEyL8KAEkzdsQ3lWCyItuGUS4A+ELiIYGYi3YCwCaT+FMAntcGICf/TORwLOrCANwegKWTAIvRHh7+dFzbM0k8IHwJvECfF7bEYA8Ybu8AuMHwGUK6AlhAGb3YUwBJcJL4hX4dDYE8IykMACNEFoRwAMRDqVWUPopdPGFTbm3pAh1oEaGnrrLwCB8HTggwjvS/V6kKtApTBgBJjHWgHrFhDHgKLoacEaFMWAnFArE5+YqUKCqAg0i7GrAjAN3dBXEgbmifFtiM+IqJ4YwAPEqb5xVEKqM9uHCE4Y+TAhw4mxGAEzYf7lnrYIA9Mhtg42ReBLAgNyHF08YgLJ8Yz/YqyDc2DBT2oUBaMpTz6OrIAWci3NZopsRCXSwOdBzsztJYCzuNge6CpLAGbYvjjAOXAr7oR65wgBMpQ12QDcjGihhxybn5iRooCm8AvSKbkY0UBbeKTNfGCCMuZlEY0y7MGtuhje/N02rcHrzA3vLWOI0y5PNW2yuRY0+OBZwynSsGXq84vTcxA9Ak7yzy5yo1Ye74b1JH8BJvDf5idMuNVeYfwBL/zXb+DPOuPVf4iqF0iHSuBiAQEdvax23blow4zx6sJ13oilyWNX3AgxS/CJahmMyY/c3o5mOICnTPwH3gtgXVOqdAAAAAElFTkSuQmCC) no-repeat 50% 50%; }
  .product-list img { vertical-align: middle; max-height: 100%; }
  .product-list .title { display: block; padding: 5px 0 0; overflow: hidden; height: 36px; font-size: 12px; line-height: 18px; display: -webkit-box; text-overflow: ellipsis; -webkit-line-clamp: 2; -webkit-box-orient: vertical; }
  .product-list .label { display: inline-block; margin: 0 5px 0 0; width: 30px; height: 15px; font-size: 12px; line-height: 15px; background: #ce1a1b; color: #fff; text-align: center; }
  .product-list .price { display: block; padding: 7px 0 0; font-size: 15px; line-height: 18px; color: #f33; }
</style>
