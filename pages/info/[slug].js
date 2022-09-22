import React, { useEffect, useContext, useState} from "react"
import { useRouter } from "next/router"
import Banner from "src/components/public/Banner"
import NavbarVerticle from "src/components/public/NavbarVerticle"
import { MenuItems } from "src/data/menuItems"
import LocNav from "src/components/public/LocNav"
import Greet from "src/components/info/Greet"
import Purpose from "src/components/info/Purpose"
import Chart from "src/components/info/Chart"
import Status from "src/components/info/Status"
import Location from "src/components/info/Location"
import Head from "next/head"

const Info = () => {
  const [bannerRandom, setBannerRandom] = useState()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [isPreview, setIsPreview] = useState(false)


  const router = useRouter();
  const { slug } = router.query

  //getRandom(최소, 최대) 랜덤 자연수 생성
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //banner에 랜덤한 자연수를 props로 넘겨 몇가지 banner사진중 랜덤으로 보여줌
  useEffect(() => {
    setBannerRandom(getRandom(1, 5))
    let path = slug;
    if (path === "greetPreview") { path = "greet"; setIsPreview(true) }
    if (path ==="purposePreview") {path = "purpose"; setIsPreview(true) }
    if (path ==="chartPreview") {path = "chart"; setIsPreview(true) }
    if (path ==="statusPreview") {path = "status"; setIsPreview(true) }
    if (path === "locationPreview") {path = "location"; setIsPreview(true) }
    MenuItems.forEach((item) => {
      if (item.path === `/info/${path}`) {
        setTitle(item.title)
        setSubtitle(item.subtitle)
        return;
      }
    })
  }, [slug])
  

  return (
    <>
      {slug === "greet" ?
        <Head>
          <title>대한생활체육회 | 총재인삿말</title>
          <meta name="description" content="(사)대한생활체육회 총재 김균식 총재 인삿말 - 어게인 필승 코리아!!" />
          <meta property="og:title" content="대한생활체육회|총재인삿말" />
          <meta property="og:description" content="(사)대한생활체육회 총재 김균식 총재 인삿말 - 어게인 필승 코리아!!"></meta>
        </Head>
        :
        slug === "purpose" ?
          <Head>
            <title>대한생활체육회|설립목적,연혁</title>
            <meta name="description" content="(사)대한생활체육회 설립목적 및 연혁 - 스포츠가 최고의 국민건강 복지다" />
            <meta property="og:title" content="대한생활체육회|설립목적,연혁" />
            <meta property="og:description" content="(사)대한생활체육회 설립목적 및 연혁 - 스포츠가 최고의 국민건강 복지다"></meta>
          </Head>
          :
          slug === "chart" ?
            <Head>
              <title>대한생활체육회|중앙 조직도</title>
              <meta name="description" content="(사)대한생활체육회 중앙 조직도 - 국민의 건강과 행복의 장을 여는 대한생활체육회" />
              <meta property="og:title" content="대한생활체육회|중앙 조직도" />
              <meta property="og:description" content="(사)대한생활체육회 중앙 조직도 - 국민의 건강과 행복의 장을 여는 대한생활체육회"></meta>
            </Head>
            :
            slug === "status" ?
              <Head>
                <title>대한생활체육회|임원현황</title>
                <meta name="description" content="(사)대한생활체육회 임원현황 - 국민의 건강과 행복의 장을 여는 대한생활체육회" />
                <meta property="og:title" content="대한생활체육회|임원현황" />
                <meta property="og:description" content="(사)대한생활체육회 임원현황 - 국민의 건강과 행복의 장을 여는 대한생활체육회"></meta>
              </Head>
              :
              slug === "location" &&
              <Head>
                <title>대한생활체육회|오시는길</title>
                <meta name="description" content="(사)대한생활체육회 오시는 길 - 서울특별시 영등포구 버드나루로88, 인따르시아빌딩 101호" />
                <meta property="og:title" content="대한생활체육회|오시는길" />
                <meta property="og:description" content="(사)대한생활체육회 오시는 길 - 서울특별시 영등포구 버드나루로88, 인따르시아빌딩 101호"></meta>
              </Head>
      }
      
      {isPreview && <div className="preview">미리보기중입니다.</div>}
      <Banner bannerNumber={bannerRandom}/>
      <div className="subpage__container">
        <LocNav title={title} subtitle={subtitle} />
        <NavbarVerticle loc={title}/>
        <div className="content__container">
          {slug==="greet" && <Greet preview="false" />}
          {slug === "purpose" && <Purpose preview="false"/>}
          {slug === "chart" && <Chart preview="false"/>}
          {slug === "status" && <Status preview="false"/>}
          {slug === "location" && <Location preview="false"/>}
          {slug==="greetPreview" && <Greet preview="true" />}
          {slug==="purposePreview" && <Purpose preview="true" />}
          {slug==="chartPreview" && <Chart preview="true" />}
          {slug==="statusPreview" && <Status preview="true" />}
          {slug==="locationPreview" && <Location preview="true" />}
        </div>
      </div>
    </>
  )
}
export default Info;