import React, {useEffect, useState} from "react"
import style from "styles/home/headerPopup.module.css"
import { firestore as db, storage } from "src/firebase/firebase"
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from "next/link"

const HeaderPopup = () => {

  const [urlList, setUrlList] = useState([])
  const [linkList, setLinkList] = useState([])
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchUrl = async () => {
      let list = [];
      let list2 = [];
      await db.collection("setting").doc("mainPopup").get().then((doc) => {
        const res = JSON.parse(doc.data().data)
        res.forEach(async (item) => {
          list2.push(item.link)
          setLinkList(list2)
          await storage.ref(`mainPopup/${item.img}`).getDownloadURL().then((url) => {
            list.push(url)
            setUrlList(list)
          })
        })
        setIsLoading(false)
      })
    }
    fetchUrl();
  }, [])

  const onRightButtonClick = () => {
    if(urlList.length>count+1)
      setCount(count+1)
    else
      setCount(0)
  }
  const onLeftButtonClick = () => {
    if(count===0)
      setCount(urlList.length-1)
    else
      setCount(count-1)
  }
  
  return (
    <div className={style.container}>
      {linkList[count] === "-" || linkList[count] === undefined ?
        <img className={style.img} src={urlList[count]} alt="adsf" />
        :
        <Link href={linkList[count]}>
          <img className={style.img} src={urlList[count]} alt="adsf" />
        </Link>
      }
      {isLoading === false &&
        <div className={style.buttonContainer}>
          <ArrowLeftIcon className={style.button} onClick={onLeftButtonClick} />
          <ArrowRightIcon className={style.button} onClick={onRightButtonClick} />
        </div>
      }
    </div>
  )
}
export default HeaderPopup;