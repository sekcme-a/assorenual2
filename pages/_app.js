import 'styles/globals.css'
import 'styles/navbar/navbar.css'
import 'styles/navbar/dropdownPc.css'
import 'styles/footer.css'
import 'styles/button.css'
import 'styles/banner.css'
import 'styles/container.css'
import 'styles/navbar/navbarVerticle.css'
import 'styles/navbar/locNav.css'
import 'styles/navbar/navbarMobile.css'
import 'styles/loader.css'
import 'styles/lazyItem.css'
import Navbar from "src/components/public/Navbar"
import Footer from "src/components/public/Footer"
import Head from "next/head"
import react, { useState, useEffect } from "react"
import NavbarMobile from "src/components/public/NavbarMobile"
import { UserContext } from "src/data/context"
import { useUserData } from "src/firebase/useUserData"
import Script from "next/script"
// import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps }) {
  const [mobileMode, setMobileMode] = useState("false")

  const userData = useUserData();
  // PC/모바일 환경에 따라 navbar 바꾸기위함
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 870)
        setMobileMode(true)
      else
        setMobileMode(false)
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [])
  
  return (
    <UserContext.Provider value={userData}>
      <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>대한생활체육회</title>
          <meta name="description" content="대한생활체육회 소개, 체육회 현황, 대회정보 및 자료제공" />
          <meta property="og:title" content="대한생활체육회" />
          <meta property="og:description" content="대한생활체육회 소개, 체육회 현황, 대회정보 및 자료제공"></meta>
        
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <link rel="canonical" href="https://xn--vk1by6xrzecngs4l6obxj.com"></link>
          <meta name="robots" content="index,follow"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:image" content="https://xn--vk1by6xrzecngs4l6obxj.com/public/logo-circle.png" />
          <meta property="og:url" content="https://xn--vk1by6xrzecngs4l6obxj.com"></meta>
          <meta name="keywords" content="대한생활체육회"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          
          <meta name="naver-site-verification" content="fcd6939d5a2a544afe2de373e246bedd86d5702d" />
          <meta name="google-site-verification" content="h0jRizviYwbetdIjDK5dX1iXSEiLWvRJ_JqBAnc7nfg" />
      </Head>
            <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=10143b83ffc3b3f9b4dfefb69908cb81&libraries=services,clusterer&autoload=false`}
        strategy="beforeInteractive"
      />
      {mobileMode ? <NavbarMobile /> : <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </UserContext.Provider>
  )
}

export default MyApp
