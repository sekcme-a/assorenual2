import React from "react"
import SubMenuTitle from "src/components/public/SubMenuTitle"
import style from "styles/info/purpose.module.css"
import { motion } from "framer-motion"

const Purpose = () => {
  const aniDelay = 0.3;
  const aniDuration = 1;
  const aniSpeed = -20;
  const aniH2Delay = 1.5;
  let number = 0;

  const content = ["생활체육 내외의 스포츠 클럽 활동을 지원,육성하여 국민건강 복지증진에 기여",
                  "전국 각 생활체육단위 스포츠클럽 활동지원 육성",
                  "생활체육 스포츠 클럽 리그 및 각종 공식대회 개최",
                  "전국 생활인 및 체육동호인 1인 1기 스포츠 참여 운동 전개",
                  "생활체육 스포츠 전문지도자 및 심판 양성교육",
                  "생활 체육관련 시설 위탁운영 및 학원. 연수원운영, 체육지도자 파견",
                  "회원의 권익 향상을 위한 회원카드 발급 및 복리증진",
                  "민간자격의 자격기본법에 의한 생활체육행정사 및 각 종목별단체의 자격제도의 관리 운영에 관한 사항",
                  "생활체육 육성을 위한 국제적 영향력을 행사한다"]
  return (
    <>
      <SubMenuTitle title="설립목적" subtitle="대한생활체육회의 설립목적을 소개합니다." />
      <motion.div className={style.content__container} initial={{ opacity: 0 }} animate={{opacity: 1, transition:{delay: 1, duration: 1}}}>
        <motion.h2 initial={{opacity: 0}} animate={{opacity:1, transition:{delay: aniH2Delay, duration: 1}}}>스포츠가 최고의 국민건강 복지다</motion.h2>
        <ul className={style.list}>
          {content.map((index, id) => {
            number++;
            return (
              <motion.li className={style.item__container} key={id} initial={{opacity: 0, x:aniSpeed}} animate={{opacity:1, x:0, transition:{delay: aniH2Delay+(aniDelay*number), duration:aniDuration}}}>
                <div className={style.number}>{number}</div>
                <h3 className={style.content}>{index}</h3>
              </motion.li>
            )
          })}
        </ul>
      </motion.div> 
    </>
  )
}

export default Purpose