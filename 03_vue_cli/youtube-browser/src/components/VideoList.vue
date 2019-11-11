<template>
  <ul class="list-group">
    <VideoListItem 
      v-for="video in videos" 
      :key="video.id.videoId"
      :video="video"
      @selectVideo="onSelectVideo">
    </VideoListItem> 
  </ul>
</template>

<script>
import VideoListItem from './VideoListItem'

export default {
  name: 'VideoList',
  props: {
    videos: {
      type: Array,
      required: true,
    },
  },
  methods: {
    // selectVideo 라는 이벤트를 발생시킨다!
    onSelectVideo: function(video) {
      this.$emit('selectVideo', video)
    },  
  },
  components: {
    VideoListItem
  },
}
</script>

<style>

</style>