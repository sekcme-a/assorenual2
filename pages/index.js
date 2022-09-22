import Head from 'next/head'
import HomeHeader from "src/components/home/HomeHeader"
import HeaderPopup from "src/components/home/HeaderPopup"
import Article from "src/components/home/Article"
import About from "src/components/home/About"
import Video from "src/components/home/Video"
import Photo from "src/components/home/Photo"

export default function Home() {
  return (
    <>
      <div>
        <HomeHeader />
        <HeaderPopup />
        <Article />
        <Video />
        <About />
        <Photo />
      </div>
    </>
  )
}