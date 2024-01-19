<template>
  <div class="draw-base" :style="{ 'font-size': `${size}px` }">
    <div class="size-change">
      <span>大小调节( font-size: {{ size }}px )：</span>
      <el-slider v-model="size" :min="0" :max="150" :step="1" show-input />
    </div>
    <div class="pic-base">
      <div class="pic" :class="{ jump: !!status }">
        <span ref="pic"></span>
      </div>
      <div class="shadow" :class="{ jump: !!status }"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      normal: '',
      status: 0,
      action_1: '',
      size: 100
    }
  },
  mounted() {
    this.initPic()
    this.startAnimation()
  },
  watch: {
    status(val) {
      let painting = ''
      if (val) {
        painting = this.normal || this.getNormalPainting()
      } else {
        painting = this.action_1 || this.getChangePainting()
      }
      this.$refs.pic.style['box-shadow'] = painting
    }
  },
  methods: {
    initPic() {
      this.normal = this.getNormalPainting()
      this.action_1 = this.getChangePainting()
    },
    startAnimation() {
      this.timer && clearTimeout(this.timer)
      const loop = () => {
        this.timer = setTimeout(() => {
          this.status = this.status ? 0 : 1
          loop()
        }, 800)
      }
      loop()
    },
    getNormalPainting() {
      let res = []
      const g = '#FFD863'
      const w = '#FFFFFF'
      const v = '#3C2280'
      const y = '#FFEFBD'
      const list1 = [
        [
          [0, g],
          [1, g],
          [2, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, y],
          [4, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, y],
          [6, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, w],
          [6, y],
          [7, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, w],
          [6, w],
          [7, y],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, w],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, g],
          [3, g],
          [4, g],
          [5, y],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, g],
          [1, g],
          [2, g],
          [3, v],
          [4, v],
          [5, g],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, g],
          [4, v],
          [5, g],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, v],
          [4, v],
          [5, g],
          [6, w],
          [7, w],
          [8, g]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, v],
          [4, g],
          [5, w],
          [6, w],
          [7, y]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, g],
          [4, w],
          [5, w],
          [6, w],
          [7, g]
        ],
        [
          [0, g],
          [1, g],
          [2, y],
          [3, w],
          [4, w],
          [5, y],
          [6, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, y],
          [4, g],
          [9, v]
        ],
        [
          [0, g],
          [1, g],
          [2, g],
          [3, g],
          [4, g],
          [9, v],
          [10, v],
          [11, v]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, g],
          [5, g],
          [6, g],
          [7, g],
          [8, g],
          [9, v],
          [10, v],
          [11, v]
        ]
      ]
      // 对称渲染
      res = res.concat(this.symmetryDraw(list1))
      // 左右不一致 无法使用对称
      const list2 = [
        [
          [0, w],
          [
            [1, g],
            [2, g],
            [3, w],
            [4, w],
            [5, y],
            [6, w],
            [7, w],
            [8, g]
          ],
          [
            [1, g],
            [2, g],
            [3, w],
            [4, w],
            [5, y],
            [6, w],
            [7, w],
            [8, g]
          ]
        ],
        [
          [0, g],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, w],
            [7, g]
          ],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, w],
            [7, g]
          ]
        ],
        [
          [0, w],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, g]
          ],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, g]
          ]
        ],
        [
          [0, w],
          [
            [1, w],
            [2, g],
            [3, w],
            [4, w],
            [5, g]
          ],
          [
            [1, w],
            [2, g],
            [3, w],
            [4, w],
            [5, g]
          ]
        ]
      ]
      res = res.concat(this.lineDraw(list2, list1.length))
      const list3 = [
        [
          [0, w],
          [1, g],
          [2, w],
          [3, w],
          [4, w],
          [5, g]
        ],
        [
          [0, g],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, g],
          [5, g]
        ],
        [
          [0, y],
          [1, y],
          [2, y],
          [3, g],
          [4, g],
          [5, g]
        ],
        [
          [0, g],
          [1, g],
          [2, g],
          [3, g],
          [4, g],
          [5, g]
        ],
        [
          [3, g],
          [4, g],
          [5, g],
          [6, g]
        ],
        [
          [3, g],
          [4, w],
          [5, w],
          [6, g]
        ],
        [
          [3, g],
          [4, w],
          [5, w],
          [6, g]
        ],
        [
          [3, g],
          [4, g],
          [5, g],
          [6, g]
        ]
      ]
      const len = list1.length + list2.length
      res = res.concat(this.symmetryDraw(list3, len))
      return res.join(',')
    },
    getChangePainting() {
      let res = []
      const g = '#FFD863'
      const w = '#FFFFFF'
      const v = '#3C2280'
      const y = '#FFEFBD'
      const list1 = [
        [
          [0, g],
          [1, g],
          [2, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, y],
          [4, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, y],
          [6, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, w],
          [6, y],
          [7, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, w],
          [6, w],
          [7, y],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, w],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, w],
          [1, w],
          [2, g],
          [3, g],
          [4, g],
          [5, y],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, g],
          [1, g],
          [2, g],
          [3, v],
          [4, v],
          [5, g],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, g],
          [4, v],
          [5, g],
          [6, w],
          [7, w],
          [8, g],
          [9, g]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, v],
          [4, v],
          [5, g],
          [6, w],
          [7, w],
          [8, g]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, v],
          [4, g],
          [5, w],
          [6, w],
          [7, y]
        ],
        [
          [0, v],
          [1, v],
          [2, v],
          [3, g],
          [4, w],
          [5, w],
          [6, w],
          [7, g]
        ],
        [
          [0, g],
          [1, g],
          [2, y],
          [3, w],
          [4, w],
          [5, y],
          [6, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, y],
          [4, g]
        ],
        [
          [0, g],
          [1, g],
          [2, g],
          [3, g],
          [4, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, g],
          [5, g],
          [6, g]
        ]
      ]
      // 对称渲染
      res = res.concat(this.symmetryDraw(list1))
      // 左右不一致 无法使用对称
      const list2 = [
        [
          [0, w],
          [
            [1, g],
            [2, g],
            [3, w],
            [4, w],
            [5, y],
            [6, w],
            [7, g]
          ],
          [
            [1, g],
            [2, g],
            [3, w],
            [4, w],
            [5, y],
            [6, w],
            [7, g]
          ]
        ],
        [
          [0, g],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, w],
            [7, w],
            [8, g]
          ],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, w],
            [7, w],
            [8, g]
          ]
        ],
        [
          [0, w],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, g],
            [7, g],
            [8, g],
            [9, v],
            [10, v],
            [11, v]
          ],
          [
            [1, w],
            [2, w],
            [3, g],
            [4, w],
            [5, g],
            [6, g],
            [7, g],
            [8, g],
            [9, v],
            [10, v],
            [11, v]
          ]
        ],
        [
          [0, w],
          [
            [1, w],
            [2, g],
            [3, w],
            [4, w],
            [5, g],
            [9, v],
            [10, v]
          ],
          [
            [1, w],
            [2, g],
            [3, w],
            [4, w],
            [5, g],
            [9, v],
            [10, v]
          ]
        ]
      ]
      res = res.concat(this.lineDraw(list2, list1.length))
      const list3 = [
        [
          [0, w],
          [1, g],
          [2, w],
          [3, w],
          [4, w],
          [5, g],
          [9, v],
          [10, v]
        ],
        [
          [0, g],
          [1, w],
          [2, w],
          [3, w],
          [4, w],
          [5, g]
        ],
        [
          [0, w],
          [1, w],
          [2, w],
          [3, w],
          [4, g],
          [5, g]
        ],
        [
          [0, y],
          [1, y],
          [2, y],
          [3, g],
          [4, g],
          [5, g]
        ],
        [
          [0, g],
          [1, g],
          [2, g],
          [3, g],
          [4, g],
          [5, g]
        ],
        [
          [2, g],
          [3, g],
          [4, g],
          [5, g]
        ],
        [
          [2, g],
          [3, w],
          [4, w],
          [5, g]
        ],
        [
          [2, g],
          [3, w],
          [4, w],
          [5, g]
        ],
        [
          [2, g],
          [3, g],
          [4, g],
          [5, g]
        ]
      ]
      const len = list1.length + list2.length
      res = res.concat(this.symmetryDraw(list3, len))
      return res.join(',')
    },
    lineDraw(list, startLineNo) {
      const res = []
      for (let i = 0; i < list.length; i++) {
        const line = list[i]
        const center = line[0]
        const left = line[1]
        const right = line[2]
        res.push(`${center[0] / 10}em ${(startLineNo + i + 1) / 10}em 0 0 ${center[1]}`)
        if (left && left.length) {
          for (let j = 0; j < left.length; j++) {
            const item = left[j]
            res.push(`${-item[0] / 10}em ${(startLineNo + i + 1) / 10}em 0 0 ${item[1]}`)
          }
        }
        if (right && right.length) {
          for (let k = 0; k < left.length; k++) {
            const item = right[k]
            res.push(`${item[0] / 10}em ${(startLineNo + i + 1) / 10}em 0 0 ${item[1]}`)
          }
        }
      }
      return res
    },
    symmetryDraw(list, startLineNo = 0) {
      const res = []
      for (let i = 0; i < list.length; i++) {
        const arr = list[i]
        for (let j = 0; j < arr.length; j++) {
          const item = arr[j]
          if (item[0] !== 0) {
            res.push(`${item[0] / 10}em ${(startLineNo + i + 1) / 10}em 0 0 ${item[1]}`)
            res.push(`${-item[0] / 10}em ${(startLineNo + i + 1) / 10}em 0 0 ${item[1]}`)
          } else {
            res.push(`${item[0] / 10}em ${(startLineNo + i + 1) / 10}em 0 0 ${item[1]}`)
          }
        }
      }
      return res
    }
  }
}
</script>
<style lang="scss" scoped>
.size-change {
  width: 500px;
  font-size: 16px;
  color: #fff;
  padding: 15px;
}

.draw-base {
  position: relative;
  width: 100%;
  height: calc(100vh - 40px);
  background: rgba(0, 0, 0, 0.6);
  font-size: 100px;

  .pic-base {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translateX(-50%);
  }

  .pic {
    width: 0.1em;
    height: 0.1em;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -0.05em;
    background-color: transparent;
    transition: transform 0.6s ease-out;
    z-index: 10;

    &.jump {
      transform: translateY(-1em);
    }
  }

  .pic span {
    content: '';
    position: absolute;
    left: 0;
    top: -0.1em;
    width: 0.1em;
    height: 0.1em;
    background-color: transparent;
    z-index: 2;
  }

  .shadow {
    position: absolute;
    top: 2.8em;
    left: 50%;
    margin-left: -0.65em;
    width: 1.3em;
    height: 0.3em;
    background: #000;
    border-radius: 50%;
    opacity: 0.8;
    transition:
      opacity 0.6s ease-in,
      width 0.6s ease-out,
      margin-left 0.6s ease-out;

    &.jump {
      opacity: 0.2;
      width: 0.8em;
      margin-left: -0.4em;
    }
  }

  /* .pic::after{
      content: '';
      position: absolute;
      left: 0;
      top: -0.1em;
      width: 0.1em;
      height: 0.1em;
      background-color: transparent;
      // box-shadow: -0.1em 0.1em 0 0 #FFD863, -0.2em 0.1em 0 0 #FFD863, 0em 0.1em 0 0 #FFD863, 0.1em 0.1em 0 0 #FFD863, 0.2em 0.1em 0 0 #FFD863;
      z-index: 2;
    } */
}
</style>
