import React, { useEffect, useContext, useState} from "react"
import { useRouter } from "next/router"
import Banner from "src/components/public/Banner"
import NavbarVerticle from "src/components/public/NavbarVerticle"
import { MenuItems } from "src/data/menuItems"
import GroupList from "src/components/group/GroupList"
import LocNav from "src/components/public/LocNav"
import SubMenuTitle from "src/components/public/SubMenuTitle"
import Head from "next/head"

const Group = () => {
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
    if (path === "nationPreview") { path = "nation"; setIsPreview(true) }
    if (path === "internationPreview") {path = "internation"; setIsPreview(true) }
    if (path === "sportsPreview") {path = "sports"; setIsPreview(true) }
    if (path === "sanhaPreview") {path = "sanha"; setIsPreview(true) }
    MenuItems.forEach((item) => {
      if (item.path === `/group/${path}`) {
        setTitle(item.title)
        setSubtitle(item.subtitle)
        return;
      }
    })
  }, [slug])
  

  return (
    <>
      <Head>
        <title>{`대한생활체육회|${subtitle}`}</title>
        <meta name="description" content={`(사)대한생활체육회 단체소개-${subtitle} - 국민의 건강과 행복의 장을 여는 대한생활체육회`} />
        <meta property="og:title" content={`대한생활체육회|${subtitle}`}/>
        <meta property="og:description" content={`(사)대한생활체육회 단체소개-${subtitle} - 국민의 건강과 행복의 장을 여는 대한생활체육회`}></meta>
      </Head>

      {isPreview && <div className="preview">미리보기중입니다.</div>}
      <Banner bannerNumber={bannerRandom}/>
      <div className="subpage__container">
        <LocNav title={title} subtitle={subtitle} />
        <NavbarVerticle loc={title}/>
        <div className="content__container">
          <SubMenuTitle title={subtitle} subtitle={`대한생활체육회의 ${subtitle}입니다.`} />
          {slug === "nation" && <GroupList type="nation" preview="false" />}
          {slug === "internation" && <GroupList type="internation" preview="false" />}
          {slug === "sports" && <GroupList type="sports" preview="false" />}
          {slug === "sanha" && <GroupList type="sanha" preview="false" />}
          {slug==="nationPreview" && <GroupList type="nation" preview="true" />}
          {slug==="internationPreview" && <GroupList type="internation" preview="true" />}
          {slug==="sportsPreview" && <GroupList type="sports" preview="true" />}
          {slug==="sanhaPreview" && <GroupList type="sanha" preview="true" />}
        </div>
      </div>
    </>
  )
}
export default Group;