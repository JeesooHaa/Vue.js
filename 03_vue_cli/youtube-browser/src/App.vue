<template>
  <div class="container">
    <!-- step no.3  -->
    <SearchBar @inputChange="onInputChange" />
    <VideoDetail :video="selectedVideo" />
    <VideoList @selectVideo="onSelectVideo" :videos="videos" />
  </div>
</template>

<script>
// library import 는 script 최상단 
import axios from 'axios'

// step no.1 
import SearchBar from './components/SearchBar.vue'
import VideoList from './components/VideoList.vue'
import VideoDetail from './components/VideoDetail.vue'
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY // YOUTUBE
const API_URL = 'https://www.googleapis.com/youtube/v3/search'

// Vue
export default {
  name: 'App', // Component 의 이름을 지정 
// step no.2
  data() {
    return {
      videos: [],
      selectedVideo: null, 
    }
  },
  components: {
    SearchBar,
    VideoList,
    VideoDetail, 
  },
  methods: {
    // inputChange 라는 이벤트가 발생할 때마다 실행하라!
    onInputChange: function(inputValue) {
      axios.get(API_URL, {
        params: {
          key: API_KEY,
          type: 'video',
          part: 'snippet',
          q: inputValue,
          maxResults: 10,
        }
      })
      .then(response => {
        this.videos = response.data.items
      })
      .catch(error => {
        console.log(error)
      })
    },
    onSelectVideo: function(video) {
      this.selectedVideo = video
    }
  },
}
</script>

<style>

</style>