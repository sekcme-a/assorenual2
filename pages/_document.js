import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
  
    return (
      <Html lang="kr">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />

          <title>대한생활체육회</title>
          <meta name="description" content="대한생활체육회 소개, 체육회 현황, 대회정보 및 자료제공" />
          <meta property="og:title" content="대한생활체육회" />
          <meta property="og:description" content="대한생활체육회 소개, 체육회 현황, 대회정보 및 자료제공"></meta>
        
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
          <link rel="canonical" href="https://xn--vk1by6xrzecngs4l6obxj.com"></link>
          <meta name="robots" content="index,follow"></meta>
          <meta property="og:type" content="website"></meta>
          <meta property="og:image" content="https://xn--vk1by6xrzecngs4l6obxj.com/public/logo-circle.png" />
          <meta property="og:url" content="https://xn--vk1by6xrzecngs4l6obxj.com"></meta>
          <meta name="keywords" content="대한생활체육회"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
          
          <meta name="naver-site-verification" content="fcd6939d5a2a544afe2de373e246bedd86d5702d" />
          <meta name="google-site-verification" content="h0jRizviYwbetdIjDK5dX1iXSEiLWvRJ_JqBAnc7nfg" />
          </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument