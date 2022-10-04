import React, { useState, useEffect, useContext } from "react"
import dynamic from 'next/dynamic'
import { Router, useRouter } from "next/router"
import { useLeavePageConfirm } from "src/hooks/useLeavePageConfirm"
import { compressImage } from "src/hooks/compressImage"
import CachedIcon from '@mui/icons-material/Cached';
import { FileUpload } from "src/firebase/FileUpload"
import { firestore as db } from "src/firebase/firebase"
// import { uploadToFirebase } from "src/firebase/uploadToFirebase"
// import { AddCommentOutlined } from "@mui/icons-material"
import { controlPostCount } from "src/firebase/controlPostCount"
// import { useBeforeunload } from "react-beforeunload"
import style from "admin/styles/addpost.module.css"
import 'react-quill/dist/quill.snow.css'
import { UserContext } from "src/data/context";
import { FileDelete } from "src/firebase/FileDelete"

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>로딩중 ...</p>,
})

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
    [
      { list: 'ordered' },
      { list: 'bullet' },
      { indent: '-1' },
      { indent: '+1' },
    ],
    ['link'],
    ['clean'],
    ['video']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
}
const formats = [
  'header',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
  'video',
]


const AddPost = (props) => {
  const [titleText, setTitleText] = useState("")
  const [imgHTML, setImgHTML] = useState("")
  const [imgList, setImgList] = useState([])
  const [fileList, setFileList] = useState([])
  const [textData, setTextData] = useState("")
  const [post, setPost] = useState("")
  const [fixed, setFixed] = useState(false)
  const [author, setAuthor] = useState("")
  const [prevFileList, setPrevFileList] = useState([])
  const [uid, setUid] = useState("")
  const [count, setCount] = useState()
  const [videoThumbnail, setVideoThumbnail] = useState("")
  const router = useRouter();
  const { user, username, userrole } = useContext(UserContext);

  const onTitleChange = (e) => { setTitleText(e.target.value) }
  const onAuthorChange = (e) => { setAuthor(e.target.value) }
  
  useLeavePageConfirm()

  useEffect(() => {
    setAuthor(username)
    const fetchData = async () => {
      let tempTextData;
      let tempString;
      let tempArr = [];
      let tempFileData = [];
      if (props.folderName) {
        await db.collection(props.folderName).doc(props.postName).get().then((doc) => {
          setTitleText(doc.data().title)
          setUid(doc.data().uid)
          setCount(doc.data().count)
          setFixed(doc.data().fixed)
          if(props.folderName==="video")
            setVideoThumbnail(doc.data().thumbnail)
          tempTextData = doc.data().post
          if (doc.data().files !== "") {
            tempString = doc.data().files
          }
        })
        tempTextData = tempTextData.replaceAll(`<img src=`,`&lt;img src=`)
        tempTextData = tempTextData.replaceAll(`.jpg">`,`.jpg" &gt;`)
        tempTextData = tempTextData.replaceAll(`.png">`,`.png" &gt;`)
        tempTextData = tempTextData.replaceAll(`.git">`,`.git" &gt;`)
        tempTextData = tempTextData.replaceAll(`.jpeg">`,`.jpeg" &gt;`)
        tempTextData = tempTextData.replaceAll(`.bmp">`,`.bmp" &gt;`)
        if (tempString !== undefined) {
          tempArr = tempString.split("URLENDPOINT")
          for (let i = 0; i < tempArr.length; i++) {
            let res = tempArr[i].split("URLSTARTPOINT")
            if (res[0] !== "") {
              tempFileData = [
                ...tempFileData,
                {
                  name: res[0],
                  url: res[1]
                }
              ]
            }
          }
        }
      }
      setPrevFileList(tempFileData)
      setTextData(tempTextData)
      }
    fetchData();
  },[])
  const onChange = (notes) => {
    setTextData(notes)
  }

  const onFileChange = (e) => {
    if (e.target.files[0] !== undefined) {
      if (e) {
        setFileList([
          ...fileList,
          {
            file: e.target.files[0]
          }
        ])
      }
    }
  }

  const onFileListDeleteClick = (file) => {
    let FL = [...fileList]
    let i = 0;
    FL.forEach((item) => {
      if(item!==undefined)
        if (item.file.name === file)
          delete FL[i]
      i++
    })
    setFileList([...FL])
  }

  
  const onImgChange = async (e) => {
    const imgId = Math.floor(Math.random() * 100000000000000000000000000001)
    let CompressedFile;
    let imgCustomHTML
    if(e.target.files[0] !==undefined)
      imgCustomHTML = `image<${e.target.files[0].name}-${imgId}" width="400" height="300" alt="${e.target.files[0].name}">image`//여기
    setImgHTML(imgCustomHTML)
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
          setImgList([
            ...imgList,
            {
              imgData: CompressedFile,
              imgHTML: imgCustomHTML,
              base64data: reader.result,
            }
          ])
        }
      }
    }
  }

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

  const onPreviewClick = () => {
    let text = textData
    imgList.forEach((img) => {
      let newImgHTML = img.imgHTML
      const splitedHTML = newImgHTML.split("width")
      newImgHTML = splitedHTML[0]
      newImgHTML = newImgHTML.replace('image<', 'image&lt;')
      newImgHTML = newImgHTML.replace('>image', '&gt;image')
      while (text !== text.replace(newImgHTML, `<img src="${img.base64data}"`)) {
        text = text.replace(newImgHTML, `<img src="${img.base64data}"`)
        text = text.replace('&gt;image','>')
      }
    })
    text = text.replaceAll(`&lt;img src=`,`<img src=`)
    text = text.replaceAll(`.jpg" &gt;`,`.jpg">`)
    text = text.replaceAll(`.png" &gt;`,`.png">`)
    text = text.replaceAll(`.git" &gt;`,`.git">`)
    text = text.replaceAll(`.jpeg" &gt;`,`.jpeg">`)
    text = text.replaceAll(`.bmp" &gt;`,`.bmp">`)
    setPost(text)
    setPost(text)
  }

  const onSubmit = async (event) => {
    //날짜 가져오기 2021/12/25 이렇게 (겁나중요)
    // const ts1 = d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate()
    event.preventDefault();
    let imgsURL = []
    let filesURL;
    let postText;
    let thumbnailStart;
    let thumbnailEnd = 99999999999;
    let thumbnailURL
    let tempInt;
    if (titleText) {
      imgsURL = await uploadImages();
      postText = changePostText(imgsURL)
      thumbnailStart = postText.indexOf(`<img src="`) + 10
      tempInt = postText.indexOf(`.jpg">`)
      thumbnailEnd = postText.indexOf(` alt="`)-1
      if (postText.charAt(thumbnailEnd) === `"`)
        thumbnailEnd -= 1
      if (postText.indexOf(`<img src="`) === -1)
        thumbnailURL = ""
      else
        thumbnailURL = postText.substring(thumbnailStart,thumbnailEnd)
      // uploadToFirebase([업로드collection경로],[업로드document경로(자동ID로할꺼면null)],업로드할 내용 hashmap)
      const resultOfUploadFiles = await uploadFiles()
      if (fixed) {
        db.collection("fixed").doc(props.postName).set({createdAt: new Date()})
      } else {
        if (db.collection("fixed").doc(props.postName))
          db.collection("fixed").doc(props.postName).delete();
      }
      await db.collection('postCount').doc(props.folderName).get().then((doc) => {
        const postHashMap = {
          title: titleText,
          author: author,
          files: resultOfUploadFiles,
          uid: user.uid,
          post: postText,
          fixed: fixed,
        }
        const imageHashMap = {
          title: titleText,
          author: author,
          files: resultOfUploadFiles,
          uid: user.uid,
          post: postText,
          thumbnail: thumbnailURL,
          fixed: fixed,
        }
        const videoHashMap = {
          title: titleText,
          createdAt: new Date(),
          author: author,
          files: resultOfUploadFiles,
          uid: user.uid,
          post: postText,
          thumbnail: videoThumbnail,
          count: doc.data().count + 1,
          fixed: fixed,
        }

        if (props.folderName==="photo") {
          if (imageHashMap.thumbnail === "") {
            alert("포토갤러리에는 적어도 1개 이상의 사진이 업로드되어야합니다!")
            return;
          }
        }
        if (props.folderName === "video") {
          if (videoHashMap.thumbnail === "") {
            alert("동영상갤러리에는 썸네일이 될 메인 동영상이 필요합니다!")
            return;
          }
        }

        if (props.folderName === "photo")
          db.collection("photo").doc(props.postName).update(imageHashMap)
        else if (props.folderName === "video")
          db.collection("video").doc(props.postName).update(videoHashMap)
        else
          db.collection(props.folderName).doc(props.postName).update(postHashMap)

        setTitleText("")
        setFileList([])
        setPost([])
        setTextData("")
        setImgHTML("")
        alert("업로드가 완료됬습니다!")
        router.push(`/admin/home`)
      })
    }
    else
      alert("제목을 입력해주세요.")
  }

  const uploadImages = async () => {
    let text = textData
    let x;
    let imgsURL = []
    return new Promise(async function (resolve, reject) {
      for (let i = 0; i < imgList.length; i++) {
        let newImgHTML = imgList[i].imgHTML
        if (typeof (newImgHTML) === "string") {
          const splitedHTML = newImgHTML.split("width")
          newImgHTML = splitedHTML[0]
          newImgHTML = newImgHTML.replace('image<', 'image&lt;')
          newImgHTML = newImgHTML.replace('>image', '&gt;image')
          if (text.includes(newImgHTML)) {
            x = await FileUpload("images", imgList[i].imgData, user.uid)
            imgsURL.push(`${imgList[i].imgData.name}URLSTARTPOINT${x}`)
          }
        }
      }
      resolve(imgsURL)
    })
  }

  const changePostText = (imgsURL) => {
    let text = textData;
    imgList.forEach((img) => {
      let newImgHTML = img.imgHTML
      if (typeof (newImgHTML) === "string") {
        const splitedHTML = newImgHTML.split("width")
        newImgHTML = splitedHTML[0]
        newImgHTML = newImgHTML.replace('image<', 'image&lt;')
        newImgHTML = newImgHTML.replace('>image', '&gt;image')
        while (text.includes(newImgHTML)) {
          for (let i = 0; i < imgsURL.length; i++) {
            const imgsURLSplit = imgsURL[i].split("URLSTARTPOINT")
            if (newImgHTML.includes(imgsURLSplit[0])) {
              text = text.replace(newImgHTML, `<img src="${imgsURLSplit[1]} alt="${imgsURLSplit[0]}"`)
              text = text.replace('&gt;image', '>')
            }
          }
        }
      }
    })
    text = text.replaceAll(`&lt;img src=`,`<img src=`)
    text = text.replaceAll(`.jpg" &gt;`,`.jpg">`)
    text = text.replaceAll(`.png" &gt;`,`.png">`)
    text = text.replaceAll(`.git" &gt;`,`.git">`)
    text = text.replaceAll(`.jpeg" &gt;`,`.jpeg">`)
    text = text.replaceAll(`.bmp" &gt;`,`.bmp">`)
    return text
  }

  const uploadFiles = async () => {
    let x;
    let filesURL="";
    return new Promise(async function (resolve, reject) {
      for (let i = 0; i < prevFileList.length; i++){
        if (prevFileList[i] !== undefined) {
          filesURL += `${prevFileList[i].name}URLSTARTPOINT${prevFileList[i].url}URLENDPOINT`
        }
      }
      for (let i = 0; i < fileList.length; i++){
        if (fileList[i] !== undefined) {
          x = await FileUpload("files", fileList[i].file, user.uid)
          // filesURL = filesURL.concat(`${fileList[i].file.name}URLSTARTPOINT${x}URLENDPOINT`)
          filesURL += `${fileList[i].file.name}URLSTARTPOINT${x}URLENDPOINT`
        }
      }
      resolve(filesURL)
    })
  }

  const onCheckboxChange = (e) => {
    setFixed(e.currentTarget.checked)
  }

  const onDeleteClick = async () => {
    prevFileList.forEach((item) => {
      if (item !== undefined) {
        onPrevFileListDeleteClick(item.url)
      }
    })
    fileList.forEach((item) => {
      if (item !== undefined) {
        onFileListDeleteClick(item.file.name)
      }
    })
    await db.collection(props.folderName).orderBy("count","desc").get().then((query) => {
      query.forEach((doc) => {
        if (doc.data().count > count)
          db.collection(props.folderName).doc(doc.id).update({ count: doc.data().count - 1 })
      })
    })
    if (db.collection("fixed").doc(props.postName))
      db.collection("fixed").doc(props.postName).delete();
    await db.collection(props.folderName).doc(props.postName).delete().then(() => {
      controlPostCount(props.folderName, "remove")
      alert("성공적으로 삭제되었습니다!")
      router.push(`/admin/home`)
    }).catch((e) => {
      console.log(e)
    })
  }

  const onPrevFileListDeleteClick = (url) => {
    let tempFileList = [...prevFileList]
    for (let i = 0; i < prevFileList.length; i++){
      if (tempFileList[i] !== undefined) {
        if (tempFileList[i].url === url) {
          FileDelete("files", tempFileList[i].name, uid)
          delete tempFileList[i]
          console.log(tempFileList)
          break;
        }
      }
    }
    setPrevFileList(tempFileList)
  }

  const onVideoThumbnailChange = (e) => {
    setVideoThumbnail(e.target.value)
  }
  return (
    <form className={style.mainContainer}>
      <div className={`${style.container} ${style.container1}`}>
        <h4>제목</h4>
        <p>제목 문구 : <input type="text" value={titleText} onChange={onTitleChange} size="60" required/></p>
      </div>
      {props.folderName !== "photo" && props.folderName !== "video" &&
        <div className={`${style.container} ${style.container2}`}>
          <h4>상단고정</h4><input onChange={onCheckboxChange} type="checkbox" checked={fixed}></input>
        </div>
      }
      {props.folderName === "video" &&
        <div className={`${style.container} ${style.container1}`}>
          <h4>동영상썸네일</h4>
          <p>메인동영상 주소 : <input type="text" value={videoThumbnail} onChange={onVideoThumbnailChange} size="60" required/></p>
        </div>
      }
      <div className={`${style.container} ${style.container1}`}>
        <h4>작성자</h4>
        <p>작성자 : <input type="text" value={author} onChange={onAuthorChange} size="60" required/></p>
      </div>
        <div className={`${style.container} ${style.addFile}`}>첨부파일 : <input type="file" name="selectedFile[]" onChange={onFileChange} />
          {prevFileList && prevFileList.map((item, index) => {
            if (item !== undefined) {
              return (
                <><h4 key={index} className={style.files}>{item.name}<h4 className={style.fileDelete} onClick={() => { onPrevFileListDeleteClick(item.url) }}>X</h4></h4></>
              )
            }
          })}
          {fileList && fileList.map((item, index) => {
            if (item !== undefined) {
              return (
                <><h4 key={index} className={style.files}>{item.file.name}<h4 className={style.fileDelete} onClick={() => { onFileListDeleteClick(item.file.name) }}>X</h4></h4><br/></>
              )
            }
          })}
        </div>
        <div className={`${style.container} ${style.container3}`}>
        <h4>이미지 추가</h4>
        <p className={style.warning}>*이미지의 크기가 2MB보다 클 경우 자동으로 압축됩니다.</p>
        <p>이미지 선택 : <input type="file" name="selectedImg[]" onChange={onImgChange} accept="image/*"/></p>
        <textarea name="imgURL" value={imgHTML}cols="60" rows="5" readOnly ></textarea><br/>
      </div>
      <div className={`${style.quillContainer} ${style.container}`}>
        <QuillNoSSRWrapper className={style.quill} onChange={onChange} modules={modules} formats={formats} value={textData} theme="snow" />
      </div>
      {/* <Link href="/information/greetPreview"><a className={style.button} target="_blank" onClick={onPreviewClick}>미리보기</a></Link>
      <input type="submit" onClick={onSubmitClick} className={style.button2} value="적용"></input> */}
        <h4 className={style.deleteButton} onClick={onDeleteClick}>삭제</h4>
        <input className={style.submitButton} type="submit" value="업로드" onClick={onSubmit}></input>
        <div className={`${style.quillContainer} ${style.container}`}>
          <div className={style.previewContainer}>
            <h4 className={style.preview}>미리보기</h4>
            <div className={style.reload} onClick={() => { onPreviewClick() }}><CachedIcon /></div>
          </div>
          <QuillNoSSRWrapper value={post} readOnly={true} theme="bubble" />
        </div>
      {/* <input type="submit" onClick={onSubmitClick} className={style.button2} value="적용"></input> */}
      <div className={style.blank}></div>
    </form>
  )
}
export default AddPost
