import React, {lazy, Suspense, useEffect, useState} from 'react';
import Loader from "src/components/public/Loader"
import { firestore as db, storage } from "src/firebase/firebase"
const LazyImage = lazy(() => import('src/components/public/LazyImage')); // 이미지를 그리는 컴포넌트를 lazy 시켰습니다. lazy는 동적 import를 사용하는 함수를 인자로 넣어줘야합니다.


/*
LazyItem 사용법
<LazyItem src=이미지위치 name=이미지명 nameOfclass=css에 넣을 클래스 명
여기서 이미지 위치는 firebase storage 위치를 말하고
이미지명은 alt에 들어갈 내용
nameOfClass는 className=""에 들어간다.
이 css 스타일은 styles/lazyItem.css에서 바꿔주자.
*/
const LazyItem = (props) => {

  const [url, setUrl] = useState("")

  useEffect(() => {
    const fetchUrl = async () => {
      await storage.ref(props.src).getDownloadURL().then((url) => {
        setUrl(url)
      })
    }
    fetchUrl();
  },[])
  return (
    <>
        <Suspense fallback={<Loader />}> 
        {url === "" ? <>loading..</> : <LazyImage src={url} name={props.name} nameOfClass={props.nameOfClass} />}
        </Suspense>
    </>
  );
};

export default LazyItem;