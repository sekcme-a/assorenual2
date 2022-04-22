import React,{useEffect, useState} from "react"
import style from "admin/styles/setMainLogin.module.css"
import { firestore as db } from "src/firebase/firebase"
import Link from "next/link"
import { getCompressedImg } from "src/hooks/getCompressedImg"

const SetMainVideo = () => {
  const [url, setUrl] = useState("")

  useEffect(() => {
    db.collection("setting").doc("mainVideo").get().then((doc) => {
      setUrl(doc.data().url)
    })
  },[])

  //string의 context를 배열로 변경하고 db에 저장
  const onSubmitClick = (event) => {
    event.preventDefault();
    if (url !== "" || url !== " ") {
      db.collection("setting").doc("mainVideo").set({ url: url })
      alert("적용되었습니다!")
    }
    else {
      alert("url 주소를 입력해주세요.")
    }
  }

  const onUrlChange = (e) => {
    setUrl(e.target.value)
  }
  return (
    <form className={style.mainContainer}>
      <div className={`${style.container} ${style.container1}`}>
        <h4>영상 변경</h4>
         <p className={style.warning}>*해당 영상의 url 주소를 입력해주세요. 예)https://www.youtube.com/watch?v=-Gh3OUIO2WA</p>
        <p>영상 주소 : <input type="text" value={url} onChange={onUrlChange} size="60" required/></p>
      </div>

      <input type="submit" onClick={onSubmitClick} className={style.button2} value="적용"></input>
    </form>
  )
}

export default SetMainVideo;