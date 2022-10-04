import React, { useEffect, useState} from "react"
import { firestore as db } from "src/firebase/firebase"
import Link from "next/link"
import style from "styles/file/photoList.module.css"
import Pagination from "src/components/file/Pagination"
import Loader from "src/components/public/Loader"
import CampaignIcon from '@mui/icons-material/Campaign';

const PhotoList = (props) => {
  const [listData, setListData] = useState([])
  const [mobileMode, setMobileMode] = useState("false")
  const [isLoading, setIsLoading] = useState(true)
  let fetchedList;
  let prevList;
  let tempData = [];
  let tempFixedData = [];

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
      // setListData(tempData)
      // setFixedList(tempData)
      
      if (props.page === 1) {
        setTimeout(() => {
          fetchedList = (db.collection(props.folderName)
            .orderBy("createdAt", "desc")
            .limit(16))
          if (fetchedList !== undefined) {
            fetchedList.get().then((data) => {
              data.forEach((doc) => {
                const d = new Date(doc.data().createdAt.toMillis())
                let date;
                if(d.getMonth()+1<10 && d.getDate()<10)
                  date = d.getFullYear() + ".0" + (d.getMonth() + 1) + ".0" + d.getDate()
                else if(d.getMonth()+1<10 && d.getDate()>=10)
                  date = d.getFullYear() + ".0" + (d.getMonth() + 1) + "." + d.getDate()
                else if(d.getMonth()+1>=10 && d.getDate()<10)
                  date = d.getFullYear() + "." + (d.getMonth() + 1) + ".0" + d.getDate()
                else if(d.getMonth()+1>=10 && d.getDate()>=10)
                  date = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate()
                tempData = ([
                  ...tempData,
                  {
                    title: doc.data().title,
                    uid: doc.data().uid,
                    author: doc.data().author,
                    createdAt: date,
                    id: doc.id,
                    count: doc.data().count,
                    thumbnail: doc.data().thumbnail
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
          .limit(16 * (props.page - 1)))
        
        await prevList.get().then(async (snap) => {
          let lastVis = snap.docs[snap.docs.length - 1]
          if (lastVis !== undefined) {
            fetchedList = db.collection(props.folderName)
              .orderBy("createdAt", "desc")
              .startAfter(lastVis)
              .limit(16)
          }
        })
        if (fetchedList !== undefined) {
          fetchedList.get().then((data) => {
            data.forEach((doc) => {
              const d = new Date(doc.data().createdAt.toMillis())
              let date;
              if(d.getMonth()+1<10 && d.getDate()<10)
                date = d.getFullYear() + ".0" + (d.getMonth() + 1) + ".0" + d.getDate()
              else if(d.getMonth()+1<10 && d.getDate()>=10)
                date = d.getFullYear() + ".0" + (d.getMonth() + 1) + "." + d.getDate()
              else if(d.getMonth()+1>=10 && d.getDate()<10)
                date = d.getFullYear() + "." + (d.getMonth() + 1) + ".0" + d.getDate()
              else if(d.getMonth()+1>=10 && d.getDate()>=10)
                date = d.getFullYear() + "." + (d.getMonth() + 1) + "." + d.getDate()
              tempData = ([
                ...tempData,
                {
                  title: doc.data().title,
                  uid: doc.data().uid,
                  author: doc.data().author,
                  createdAt: date,
                  id: doc.id,
                  count: doc.data().count,
                  thumbnail: doc.data().thumbnail
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

  const onListClicked = (id) => {
    props.getPostName(id)
  }

  return (
    <>
      {isLoading ? <Loader /> : mobileMode ?
        <>
          <ul className={style.list}>
            {listData.map((item, index) => {
              return (
                <Link key={index} passHref href='/arti/[filename]/[page]/[id]' as={`/arti/${props.folderName}/${props.page}/${item.id}`}>
                  <a><li className={style.imgTable}>
                    {item.thumbnail && (
                      <div className={style.imgContainer}>
                        <img src={item.thumbnail} alt={item.title}/>
                      </div>
                    )}
                    <div className={style.textContainer}>
                      <div className={style.imgTitle}>{item.title}</div>
                      <div className={style.imgCreatedAt}>{item.createdAt}</div>
                    </div>
                  </li>
                    </a>
                </Link>
              )
            })}
          </ul>
        </>
        :
        <>
          <ul className={style.list}>
            {props.mode === "admin" ?
              listData.map((item, index) => {
              return (
                <li key={index} className={style.imgTable} onClick={()=>onListClicked(item.id)}>
                  {item.thumbnail && (
                    <div className={style.imgContainer}>
                      <img src={item.thumbnail} alt={item.title}/>
                    </div>
                  )}
                  <div className={style.textContainer}>
                    <div className={style.imgTitle}>{item.title}</div>
                    <div className={style.imgCreatedAt}>{item.createdAt}</div>
                  </div>
                </li>
              )
            })
              :
              listData.map((item, index) => {
              return (
             <li key={index} className={style.imgTable}>
                  {item.thumbnail && (
                    <div className={style.videoContainer}>
                      <img className={style.video}src={item.thumbnail}/>
                    </div>
                  )}
                  <Link passHref  href='/arti/[filename]/[page]/[id]' as={`/arti/${props.folderName}/${props.page}/${item.id}`}>
                    <a>
                    <div className={style.textContainer}>
                      <div className={style.imgTitle}>{item.title}</div>
                      <div className={style.imgCreatedAt}>{item.createdAt}</div>
                      </div>
                      </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </>
      }
      {listData.length === 0 && isLoading=== false && <h4 className={style.noPostInfo}>아직 게시물이 없습니다.</h4>}
      {props.mode === "user" && isLoading === false && <Pagination docName={props.folderName} page={props.page} postPerPage={16}/>}
    </>
  )
}

export default PhotoList;