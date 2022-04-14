import React, { useEffect, useContext, useState} from "react"
import { useRouter } from "next/router"
import Banner from "src/components/public/Banner"
import NavbarVerticle from "src/components/public/NavbarVerticle"
import { MenuItems } from "src/data/menuItems"
import LocNav from "src/components/public/LocNav"
import SubMenuTitle from "src/components/public/SubMenuTitle"
import NoticeList from "src/components/notice/NoticeList"


const Info = () => {
  const [bannerRandom, setBannerRandom] = useState()
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [isPreview, setIsPreview] = useState(false)
  const [cusSlug, setCusSlug] = useState("")
  const [page, setPage] = useState(1)


  const router = useRouter();
  const { ...slug } = router.query

  //getRandom(최소, 최대) 랜덤 자연수 생성
  const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);

  //banner에 랜덤한 자연수를 props로 넘겨 몇가지 banner사진중 랜덤으로 보여줌
  useEffect(() => {
    setBannerRandom(getRandom(1, 5))
    MenuItems.forEach((item) => {
      if (item.path === `/notice/${slug.subtitle}`) {
        setTitle(item.title)
        setSubtitle(item.subtitle)
        if (cusSlug !== slug.subtitle)
          setCusSlug(slug.subtitle)
        if(page!==slug.page)
          setPage(slug.page)
        return;
      }
    })
  }, [slug])
  

  return (
    <>
      {isPreview && <div className="preview">미리보기중입니다.</div>}
      <Banner bannerNumber={bannerRandom}/>
      <div className="subpage__container">
        <LocNav title={title} subtitle={subtitle} />
        <NavbarVerticle loc={title}/>
        <div className="content__container">
          <SubMenuTitle title={`${subtitle}`} subtitle={`대한생활체육회의 ${subtitle} 전해드립니다.`}/>
          {slug.subtitle === "photo" ? <></> : 
            cusSlug && <NoticeList folderName={slug.subtitle} page={parseInt(slug.page)} />
          }
        </div>
      </div>
    </>
  )
}
export default Info;