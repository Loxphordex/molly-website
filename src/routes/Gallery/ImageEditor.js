import galleryImages from '../../images/gallery-images'

export default {
  deleteImage(category, url) {
    const images = galleryImages[category]

    for (let i in images) {
      if (images[i].url === url) {
        galleryImages.splice(i, 1)
        return
      } return
    }
  }
}