<template>
  <div class="draw-base">
    <!-- <div class="shadow"></div> -->
    <div class="pic"></div>
    <div class="pic1"></div>
    <div class="mouth"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.draw-base {
  position: relative;
  width: 100%;
  height: 100%;
}

.pic,
.pic1 {
  width: 100px;
  height: 100px;
  background-color: #ff1745;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 100px;
  border-radius: 5px;
  animation: look 3s ease-in-out infinite alternate;
}

@keyframes look {
  0% {
    box-shadow: 20px 0px 0px 5px rgba(255, 255, 255, 1) inset;
  }

  50% {
    box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 1) inset;
  }

  100% {
    box-shadow: -20px 0px 0px 5px rgba(255, 255, 255, 1) inset;
  }
}

.shadow {
  box-shadow: 200px 200px 0 0px #000;
  // border: 10px solid #000;
  position: relative;
  font-size: 200px;
  background-color: #ff1745;
  position: absolute;
  width: 1em;
  height: 1em;
  left: 50%;
  margin-left: -0.5em;
  top: 20%;
  border-radius: 0.05em;

  &:after {
    position: absolute;
    // content: "";
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    border: 0.02em solid #ff1745;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    position: absolute;
    // content: "";
    width: 0.5em;
    height: 0.02em;
    background: #000;
    left: -0.2em;
    top: 50%;
    border-left: 0.2em solid #000;
    transform: rotate(45deg) translate(0, -50%);
    transform-origin: right;
  }
}

.pic {
  border-radius: 50%;
  box-shadow: 2px 2px 5px 2px rgba(255, 23, 69, 0.6);
  // box-shadow: 20px 20px 5px 0px rgba(0, 0, 0, 0.6) inset;
  box-shadow: 20px 0px 0px 5px rgba(255, 255, 255, 1) inset;
  border: 1px solid #ff1745;
}

.pic1 {
  left: 60%;
  border-radius: 50%;
  box-shadow: 20px 0px 0px 5px rgba(255, 255, 255, 1) inset;
  border: 1px solid #ff1745;
}

.mouth {
  width: 120px;
  height: 60px;
  background-color: #fff;
  position: absolute;
  left: 55%;
  margin-left: -60px;
  top: 240px;
  border-radius: 50%;
  // box-shadow: 2px 2px 5px 2px rgba(255, 23, 69, 0.6);
  // box-shadow: 20px 20px 5px 0px rgba(0, 0, 0, 0.6) inset;
  box-shadow: 0px -20px 0px 5px rgba(255, 23, 69, 1) inset;
  // border: 1px solid #ff1745;
}
</style>
