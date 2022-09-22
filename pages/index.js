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
      <Head>
        <title>대한생활체육회</title>
        <meta name="description" content="대한생활체육회 소개, 체육회 현황, 대회정보 및 자료제공" />
        <meta property="og:title" content="대한생활체육회" />
        <meta property="og:description" content="대한생활체육회 소개, 체육회 현황, 대회정보 및 자료제공"></meta>
      </Head>
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