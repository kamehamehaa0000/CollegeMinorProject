import { v2 as cloudinary } from 'cloudinary'
import fs, { unlinkSync } from 'fs'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

const uploadOnCloudinary = async (localPath) => {
  try {
    if (!localPath) {
      return null
    }
    const response = await cloudinary.uploader.upload(localPath, {
      resource_type: 'auto',
    })
    //delete from local server
    unlinkSync(localPath)
    return response
  } catch (error) {
    fs.unlinkSync(localPath)
    return null
  }
}
//May not use this function
const deleteFromCloudinary = async (url) => {
  try {
    const publicId = url.split('/').pop().split('.')[0]
    cloudinary.uploader.destroy(publicId)
  } catch (error) {
    console.error(`Error deleting image from Cloudinary: ${error.message}`)
  }
}

export default uploadOnCloudinary
