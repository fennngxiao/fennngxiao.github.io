<template>
  <app-container>
    <template v-if="bgVideoUrl" #leftArea>
      <video class="bg_video" autoplay loop muted :poster="bgVideoPosterUrl">
        <source :src="bgVideoUrl" type="video/mp4" />
      </video>
    </template>
    <template #pageContent>
      首页
    </template>
  </app-container>
</template>

<script>
import AppContainer from '@/components/AppContainer';
import { BACKGROUND_VIDEO_URL, BACKGROUND_VIDEO_POSTER_URL } from '@/utils/static';
export default {
  name: 'Home',
  components: {
    AppContainer,
  },
  data() {
    return {
      bgVideoUrl: BACKGROUND_VIDEO_URL,
      bgVideoPosterUrl: BACKGROUND_VIDEO_POSTER_URL,
    };
  },
  created() {
    this.init();
  },
  activated() {},
  methods: {
    init() {},
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  width: 100%;
  height: calc(100% - 60px);
  .wave_bg {
    height: 100%;
    width: 100%;
  }
}
</style>
