// const ImageSaver = (imageBase64) => {
//   return imageBase64
// }

const ImageSaver = (imageBase64) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(imageBase64)
    }, 3000)
  })
}

export default ImageSaver
