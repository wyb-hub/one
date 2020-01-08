<template>
  <div id="admin">
    <Layout>
        <div class="contatiner">
          <Headers />
          <Content class="content">
            <router-view></router-view>
          </Content>
          <Footer>
            <ul class="list-nav">
              <li v-for="(item,i) in $router.options.routes[0].children" :key="i">
                <router-link :to="{path:item.path}">{{ item.alias }}</router-link>
              </li>
            </ul>
          </Footer>
        </div>
    </Layout>
  </div>
</template>

<script>
import Headers from './components/common/header'
export default {
  name: 'admin',
  components: {
    Headers
  },
  data(){
    return {
      // routers:$router.options.routes[0]"
    }
  }
}
</script>

<style lang="less">
#admin {
  width:100%;
  height:100%;
  background:#ccc;
  // background: red;
}
.content{
  width: 100%;
  height: 7rem;
  height: 100%;
  margin-top: .39rem;
  overflow-y:auto; 
}
.ivu-layout-footer{
  width: 100%;
  height: 7rem;
  padding: 0;
}
.ivu-layout-footer ul{
  width: 100%;
  display: flex;
  list-style: none;
  height: .49rem;
  position: fixed;
  bottom: 0;
  z-index: 99;
  background: white;
  li{
    width: 25%;
    text-align: center;
    height: .49rem;
    line-height: .49rem;
  }
}

</style>
