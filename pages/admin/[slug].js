import React, { useEffect, useState, useContext } from "react"
import { useRouter } from "next/router"
import { UserContext } from "src/data/context";
import AdminNavbar from "admin/src/component/AdminNavbar"
import style from "admin/styles/home.module.css"
import SetGreet from "admin/src/component/SetGreet"
import SetPurpose from "admin/src/component/SetPurpose"
import SetChart from "admin/src/component/SetCharts"
import SetStatus from "admin/src/component/SetStatus"
import SetLocation from "admin/src/component/SetLocation"
import SetGroup from "admin/src/component/SetGroup"
import { adminMenuItems } from "src/data/adminMenuItems"

const Admin = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { user, username, userrole } = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false)
  const [title, setTitle] = useState("")
  

  useEffect(() => {
    if (userrole === "admin")
      setIsAdmin(true)
  }, [userrole])
  
  useEffect(() => {
    adminMenuItems.forEach((item) => {
      if (item.child === false) {
        if (item.type === "sub" && item.path===`/${slug}`)
          setTitle(item.subtitle)
        if (item.type === "main" && item.path===`/${slug}`)
          setTitle(item.title)
      }
    })
  },[slug])

  return (
    <div className={style.adminBackground}>
      <div className={style.bg}>
        {isAdmin ? (
          <>
            <div className={style.navbarContainer}>
              <div className={style.navbarContainer2}>
                <AdminNavbar />
              </div>
            </div>
            <div className={style.contentContainer}>
              <div className={style.headerContainer}>
                <p>{title}</p>
              </div>
              {slug === "pageSetting1" && <SetGreet />}
              {slug === "pageSetting2" && <SetPurpose />}
              {slug === "pageSetting3" && <SetChart />}
              {slug === "pageSetting4" && <SetStatus />}
              {slug === "pageSetting5" && <SetLocation />}
              {slug === "pageSetting6" && <SetGroup type="nation"/>}
              {slug === "pageSetting7" && <SetGroup type="internation"/>}
              {slug === "pageSetting8" && <SetGroup type="sports"/>}
              {slug === "pageSetting9" && <SetGroup type="sanha"/>}
            </div>
          </>
        ) : (
          <div className={style.notAdminContainer}>
            <h2>관리자 권한이 없습니다.</h2>
            <h3>관리자가 관리자 권한을 부여해야합니다.</h3>
            <h4>권한을 부여해야하는 관리자명 : {`${username}`}</h4>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Admin;