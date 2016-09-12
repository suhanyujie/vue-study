<template id="topic-list-box">
    <div id="app-list">
      <h1>列表页</h1>
      <ul class="list-group">
        <!-- {{ baseUrl }}{{item.id}} -->
        <li class="list-group-item" v-for="item in items"><a v-link="getTopicLink(item.id)"> {{item.title}} </a></li>
      </ul>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'hello vue',
        items: '',
        listApi: 'https://cnodejs.org/api/v1/topics',
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
          console.log(response)
          this.$set('items', response.data.data)
        })
      },
      getTopicLink: function (topicId) {
        return '/topicId/' + topicId
      }
    }
  }

</script>
