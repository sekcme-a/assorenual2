import React, { useState, useCallback, useContext , useEffect } from "react"
import { firestore as db } from "src/firebase/firebase"
const fetchData = () => {

  useEffect(async () => {
    // db.collection("anouncement").doc("").set()

    //데이터들을 createdAt에 따라 sort하고 번호추가하기 + 고정 boolean데이터 (fixed=true/false) + createdAt timestamp로 바꾸기
    db.collection("anouncement").orderBy("createdAt").get().then((query) => {
      let count = 0;
      query.forEach((doc) => {
        count++;
        const date = new Date(doc.data().createdAt.seconds*1000)
        db.collection("anouncement").doc(doc.id).update({count: count, fixed: false, createdAt: date})
      })
    })
  },[])
  return (
    <>
      
    </>
  )
}
export default fetchData;