import Head from 'next/head'
import HomeHeader from "src/components/home/HomeHeader"
import HeaderPopup from "src/components/home/HeaderPopup"
import Article from "src/components/home/Article"
import About from "src/components/home/About"
import Video from "src/components/home/Video"
import Photo from "src/components/home/Photo"
import HeadMeta from 'src/components/public/HeadMeta'

export default function Home() {
  return (
    <>
      <HeadMeta
        title="대한생활체육회"
        description="대한생활체육회는 순수 민간 비영리 법인단체로서 정치, 종교, 등 모든 분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다."
        url="https://xn--vk1by6x29i.com"
      />
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