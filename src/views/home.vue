<template>
  <div class="home-page" :class="curBG">
    <!-- <img class="bg-img" src="https://api.yimian.xyz/img?type=wallpaper" alt="" /> -->
    <div class="content" @click="enter()">
      <div class="enter-btn">
        <div class="btn-content">
          <div class="btn-content_text">WELCOME TO FENGXIAO'S BLOG</div>
        </div>
        <div class="hover">
          <div class="hover_text">WELCOME TO FENGXIAO'S BLOG</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { randomNum } from '@/utils'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const curBG = ref(`BG-${randomNum(1, 30)}`)
function enter() {
  router.push('/articles')
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/homeBg.css';

.home-page {
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .bg-img {
    height: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
  }

  .content {
    width: 600px;
    height: 200px;
    border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba($color: #fff, $alpha: 0.35);
    backdrop-filter: blur(3px);
    box-shadow: 0 2px 10px rgba(255, 255, 255, 0.45);

    .enter-btn {
      font-size: 40px;
      font-weight: 600;
      font-family: 'Impact';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      cursor: pointer;

      .btn-content {
        color: #fff;
      }

      .hover,
      .btn-content {
        white-space: nowrap;
      }

      .btn-content {
        overflow: hidden;
      }

      .btn-content,
      .btn-content_text,
      .hover,
      .hover_text {
        transition: transform ease-in-out 0.3s;
      }

      .hover {
        position: absolute;
        left: 0;
        top: 0;
        overflow: hidden;
        transform: translateX(-100%);

        .hover_text {
          background-clip: text;
          -webkit-background-clip: text;
          // background-image: linear-gradient(90deg, #ff3000, #ffD700);
          background-image: linear-gradient(90deg, #452cff 0%, #ff1f23 100%);
          color: transparent;
          transform: translateX(100%);
        }
      }

      &:hover {
        .btn-content {
          transform: translateX(100%);

          .btn-content_text {
            transform: translateX(-100%);
          }
        }

        .hover {
          transform: translateX(0%);

          .hover_text {
            transform: translateX(0);
          }
        }
      }
    }

    body {
      background: #ffdee9;
    }
  }
}
</style>
