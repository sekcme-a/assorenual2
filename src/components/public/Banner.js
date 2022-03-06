import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"

const Banner = (props) => {
  const [mouseEnter, setMouseEnter] = useState(false)
  const [bannerNumber, setBannerNumber] = useState()

  const onMouseEnter = () => setMouseEnter(true)
  const onMouseLeave = () => setMouseEnter(false)


  return (
    <motion.div className={`banner__container banner${props.bannerNumber}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}
      initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1.5 } }}>
      <div className="background"><h2 className={mouseEnter && "hover"}>스포츠가 최고의 국민건강 복지입니다</h2></div>
    </motion.div>
  )
}

export default Banner;