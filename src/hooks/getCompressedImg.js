import React from 'react';
import { compressImage } from 'src/hooks/compressImage'
import imageCompression from 'browser-image-compression';

  //업로드한게 이미지가 맞는지 확인
const checkIsImage = (file) => {
  const pathpoint = file.lastIndexOf('.')
  const filepoint = file.substring(pathpoint+1,file.length)
  const filetype = filepoint.toLowerCase();
  if (filetype == 'jpg' || filetype == 'png' || filetype == 'git' || filetype == 'jpeg' || filetype == 'bmp') {
    return true;
  } else {
    alert("이미지 파일만 선택할 수 있습니다.\n (.jpg .gif .png .jpeg .bmp)")
    return false;
  }
}

  //이미지의 크기가 2MB이하인지 확인 후, 아니라면 압축할지 물어본뒤 압축진행.
const checkIsImageSize = (img) => {
  const maxSize = 2 * 1024 * 1024; //3MB
  if (img > maxSize) {
    return false;
  }
  else
    return true
}
  
//getCompressedImg(이미지선택시 e) return imgData: 압축된파일, base64Data: 미리보기용 이미지url
export const getCompressedImg = async (e) => {
  let CompressedFile;
  let imgInfo = [];
  return new Promise(async function (resolve, reject) {
    if (e.target.files[0] !== undefined) {
      if (checkIsImage(e.target.files[0].name)) {
        if (!checkIsImageSize(e.target.files[0].size)) {
          CompressedFile = await compressImage(e.target.files[0])
        } else {
          CompressedFile = e.target.files[0]
        }
        const reader = new FileReader();
        reader.readAsDataURL(CompressedFile)
        reader.onloadend = () => {
          resolve({ imgData: CompressedFile, base64Data: reader.result })
        }
      }
    }
  })
}