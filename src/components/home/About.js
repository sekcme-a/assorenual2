import React, {useRef} from "react"
import styles from "styles/home/about.module.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import FitbitIcon from '@mui/icons-material/Fitbit';
import GroupsIcon from '@mui/icons-material/Groups';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"
import Link from "next/link"

const About = () => {
  const ref = useRef();

  const aniHead = useAnimation();
  const aniItem1 = useAnimation();
  const aniItem2 = useAnimation();
  const aniItem3 = useAnimation();
  const aniItem4 = useAnimation();
  
  const [inViewRef, inView] = useInView({ threshold: 0.5})
  const [inHideRef, outView] = useInView({ threshold: 0.5 })
  
  const aniSpeed = "30px";

  if (inView) {
    aniHead.start({
      opacity: 1, transition:{duration: 1}
    })
    aniItem1.start({
      opacity: 1, transition:{delay: .3, duration: .7 }
    })
    aniItem2.start({
      opacity: 1, transition:{delay: .5, duration: .7 }
    })
    aniItem3.start({
      opacity: 1, transition:{delay: .7, duration: .7 }
    })
    aniItem4.start({
      opacity: 1, transition:{delay: .9, duration: .7 }
    })
  }
  if (!outView) {
    aniHead.start({
      opacity: 0, transition:{duration: .3}
    })
    aniItem1.start({
      opacity: 0, transition: {duration: .3}
    })
    aniItem2.start({
      opacity: 0,  transition: {duration: .3}
    })
    aniItem3.start({
      opacity: 0, transition: {duration: .3}
    })
    aniItem4.start({
      opacity: 0, transition: {duration: .3}
    })
  }
  return (
    <div ref={inViewRef}>
      <div className={styles.container} ref={inHideRef}>
        
          <motion.div initial={{opacity:0}} animate={aniHead}>
            <h1>대한생활체육회 소개</h1>
            <div className={styles.border}></div>
            <h2>대한생활체육회는 순수 민간 비영리 법인단체로서 정치, 종교, 등 모든 분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다.</h2>
          </motion.div>
        

        <div className={styles.content__container}>
          <Link passHref href="/information/greet">
            <a>
            <motion.div className={styles.item__container} initial={{ opacity: 0}} animate={aniItem1}>
              <PermIdentityIcon className={styles.icon}/>
              <h3 className={styles.title}>총재 인사말</h3>
              <h4 className={styles.subtitle}>Again 필승 코리아!!!<br/>대한생활체육회 총재 김균식의 인삿말입니다.</h4>
              </motion.div>
            </a>
          </Link>

          <Link passHref href="/information/purpose">
            <a>
            <motion.div className={styles.item__container} initial={{ opacity: 0}} animate={aniItem2}>
              <EmojiFlagsIcon className={styles.icon}/>
              <h3 className={styles.title}>설립 목적</h3>
              <h4 className={styles.subtitle}>국민의 건강과 행복의 장을 여는 <br />대한생활체육회의 설립 목적을 소개합니다</h4>
              </motion.div>
            </a>
          </Link>

          <Link passHref href="/information/chart">
            <a>
            <motion.div className={styles.item__container} initial={{ opacity: 0}} animate={aniItem3}>
              <FitbitIcon className={styles.icon}/>
              <h3 className={styles.title}>중앙 조직도</h3>
              <h4 className={styles.subtitle}>대한생활체육회의 중앙 조직도를 안내해드립니다.</h4>
              </motion.div>
              </a>
          </Link>

          <Link passHref href="/information/status">
            <a>
            <motion.div className={styles.item__container} initial={{ opacity: 0}} animate={aniItem4}>
              <GroupsIcon className={styles.icon}/>
              <h3 className={styles.title}>임원 현황</h3>
              <h4 className={styles.subtitle}>대한생활체육회의 임원단을 소개해드립니다.</h4>
              </motion.div>
              </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
export default About;