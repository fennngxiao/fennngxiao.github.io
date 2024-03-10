/* eslint-disable */
const path = require('path')
const fs = require('fs')
const { readFile, writeFile } = require('fs/promises')

const pathName = './src/views/articles' // 需遍历的文件夹路径
const jsonPath = './src/utils/allFiles.json' // 生成 json 的文件路径

// 打开/创建文件并写入 JSON
function writeJSON(file, data) {
  // 异步写入（但 await 改为了同步，所以错误回调不需要了）
  writeFile(file, JSON.stringify(data, '', '\t'))
}

function readFileList(dir, parent, filesList = []) {
  const files = fs.readdirSync(dir)
  files.forEach((item) => {
    var fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), item, filesList) //递归读取文件
    } else {
      if (!item.startsWith('.')) {
        const tempArr = item.split('.')
        const fileType = tempArr[tempArr.length - 1]
        const fileName = item.replace(`.${fileType}`, '')
        filesList.push({
          fileName,
          fileType,
          path: fullPath,
          category: parent,
          id: `${parent}-${fileName}`
        })
      }
    }
  })
}

async function getFileContent(filePath) {
  try {
    let content = await readFile(filePath, { encoding: 'utf8' })
    content = content
      .replace(/\#/g, '')
      .replace(/```javscript/g, '')
      .replace(/```/g, '')
      .replace(/\n/g, '')
    return content
  } catch (err) {
    console.error(err.message)
  }
}
const filesList = []
readFileList(pathName, null, filesList)
const promiseArr = filesList.map(async (item) => {
  if (item.fileType === 'md') {
    item.content = await getFileContent(item.path)
  } else {
    item.content = item.fileName
  }
  return item
})
Promise.all(promiseArr).then((list) => {
  writeJSON(jsonPath, list)
})
