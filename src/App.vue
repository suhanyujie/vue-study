<template>
    <div id="app">
      <div class="col-xs-6">
        <a v-link="{path:'/list'}">进入列表页changed-7</a>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'todo list',
      items: [],
      newItem: '',
      childWords: ''
    }
  },
  props: ['remaining'],
  methods: {
    toggleFinished: function (item) {
      item.isFinished = !item.isFinished
    },
    addNewItem: function () {
      var data = this.newItem
      if (!data) return false
      this.items.push({
        label: 'test',
        content: data,
        isFinished: false
      })
      this.newItem = ''
    },
    getSomething: function (msg) {
      this.childWords = msg
    },
    deleteTask: function (task) {
      this.items.$remove(task)
    }

  },
  computed: {
    remaining: function () {
      return this.items.filter(function (task) {
        return !task.isFinished
      }).length
    }
  }
}// end of Vue

</script>

<style>
.finished-a{ text-decoration:line-through; }
#app {
  color: #2c3e50;
  margin-top: 10px;
  height:auto;
  max-width: 5000px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
