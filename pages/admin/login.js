import React from "react"
import style from "styles/admin/login.module.css"

const Login = () => {
  return (
    <div className={style.background}>
      <div className={style.container}>
        <div className={style.loginContainer}>
          <h4>Admin Login</h4>
          <div className={style.border} />
          <div className={style.loginButton}>구글로 로그인</div>
        </div>
        <div className={style.styleContainer}>
          <h4>국민의 건강과<br/>행복의 장을 여는<br/></h4>
          <h3>대한생활체육회</h3>
        </div>
      </div>
    </div>
  )
}
export default Login;