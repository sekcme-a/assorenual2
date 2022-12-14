import React from "react"
import MapIcon from '@mui/icons-material/Map';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3 className="footer-logo">대한생활체육회</h3>
        <div className="footer-info">
          <p>상 호 : (사)대한생활체육회 / 대표자 명 : 김균식</p>
          <p>고유 번호: 102-82-10135</p>
          <p>대표 번호: 02-2088-7508 | Fax.02-2088-7509 | Email : ksfaa21@naver.com</p>
          <p>Address: 서울특별시 영등포구 버드나루로 88 인따르시아 빌딩 101호.</p>
        </div>
        <p className="footer-company-name">대한생활체육회 &copy; 2021</p>
      </div>
      <div className="footer-center">
        <div>
          <div className="icon"><MapIcon/></div>
          <p><span>서울특별시 영등포구 버드나루로 88</span>인따르시아 빌딩 101호</p>
        </div>
        <div>
          <div className="icon"><PhoneIcon /></div>
          <p>Fax.02-2088-7508</p>
        </div>
        <div>
          <div className="icon"><EmailIcon/></div>
          <p><a href="mainto:ksfaa@naver.com">Email: ksfaa21@naver.com</a></p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>대한생활체육회</span>
          대한생활체육회는 순수 민간 비영리 법인 단체로서 정치, 종교, 등 모든 분야와 무관한 국민생활체육의 권장, 발전을 목표로 하고 있습니다.
        </p>
      </div>
      
    </footer>
  )
}
export default Footer