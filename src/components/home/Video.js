import React, {useEffect, useState} from "react"
import style from "styles/home/video.module.css"
import ReactPlayer from "react-player/lazy"
import { firestore as db } from "src/firebase/firebase"

const Video = () => {
  const [url, setUrl] = useState()
  const [mute, setMute] = useState(true)
  const [fetchedUrl, setFetchedUrl] = useState("")

  const handleVideo = () => {
    setUrl("")
    setUrl(fetchedUrl)
  }

  useEffect(() => {
    const fetchData = async () => {
      await db.collection("setting").doc("mainVideo").get().then((doc) => {
        setFetchedUrl(doc.data().url)
        setUrl(fetchedUrl)
      })
    }
    fetchData();
  }, [])
  
  const onMouseEnter = () => {
    setMute(false)
  }
  const onMouseLeave = () => {
    setMute(true)
  }

  return (
    <div className={style.container} onClick={()=>console.log("adf")} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {/* <iframe class={style.video} frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/Js--VXw57GQ?showinfo=0" /> */}
        <ReactPlayer
          url={url}    // 플레이어 url
          className={style.video}
          // width='inherit'         // 플레이어 크기 (가로)
          // height='500px'        // 플레이어 크기 (세로)
          playing={true}        // 자동 재생 on
          muted={true}          // 자동 재생 on
          controls={true}       // 플레이어 컨트롤 노출 여부
          light={false}         // 플레이어 모드
          pip={false}            // pip 모드 설정 여부

          onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
        />
    </div>
  )
}
export default Video;