import React,{useEffect, useState} from "react"
import style from "admin/styles/setPurpose.module.css"
import { firestore as db, storage } from "src/firebase/firebase"
import Link from "next/link"
import { getCompressedImg } from "src/hooks/getCompressedImg"

const SetMainPopup = () => {
  const [data, setData] = useState()
  const [text, setText] = useState("")
  const [img, setImg] = useState("")

  const onImgChange = async (e) => {
    if (e.target.files[0] !== undefined) {
      const imgName = e.target.files[0].name;
      setImg(imgName)
      storage.ref().child(`mainPopup/${imgName}`).put(e.target.files[0]).then(function (snapshot) {
        alert("이미지가 추가됬습니다.")
      })
    }
  }

  const onTextChange = (e) => {setText(e.target.value)}

  //firebase 데이터 가져오기
  useEffect(() => {
    const fetchData = async () => {
      let tempText="";
      await db.collection("setting").doc("mainPopup").get().then((doc) => {
        const res = JSON.parse(doc.data().data)
        setData(res)
        res.forEach((item) => {
          tempText += `${item.img}///${item.link}\n`
        })
        setText(tempText)
      })
    }
    fetchData();
  }, [])
  
  const textToJsonAndSave = async (isPreview) => {
    let temp="[";
    const items = text.split("\n");
    items.forEach((item) => {
      if (item) {
        const splitedItem = item.split("///")
        temp += `{"img":"${splitedItem[0]}",`
        temp += `"link":"${splitedItem[1]}"},`
      }
    })
    temp = temp.substring(0, temp.length - 1)
    temp += "]"
    try {
      const res = JSON.parse(temp)
        await db.collection("setting").doc("mainPopup").set({ data: temp })
        alert("적용되었습니다.")
    } catch (e) {
      alert("형식에 맞게 작성되지않았습니다!\n" + e)
      return false;
    }
  }

  //string의 context를 배열로 변경하고 db에 저장
  const onSubmitClick = (event) => {
    event.preventDefault();
    textToJsonAndSave(false)
  }


  return (
    <form className={style.mainContainer}>
      <div className={`${style.container} ${style.container1}`}>
        <h4>이미지 추가</h4>
        <p className={style.warning}>*이미지의 크기가 2MB보다 클 경우 자동으로 압축됩니다.</p>
        <p>이미지 선택 : <input type="file" name="selectedImg[]" onChange={onImgChange} accept="image/*"/></p>
        <p>{`추가된 이미지명 : ${img}`}</p>
      </div>

      <div className={`${style.container} ${style.container2}`}>
        <h4>메인팝업 변경</h4>
        <p className={style.warning}>*형식 : 이미지명///연결 링크(없으면"-"로 표기) 줄바꿈(enter키)</p>
        <p><textarea  value={text} onChange={onTextChange} rows="30" cols="120" required/></p>
      </div>

      <input type="submit" onClick={onSubmitClick} className={style.button2} value="적용"></input>
    </form>
  )
}

export default SetMainPopup;