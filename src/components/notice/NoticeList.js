import React, { useEffect, useState} from "react"
import { firestore as db } from "src/firebase/firebase"
import Link from "next/link"
import style from "styles/notice/noticeList.module.css"
import Pagination from "src/components/notice/Pagination"
import Loader from "src/components/public/Loader"
import CampaignIcon from '@mui/icons-material/Campaign';

const NoticeList = (props) => {
  const [listData, setListData] = useState([])
  const [mobileMode, setMobileMode] = useState("false")
  const [isLoading, setIsLoading] = useState(true)
  let fetchedList;
  let prevList;
  let tempData = [];

  // PC/모바일 환경에 따라 table style 바꾸기위함
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 670)
        setMobileMode(true)
      else
        setMobileMode(false)
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      setListData(tempData)
      if (props.page === 1) {
        setTimeout(() => {
          fetchedList = (db.collection(props.folderName)
            .orderBy("createdAt", "desc")
            .limit(9))
          if (fetchedList !== undefined) {
            fetchedList.get().then((data) => {
              data.forEach((doc) => {
                const d = new Date(doc.data().createdAt.toMillis())
                const date = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate()
                tempData = ([
                  ...tempData,
                  {
                    title: doc.data().title,
                    uid: doc.data().uid,
                    author: doc.data().author,
                    createdAt: date,
                    id: doc.id,
                    count: doc.data().count,
                    fixed: doc.data().fixed
                  }
                ])
              })
              setListData(tempData)
              setIsLoading(false)
            })
          }
        },0)
      }
      else if (props.page !== 1) {
        prevList = (db.collection(props.folderName)
          .orderBy("createdAt", "desc")
          .limit(9 * (props.page - 1)))
        
        await prevList.get().then(async (snap) => {
          let lastVis = snap.docs[snap.docs.length - 1]
          if (lastVis !== undefined) {
            fetchedList = db.collection(props.folderName)
              .orderBy("createdAt", "desc")
              .startAfter(lastVis)
              .limit(9)
          }
        })
        if (fetchedList !== undefined) {
          fetchedList.get().then((data) => {
            data.forEach((doc) => {
              const d = new Date(doc.data().createdAt.toMillis())
              const date = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate()
              tempData = ([
                ...tempData,
                {
                  title: doc.data().title,
                  uid: doc.data().uid,
                  author: doc.data().author,
                  createdAt: date,
                  id: doc.id,
                  count: doc.data().count,
                  fixed: doc.data().fixed
                }
              ])
            })
            setListData(tempData)
            setIsLoading(false)
          })
        }
      }
    }
    fetchData();
  }, [props])
  
  const onMouseEnterTable = () => {

  }


  return (
    <>
      {isLoading ? <Loader /> : mobileMode ?
        <>
          <div className={style.menu}>
            <h4 className={style.count}>번호</h4>
            <h4 className={style.title}>제 목</h4>
          </div>
          <ul>
            {listData.map((item, index) => {
              return (
                <Link key={index} href='/article/[filename]/[page]/[id]' as={`/article/${props.folderName}/${props.page}/${item.id}`}>
                  {item.fixed ?
                    <li className={`${style.table} ${style.fixed}`}>
                      <p className={style.count}><CampaignIcon /></p>
                      <h4 className={style.title}>
                        {item.title}
                        <h4 className={style.mobile}>{item.createdAt} | {item.author}</h4>
                      </h4>
                    </li>
                    :
                    <li className={style.table}>
                      <p className={style.count}>{item.count}</p>
                      <h4 className={style.title}>
                        {item.title}
                        <h4 className={style.mobile}>{item.createdAt} | {item.author}</h4>
                      </h4>
                    </li>
                  }
                </Link>
              )
            })}
          </ul>
        </>
        :
        <>
          <div className={style.menu}>
            <h4 className={style.count}>번호</h4>
            <h4 className={style.title}>제 목</h4>
            <h4 className={style.createdAt}>등록일</h4>
            <h4 className={style.author}>작성자</h4>
          </div>
          <ul className={style.list}>
            {listData.map((item, index) => {
              return (
                <Link key={index} href='/article/[filename]/[page]/[id]' as={`/article/${props.folderName}/${props.page}/${item.id}`}>
                  {item.fixed ?
                    <li className={`${style.table} ${style.fixed}`}>
                      <p className={style.count}><CampaignIcon /></p>
                      <h4 className={style.title}>{item.title}</h4>
                      <h4 className={style.createdAt}>{item.createdAt}</h4>
                      <h4 className={style.author}>{item.author}</h4>
                    </li>
                    :
                    <li className={style.table}>
                      <p className={style.count}>{item.count}</p>
                      <h4 className={style.title}>{item.title}</h4>
                      <h4 className={style.createdAt}>{item.createdAt}</h4>
                      <h4 className={style.author}>{item.author}</h4>
                    </li>
                  }
                </Link>
              )
            })}
          </ul>
        </>
      }
      <Pagination docName={props.folderName} page={props.page} />
    </>
  )
}

export default NoticeList;