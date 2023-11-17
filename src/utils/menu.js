import { useRouter } from 'vue-router'
import STATIC from './static'
const { ROOT_CATEGORY } = STATIC
export function getFiles() {
  const mdModules = import.meta.glob(`../views/articles/**/*.md`)
  const vueModules = import.meta.glob(`../views/articles/**/*.vue`)
  const filePathList = [...Object.keys(mdModules), ...Object.keys(vueModules)]
  return {
    modules: {
      MD: mdModules,
      VUE: vueModules
    },
    filePathList
  }
}

/**
 * @description: 目录层级map转化为树
 */
const categoryMapToTree = (levelMap) => {
  const levelArr = JSON.parse(JSON.stringify(Object.values(levelMap)))
  const loop = (levelIndex, parentCategory) => {
    let res = []
    const categorys = Object.values(levelArr[levelIndex])
    if (categorys?.length) {
      for (let i = 0; i < categorys.length; i++) {
        if (categorys[i].category === parentCategory) {
          const obj = JSON.parse(JSON.stringify(categorys[i]))
          delete levelArr[levelIndex][obj.name]
          if (levelIndex !== levelArr.length - 1) {
            obj.children = loop(levelIndex + 1, obj.name)
          }
          res.push(obj)
        }
      }
    }
    return res
  }
  return loop(0, ROOT_CATEGORY)
}

export function handleMenuData() {
  const router = useRouter()
  const articlesMap = {}

  const { modules, filePathList } = getFiles()
  const categoryMap = {}
  for (const pathStr of filePathList) {
    debugger
    const cateArr = pathStr.replace(`../views/${ROOT_CATEGORY}/`, '').split('/')
    cateArr.forEach((cateName, i) => {
      if (!categoryMap[i]) categoryMap[i] = {}
      const category = i === 0 ? ROOT_CATEGORY : cateArr[i - 1] // 类型
      // 叶子结点（文章）
      if (i === cateArr.length - 1) {
        let [name, type] = cateArr[i].split('.')
        type = type.toUpperCase()
        let obj = {}
        if (type === 'MD') {
          obj = { type, category, name, path: pathStr, id: `${category}-${name}` }
        } else if (type === 'VUE') {
          const path = `/${ROOT_CATEGORY}/${cateArr.join('/').split('.')[0]}`
          obj = { type, category, name, path, id: `${category}-${name}` }
          // 动态添加路由
          router.addRoute('articles', {
            path,
            name: path,
            component: () => modules.VUE[pathStr]()
          })
        }
        articlesMap[obj.id] = obj
        categoryMap[i][name] = obj
      } else {
        categoryMap[i][cateName] = { name: cateName, category }
      }
    })
  }
  console.log(categoryMap)
  const menus = categoryMapToTree(categoryMap)

  return {
    categoryMap,
    articlesMap,
    menus
  }
}
