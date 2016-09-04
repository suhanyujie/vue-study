<template>
    <div>
        <a v-link="{path:'/list'}">返回列表页</a>
        <h1>{{ detailData.title }}</h1>
        <div>
          this is topicDetail content body {{ msg }}
          {{{ detailData.content }}}
        </div>
    </div>
</template>
<script>
  export default{
    data () {
      return {
        msg: 'hello vue',
        detailApi: 'https://cnodejs.org/api/v1/topic',
        detailData: ''
      }
    },
    route: {
      data (transition) {
        let topicId = transition.to.params.topicId
        this.getDetail(topicId)
      }
    },
    methods: {
      getDetail: function (topicId) {
        this.$http.get(this.detailApi + '/' + topicId).then(function (response) {
          console.log(response)
          this.$set('detailData', response.data.data)
        })
      }
    }
  }
</script>
