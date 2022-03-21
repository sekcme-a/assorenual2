import React, { useState, useEffect } from "react"
import Loader from "src/components/public/Loader"
import { firestore as db } from "src/firebase/firebase"
import style from "styles/group/groupList.module.css"
import LazyItem from "src/components/public/LazyItem"
import Link from "next/link"

const GroupList = (props) => {
  const [groupData, setGroupData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect( () => {
    const fetchData = async () => {
      if (props.preview === "true") {
        await db.collection("preview").doc(props.type).get().then(async (doc) => {
          const res = JSON.parse(doc.data().data)
          setGroupData(res)
          setIsLoading(false)
        })
      }
      else {
        await db.collection("setting").doc(props.type).get().then(async (doc) => {
          const res = JSON.parse(doc.data().data)
          setGroupData(res)
          setIsLoading(false)
        })
      }
    }
    fetchData();
  }, [])
  
  //item.data 는 배열인데 배열마다 enter키로 분리한 string으로 변경
  const convertData = (data) => {
    let result =""
    data.forEach((item) => {
      result += `${item}\n`
    })
    return result
  }
  
  return (
    <div>
      {isLoading ? <Loader /> : (
        <>
          {groupData.map((item, index) => {
            return (
              <>
                <div className={style.container} key={index}>
                  <div className={style.title}>{item.name}</div>
                  <div className={style.imgContainer}>
                    {item.img === "-" ? <LazyItem src={`group/none.svg`} name={item.name} nameOfClass="groupImage"/>:
                      <LazyItem src={`group/${item.img}`} name={item.name} nameOfClass="groupImage" />
                    }
                  </div>
                  <div className={style.contextContainer}>
                    <p>{convertData(item.data)}</p>
                    {item.homepage !== "-" &&
                      <Link href={item.homepage}><a className={style.button} target="_blank">홈페이지 방문</a></Link>
                    }
                  </div>
                </div>
              </>
            )
          })}
        </>
      )}
    </div>
  )
}
export default GroupList