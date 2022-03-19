import React, { useEffect, useContext, useState} from "react"
import { useRouter } from "next/router"
import Banner from "src/components/public/Banner"
import NavbarVerticle from "src/components/public/NavbarVerticle"
import { MenuItems } from "src/data/menuItems"
import LocNav from "src/components/public/LocNav"
import Greet from "src/components/info/Greet"
import Purpose from "src/components/info/Purpose"
import Chart from "src/components/info/Chart"


const Info = () => {
  const [bannerRandom, setBannerRandom] = useState()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")


  const router = useRouter();
  const { slug } = router.query

  //getRandom(최소, 최대) 랜덤 자연수 생성
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //banner에 랜덤한 자연수를 props로 넘겨 몇가지 banner사진중 랜덤으로 보여줌
  useEffect(() => {
    setBannerRandom(getRandom(1, 5))
    let path = slug;
    if (path === "greetPreview") path = "greet"
    if (path ==="purposePreview") path = "purpose"
    if (path ==="chartPreview") path = "chart"
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
      <Banner bannerNumber={bannerRandom}/>
      <div className="subpage__container">
        <LocNav title={title} subtitle={subtitle} />
        <NavbarVerticle loc={title}/>
        <div className="content__container">
          {slug==="greet" && <Greet preview="false" />}
          {slug === "purpose" && <Purpose preview="false"/>}
          {slug === "chart" && <Chart preview="false"/>}
          {slug==="greetPreview" && <Greet preview="true" />}
          {slug==="purposePreview" && <Purpose preview="true" />}
          {slug==="chartPreview" && <Chart preview="true" />}
        </div>
      </div>
    </>
  )
}
export default Info;