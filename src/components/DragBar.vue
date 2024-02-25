<template>
  <div
    class="drag-bar"
    style="width: 6px"
    :class="{ 'is-draging': isDrag }"
    @mousedown="onDragMouseDown"
    @mousemove="onDragMouseMove"
    @mouseup="onDragMouseUp"
  />
</template>

<script>
export default {
  props: {
    origin: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      move: 0,
      isDrag: false
    }
  },
  watch: {
    move(val) {
      this.$emit('change', val)
    }
  },
  methods: {
    onDragMouseDown(e) {
      this.isDrag = true
      this.dragX = e.clientX || (e.touches && e.touches[0]?.clientX)
      this.start = this.origin
    },
    onDragMouseMove(e) {
      if (this.isDrag) {
        const eventX = e.clientX || (e.touches && e.touches[0]?.clientX)
        const moveX = eventX - this.dragX
        this.move = this.start - moveX
      }
    },
    onDragMouseUp() {
      this.isDrag = false
    }
  }
}
</script>

<style lang="scss" scoped>
.drag-bar {
  position: absolute;
  left: -3px;
  top: 0;
  height: 100%;
  z-index: 10;

  &:hover {
    background-color: rgba(224, 224, 224, 0.25);
    cursor: col-resize;
  }

  &.is-draging {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw !important;
    height: 100vh;
    opacity: 0;
    z-index: 9999;
  }
}
</style>
