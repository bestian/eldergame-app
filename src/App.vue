<template>
  <div id="app">
    <div class="ui top labeled icon menu no-print">
      <router-link class = 'item ' to='/pair' exact=''>
        <i class="balance scale icon" />
        <span class="big">配對</span>
      </router-link>
      <router-link class = 'item' to='/name' exact=''>
        <i class="address book icon" />
        <span class="big">認人</span>
      </router-link>
      <router-link class = 'item' to='/fishing' exact=''>
        <i class="clone icon" />
        <span class="big">釣魚</span>
      </router-link>
      <router-link class = 'item' to='/edit' exact=''>
        <i class="cogs icon" />
        <span class="big">編輯</span>
      </router-link>
    </div>
    <transition name='fade' mode='out-in'>
      <router-view @addCard="addCard" @removeCard = "removeCard"
      @hideShow = "hideShow" @saveCards = "saveCards"
      :card_list = "card_list"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      card_list: [
        {img: 'http://www.elder.game.tw/static/img/angel.jpg', name: '天使'},
        {img: 'http://www.elder.game.tw/static/img/face.png', name: '圓臉'},
        {img: 'http://www.elder.game.tw/static/img/worm.png', name: '蟲蟲'}
      ]
    }
  },
  methods: {
    addCard: function (url, name) {
      this.card_list.push({img: url, name: name})
      this.setLocal('card_list')
    },
    removeCard: function (index) {
      this.card_list.splice(index, 1)
      this.setLocal('card_list')
    },
    saveCards: function (list) {
      this.card_list = list
      this.setLocal('card_list')
    },
    hideShow: function (index, bool) {
      this.card_list[index].hide = bool
      this.setLocal('card_list')
    },
    getLocal: function (n) {
      console.log('get:' + n)
      this[n] = JSON.parse(this.$localStorage.get(n))
    },
    setLocal: function (n) {
      console.log('set:' + n)
      this.$localStorage.set(n, JSON.stringify(this[n]))
      // console.log(this.$localStorage.get(n))
    }
  },
  mounted () {
    // console.log(this.$localStorage.get(n))
    if (this.$localStorage.get('card_list')) {
      this.getLocal('card_list')
    }
    if (this.$localStorage.get('event_list')) {
      this.getLocal('event_list')
    }
  }
}
</script>

<style>

html, body {
  padding: 0 !important;
  overflow-y: scroll;
  height: 100vh;
  background-color: #ffc !important;
}

.fade-leave {  }

.fade-leave-active {
  transition: all .3s ease;
  opacity: 0;
}

.fade-enter {
  opacity: 0;
  transform: rotateY(45deg);
}

.fade-enter-active {
  transition: all .5s ease-in;
}


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffc;
}

.menu .item .big {
  font-size: 1.5em;
}

.print-only {
  visibility: hidden !important;
  display: none !important;
}

@media print {
  .no-print {
    visibility: hidden !important;
    display: none !important;
    height: 0 !important;
  }
  .print-only {
    visibility: visible !important;
    display: block !important;
  }
  img, div, .card, .column {
    page-break-inside: avoid !important;
  }
}

a, button, .clickable {
  cursor: pointer !important;
}

.ui.card {
  box-shadow: grey 0px 1px 5px 1px;
}

@media screen and (max-width: 600px) {
  .fat-only {
    display: none !important;
  }
  .button {
    max-width: 100% !important;
  }
}

@media screen and (max-width: 991px) {
  .fater-only {
    display: none !important;
  }
}

@media screen and (min-width: 601px) {
  .thin-only {
    display: none !important;
  }
}

.router-link-active {
  background-color: #ccf !important;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btn {
  border: 2px solid green;
  color: green;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: bold;
}

.upload-btn-wrapper input[type=file] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}

.null {
  visibility: hidden !important;
}

</style>
