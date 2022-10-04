import React, { useEffect, useContext, useState} from "react"
import { useRouter } from "next/router"
import Banner from "src/components/public/Banner"
import NavbarVerticle from "src/components/public/NavbarVerticle"
import { MenuItems } from "src/data/menuItems"
import LocNav from "src/components/public/LocNav"
import Greet from "src/components/information/Greet"
import Purpose from "src/components/information/Purpose"
import Chart from "src/components/information/Chart"
import Status from "src/components/information/Status"
import Location from "src/components/information/Location"
import Head from "next/head"
import HeadMeta from "src/components/public/HeadMeta"

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
      if (item.path === `/information/${path}`) {
        setTitle(item.title)
        setSubtitle(item.subtitle)
        return;
      }
    })
  }, [slug])
  

  return (
    <>
      <HeadMeta
      title="대한생활체육회 - 체육회 소개"
      description="대한생활체육회의 총재 인삿말, 설립목적, 중앙조직도 등을 소개합니다."
      url="https://xn--vk1by6x29i.com/information/greet"
      />
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