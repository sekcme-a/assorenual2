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
import Navbar from "src/components/public/Navbar"
import Footer from "src/components/public/Footer"
import Head from "next/head"
import { useState, useEffect } from "react"
import NavbarMobile from "src/components/public/NavbarMobile"

function MyApp({ Component, pageProps }) {
  const [mobileMode, setMobileMode] = useState("false")

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
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {mobileMode ? <NavbarMobile /> : <Navbar />}
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
