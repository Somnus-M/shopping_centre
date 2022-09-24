<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <GuessLike/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
//引入首页界面组件
  import ListContainer from './ListContainer'
  import TodayRecommend from './TodayRecommend'
  import Rank from './Rank'
  import GuessLike from './GuessLike'
  import Floor from './Floor'
  import Brand from './Brand'
  export default {
    name:'Home',
    components:{
      ListContainer,
      TodayRecommend,
      Rank,
      GuessLike,
      Floor,
      Brand
    }
      
  }
</script>

<style>

</style>