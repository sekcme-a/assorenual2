import React from "react"
import style from "styles/home/video.module.css"

const Video = () => {
  return (
    <div className={style.container}>
      <iframe class={style.video} frameborder="0" allowfullscreen="true" src="https://www.youtube.com/embed/Js--VXw57GQ?showinfo=0" />
    </div>
  )
}
export default Video;