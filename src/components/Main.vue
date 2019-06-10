<template>
  <div class="hello">
    <br class="fat-only">
    <div class="ui grid">
      <div class="doubling two column row">
        <div class="column">
          <div class="ui segment container">
            <div class="image">
              <a href="https://zh.wikipedia.org/wiki/%E5%A4%B1%E6%99%BA%E7%97%87" target="_blank">
                <img src = "../assets/aged1.jpeg"/>
              </a>
            </div>
            <div class="description">
              <p>
                您家中有年紀大的長輩嗎？
              </p>
              <p>
                本站作者最初是為了自己的外婆，寫了認照片遊戲，提供娛樂與刺激。
              </p>
              <p>
                目前提供4種認照片遊戲，讓您輸入自己家族成員的照片，幫助長輩記得大家。
              </p>
              <p></p>
            </div>
            <div class="ui two bottom attached buttons thin-only">
              <router-link class = "ui green button" to='/intro' exact=''>
                <i class="balance scale icon" /><br class="thin-only" />玩遊戲
              </router-link>
              <router-link class = "ui blue button" to='/edit' exact=''>
                <i class="cogs icon" /><br class="thin-only" />輸入照片
              </router-link>
            </div>
            <div class="ui two bottom massive attached buttons fat-only">
              <router-link class = "ui green button" to='/intro' exact=''>
                <i class="balance scale icon" /><br class="thin-only" />玩遊戲
              </router-link>
              <router-link class = "ui blue button" to='/edit' exact=''>
                <i class="cogs icon" /><br class="thin-only" />輸入照片
              </router-link>
            </div>
          </div>
        </div><!-- colmun END-->
      </div><!--Row END -->
    </div><!-- gird END -->
  </div>
</template>

<script>

export default {
  name: 'Main',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p {
  font-size: 1.4em;
  text-align: left;
}

p img {
  float: left;
  margin: 1em;
  transition: all 0.5s ease-in;
}

p img:hover {
  opacity: 0.2;
}

</style>
