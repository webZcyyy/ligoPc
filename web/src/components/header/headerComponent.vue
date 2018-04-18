<template>
  <div class="topHead">
      <div class="topHeadNav">
          <i class="addressIcon fl"></i>
          <span class="mainCity fl">{{maincity}}</span>
          <span class="changeCity fl">{{changecity}}</span>
          <ul class="otherCity fl">
              <li>{{othCity1}}</li>
              <li>{{othCity2}}</li>
              <li>{{othCity3}}</li>
          </ul>
          <span class="christine">Christine</span>
          <ul class="headOptions fr">
              <li>收藏夹</li>
              <li>网站导航</li>
              <li>手机App</li>
          </ul>
      </div>
      <div class="topHeadSearch">
          <i class="logoIcon">xx</i>
          <div class="logoInfo">
            <span class="logoTitle">移动互联专家</span>
            <span class="logoURL">WWW.LIEHUO.COM</span>
          </div>
          <div class="searchBox">

          </div>
      </div>
  </div>
</template>

<script>
import '../../sass/base.css'
import './header.scss'
export default {
    data () {
        return {
            maincity: '广州',
            changecity: '切换城市',
            othCity1: '佛山',
            othCity2: '花都',
            othCity3: '顺德'
        }
    },
    mounted () {
        
    },
    methods: {
        
    },
    computed: {
        
    }
}
</script>