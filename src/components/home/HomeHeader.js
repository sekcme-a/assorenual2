import React, { useEffect, useState } from "react";
import styles from 'styles/home/homeHeader.module.css'
import { motion } from 'framer-motion'

const HomeHeader = () => {

  const onClick = () => {
    const res = window.open(`https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C%20%EC%96%B4%EB%93%9C%EB%AF%BC%EA%B0%80%EC%9D%B4%EB%93%9C.pdf?alt=media&token=67596abd-325f-413a-a46b-e60aa689c547`,
      "", " location=no, fullscreen=yes,")
  }
  return (
    <motion.div initial={{ opacity: .8, }} animate={{ opacity: 1, transition: { duration: 3 } }} className={styles.banner}>
      {/* {isAdminLoggedIn && <h4 className="guideBookDownloadButton" onClick={onClick}>관리자 가이드북 다운로드</h4>} */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{duration: 2} }}className={styles.banner_content}>
          
          <div className={styles.banner_text}>
            <motion.h1 initial={{ opacity: 0, x: -15}} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: .5 } }}> 국민의 건강과</motion.h1>
            <motion.h2 initial={{ opacity: 0 , x: -15}} animate={{ opacity: 1, x: 0, transition: { duration: 0.8, delay: 1.0 } }}> 행복의 장을 여는</motion.h2>
            <motion.h3 initial={{ opacity: 0 , x: -15}} animate={{ opacity: 1, x: 0, transition: { duration: 1.3, delay: 1.5 } }}><p /> 대한생활체육회</motion.h3>
            <motion.h4 initial={{ opacity: 0 , x: -15}} animate={{ opacity: 1, x: 0, transition: { duration: 1.3, delay: 2.0 } }}>
              Korea Sports For All Athletic Association{`(KSFAA)`}
            </motion.h4>
          </div>
      </motion.div>
    </motion.div>
  );
};

export default HomeHeader;