import React from "react"
import SubMenuTitle from "src/components/public/SubMenuTitle"
import Image from "next/image"
import style from "styles/info/chart.module.css"

const Chart = () => {
  return (
    <>
      <SubMenuTitle title="중앙 조직도" subtitle="대한생활체육회의 중앙 조직도를 소개합니다."/>
      <div className={style.container}>
        <Image
          src="/chart.jpg"
          height={900}
          width={650}
          alt="중앙 조직도" />
      </div>
    </>
  )
}

export default Chart;