import React, { useState, useCallback, useContext , useEffect } from "react"
import { firestore as db } from "src/firebase/firebase"
const fetchData = () => {

  useEffect(async () => {
    // db.collection("media").doc("").set()
//     db.collection("photo").doc("27GQSpVNZ4viOLajHO7z").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1",
//     "files": "",
//     "createdAt": {
//         "seconds": 1645531635,
//         "nanoseconds": 789000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210047850.jpg?alt=media&token=32c3435b-b3c9-4679-a488-b9275306b479",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210047850.jpg?alt=media&token=32c3435b-b3c9-4679-a488-b9275306b479 alt=\"KakaoTalk_20220222_210047850.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210047850.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440.jpg?alt=media&token=d68457e3-c1d0-4828-bbb9-f451b5f5bc0f alt=\"KakaoTalk_20220222_210100440.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_01.jpg?alt=media&token=e192bb53-3135-4aeb-a9c3-9f2fea630b53 alt=\"KakaoTalk_20220222_210100440_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_02.jpg?alt=media&token=334aee19-8d6e-48ff-9160-5562c72a81e4 alt=\"KakaoTalk_20220222_210100440_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_03.jpg?alt=media&token=247878d8-c295-4288-9bf0-e3678e0f85e8 alt=\"KakaoTalk_20220222_210100440_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_04.jpg?alt=media&token=0aa91d3c-6ac3-4be0-b2a9-9a5bdb21ea3b alt=\"KakaoTalk_20220222_210100440_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_05.jpg?alt=media&token=143690d7-247e-43a1-9141-e7676ca4be56 alt=\"KakaoTalk_20220222_210100440_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_06.jpg?alt=media&token=7f058d52-d2ae-407b-b9ab-2a774fbfc76f alt=\"KakaoTalk_20220222_210100440_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_06.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210100440_07.jpg?alt=media&token=66c49e67-2726-4cf8-bf20-8a713bb85196 alt=\"KakaoTalk_20220222_210100440_07.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210100440_07.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_210118005.jpg?alt=media&token=3691bfe7-d9b9-4d23-9ed1-90072565d1ab alt=\"KakaoTalk_20220222_210118005.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_210118005.jpg\"></p>",
//     "title": "대한생활체육회 서울스타일치과 와 업무협약 체결 2022.02.22"
// })
//     db.collection("photo").doc("2JZkEa0zKsca1VHr5JUo").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F1.jpg-2-3?alt=media&amp;token=304a9f45-3c81-41dd-9317-69d970d7912f alt=\"1.jpg\"width=\"400\" height=\"300\" alt=\"1.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F2.jpg-2?alt=media&amp;token=7d6a750d-3d55-4089-abcc-18f70533240a alt=\"2.jpg\"width=\"400\" height=\"300\" alt=\"2.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F3.jpg-2?alt=media&amp;token=b655df47-4966-4565-8498-9a4c0a31bca3 alt=\"3.jpg\"width=\"400\" height=\"300\" alt=\"3.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F4.jpg-2?alt=media&amp;token=77f9b554-d427-4b24-8923-c5e9c557cc9b alt=\"4.jpg\"width=\"400\" height=\"300\" alt=\"4.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F5.jpg-2?alt=media&amp;token=edef0cc3-3d14-4f13-bd78-2285dabbb8fc alt=\"5.jpg\"width=\"400\" height=\"300\" alt=\"5.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F6.jpg?alt=media&amp;token=2d78d59b-357b-4da9-b0e8-808895e2bf2d alt=\"6.jpg\"width=\"400\" height=\"300\" alt=\"6.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F7.jpg?alt=media&amp;token=89147768-7694-447a-a302-28ae83454744 alt=\"7.jpg\"width=\"400\" height=\"300\" alt=\"7.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F8.jpg?alt=media&amp;token=f991f719-ea69-4e34-bc44-670cb5dfd756 alt=\"8.jpg\"width=\"400\" height=\"300\" alt=\"8.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F9.jpg?alt=media&amp;token=072af0ca-ad41-46cd-bd81-6e5b4ad20058 alt=\"9.jpg\"width=\"400\" height=\"300\" alt=\"9.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F10.jpg?alt=media&amp;token=7150db32-8e5a-4feb-98c9-cf3071958578 alt=\"10.jpg\"width=\"400\" height=\"300\" alt=\"10.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F1.jpg-2-3?alt=media&amp;token=304a9f45-3c81-41dd-9317-69d970d7912f alt=\"1.jpg\"width=\"400\" height=\"300\" alt=\"11.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F2.jpg-2?alt=media&amp;token=7d6a750d-3d55-4089-abcc-18f70533240a alt=\"2.jpg\"width=\"400\" height=\"300\" alt=\"12.jpg\"></p>",
//     "title": "인천광역시생활체육회 위촉장 및 임명장 수여식 2022.03.26",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F1.jpg-2-3?alt=media&amp;token=304a9f45-3c81-41dd-9317-69d970d7912",
//     "createdAt": {
//         "seconds": 1648812494,
//         "nanoseconds": 567000000
//     },
//     "author": "관리자1"
// })
//     db.collection("photo").doc("2MLokyBbWUGvH3lhjn4L").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_19.jpg?alt=media&token=5d38ea78-f509-4b09-ae31-f76d974b48e5\" alt=\"KakaoTalk_20211107_132417404_19.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_19.jpg\"></p>",
//     "files": "",
//     "createdAt": {
//         "seconds": 1636436490,
//         "nanoseconds": 700000000
//     },
//     "author": "관리자",
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_19.jpg?alt=media&token=5d38ea78-f509-4b09-ae31-f76d974b48e5"
// })
//     db.collection("photo").doc("2xh9ATTWU6cKUyZBUVjD").set({
//     "createdAt": {
//         "seconds": 1638414896,
//         "nanoseconds": 197000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079.jpg?alt=media&token=ced3b947-5828-4a98-a2b9-ffb10d0ddc3d",
//     "author": "관리자1",
//     "title": "대한생활체육볼링협회 출범식개최 2021.12.01",
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079.jpg?alt=media&token=ced3b947-5828-4a98-a2b9-ffb10d0ddc3d alt=\"KakaoTalk_20211202_121136079.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079_01.jpg?alt=media&token=730124be-50d5-4c3e-bc03-57150f190ac8 alt=\"KakaoTalk_20211202_121136079_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079_02.jpg?alt=media&token=c9e737e9-f725-426b-9a80-1d80bc3dd1f7 alt=\"KakaoTalk_20211202_121136079_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079_03.jpg?alt=media&token=64b65146-818b-42d3-9b47-bfe717bb5c4f alt=\"KakaoTalk_20211202_121136079_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079_04.jpg?alt=media&token=4147ea8f-02a8-4559-aa0f-2e14cea54999 alt=\"KakaoTalk_20211202_121136079_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079_05.jpg?alt=media&token=c24f2f27-61bc-42b7-b730-0c1704abe30b alt=\"KakaoTalk_20211202_121136079_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211202_121136079_06.jpg?alt=media&token=7c7fc87c-c14f-447f-9472-359e09b8024d alt=\"KakaoTalk_20211202_121136079_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211202_121136079_06.jpg\"></p>",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     // db.collection("photo").doc("2zJaej1aIz2vrXlpF7Ex").set()
//     db.collection("photo").doc("3Fy60MQ95auIYdxsPa6g").set({
//     "createdAt": {
//         "seconds": 1650035140,
//         "nanoseconds": 214000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000236387.jpg?alt=media&token=924677f7-b3fa-4093-97af-aa7ade45f162",
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000236387.jpg?alt=media&token=924677f7-b3fa-4093-97af-aa7ade45f162 alt=\"KakaoTalk_20220416_000236387.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220416_000236387.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000244699.jpg?alt=media&token=08412676-33c9-442e-96b7-431eeb895268 alt=\"KakaoTalk_20220416_000244699.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220416_000244699.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000244699_01.jpg?alt=media&token=52ad0c77-7384-4bae-9ebe-1d98af79dcb1 alt=\"KakaoTalk_20220416_000244699_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220416_000244699_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000244699_02.jpg?alt=media&token=76baa6a8-e682-4257-ac0a-5caee8167d6e alt=\"KakaoTalk_20220416_000244699_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220416_000244699_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000244699_03.jpg?alt=media&token=a817ec22-ed12-4de7-b52e-efa0db778d72 alt=\"KakaoTalk_20220416_000244699_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220416_000244699_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220416_000244699_04.jpg?alt=media&token=5489f8d3-2f58-4ea6-9186-9a27bd5e5cef alt=\"KakaoTalk_20220416_000244699_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220416_000244699_04.jpg\"></p>",
//     "title": "대구광역시생활체육회 회장 임명장&단체등록증 전달식 2022.04.15",
//     "files": ""
// })
//     db.collection("photo").doc("3Il8MQLxfjcCVlztsvIv").set({
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1639124732,
//         "nanoseconds": 363000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172314789_01.jpg?alt=media&token=70be47c2-4686-409b-8a48-e19aae50647c",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "title": "대한생활체육브레인걷기협회 회장 성봉주 임명장&단체등록증 전달식 2021.12.09",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172314789_01.jpg?alt=media&token=70be47c2-4686-409b-8a48-e19aae50647c alt=\"KakaoTalk_20211210_172314789_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172314789_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172314789.jpg?alt=media&token=afd0ba27-5149-48e8-95f9-9b6f31ce07a8 alt=\"KakaoTalk_20211210_172314789.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172314789.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172314789_02.jpg?alt=media&token=24a34a29-7391-43fc-93a9-da421c783745 alt=\"KakaoTalk_20211210_172314789_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172314789_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172314789_06.jpg?alt=media&token=c6e5d471-c5ab-4229-a1be-93ea1cd39fc8 alt=\"KakaoTalk_20211210_172314789_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172314789_06.jpg\"></p>"
// })
//     db.collection("photo").doc("3srWZ2cuYgUiGYoUPoF3").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211128_123415016.jpg?alt=media&token=7214e826-c238-4c7f-893f-d11652e6a9e4",
//     "files": "",
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1638084138,
//         "nanoseconds": 912000000
//     },
//     "post": "<p>대한생활체육골프협회 중앙UCN 현판식 2021.11.28</p><p><br></p><p>대한생활체육골프협회 배철훈 회장님과 굿샷연예인골프단 이영범담장님이 </p><p>중앙UCN에 함께 현판식을 가졌습니다.</p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211128_123415016.jpg?alt=media&token=7214e826-c238-4c7f-893f-d11652e6a9e4 alt=\"KakaoTalk_20211128_123415016.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211128_123415016.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211128_123415016_01.jpg?alt=media&token=31164a43-0eb4-40ba-954d-f44be8b4906c alt=\"KakaoTalk_20211128_123415016_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211128_123415016_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211128_123415016_02.jpg?alt=media&token=854db44b-0dec-4539-858f-93ee2e3e247c alt=\"KakaoTalk_20211128_123415016_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211128_123415016_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211128_123415016_03.jpg?alt=media&token=4abc36bc-31c2-4858-982b-ea817df80044 alt=\"KakaoTalk_20211128_123415016_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211128_123415016_03.jpg\"></p><p><br></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211128_123415016_04.jpg?alt=media&token=e01f425d-1699-4ddf-a99d-219977b511a0 alt=\"KakaoTalk_20211128_123415016_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211128_123415016_04.jpg\"></p>",
//     "title": "대한생활체육골프협회 중앙UCN 현판식 2021.11.28",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("43AZbxkbln2Vp7CvHZkk").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_03.jpg?alt=media&token=e6308a8b-36c7-4e5f-a5c1-8c92ab548dd1\" alt=\"KakaoTalk_20211030_152011562_03.jpg\"width=\"400\" height=\"250\" alt=\"KakaoTalk_20211030_152011562_03.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_04.jpg?alt=media&token=f04c257a-9850-44de-a3f6-e58337a300d7\" alt=\"KakaoTalk_20211030_152011562_04.jpg\"width=\"400\" height=\"250\" alt=\"KakaoTalk_20211030_152011562_04.jpg\"></p>",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자",
//     "title": " ",
//     "createdAt": {
//         "seconds": 1635728918,
//         "nanoseconds": 710000000
//     },
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_03.jpg?alt=media&token=e6308a8b-36c7-4e5f-a5c1-8c92ab548dd1"
// })
//     db.collection("photo").doc("4Pftkh2zo0UU9p7QPSNG").set({
//     "author": "관리자1",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140.jpg?alt=media&token=248be97a-bcd7-43e3-9600-79913010c252",
//     "createdAt": {
//         "seconds": 1643291998,
//         "nanoseconds": 197000000
//     },
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140.jpg?alt=media&token=248be97a-bcd7-43e3-9600-79913010c252 alt=\"KakaoTalk_20220127_225311140.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140_01.jpg?alt=media&token=909a7f3c-3e41-423d-8fbc-8cd277f33554 alt=\"KakaoTalk_20220127_225311140_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140_02.jpg?alt=media&token=f3fecba7-8935-4d42-9cc7-1d3bba34312e alt=\"KakaoTalk_20220127_225311140_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140_03.jpg?alt=media&token=e15d952c-5fec-4e8e-8d3d-3c566f503dec alt=\"KakaoTalk_20220127_225311140_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140_04.jpg?alt=media&token=39026d3c-30ab-42f2-8dbe-5426cdb78238 alt=\"KakaoTalk_20220127_225311140_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140_05.jpg?alt=media&token=c10469d2-7b5f-463f-9b43-ce86e645126a alt=\"KakaoTalk_20220127_225311140_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_225311140_06.jpg?alt=media&token=f2b19feb-5764-4e07-bb9d-c08016d066ae alt=\"KakaoTalk_20220127_225311140_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_225311140_06.jpg\"></p>",
//     "title": "대한생활체육댄스스포츠협회 회장 최창환 임명장&단체등록증 전달식 2022.01.27",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": ""
// })
//     db.collection("photo").doc("4iElVkycoKWN8hZW9HET").set({
//     "files": "",
//     "createdAt": {
//         "seconds": 1636450364,
//         "nanoseconds": 995000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_24.jpg?alt=media&token=9269a08f-67f1-4b1f-8117-7397ec49040c",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_24.jpg?alt=media&token=9269a08f-67f1-4b1f-8117-7397ec49040c\" alt=\"KakaoTalk_20211107_132417404_24.jpg\"width=\"300\" height=\"400\" alt=\"KakaoTalk_20211107_132417404_24.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_25.jpg?alt=media&token=c07bd02e-0f1f-4476-a0e0-80952faf6599\" alt=\"KakaoTalk_20211107_132417404_25.jpg\"width=\"300\" height=\"400\" alt=\"KakaoTalk_20211107_132417404_25.jpg\"></p>",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자",
//     "title": " "
// })
//     db.collection("photo").doc("4uXJBPftZIGfkQXLa5fh").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_01.jpg?alt=media&token=1979c5a8-529f-41ac-ac5c-cbc4f42fcedd\" alt=\"KakaoTalk_20211030_152011562_01.jpg\"width=\"500\" height=\"360\" alt=\"KakaoTalk_20211030_152011562_01.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_02.jpg?alt=media&token=876cab7e-86c2-42aa-b1e9-65732d91e328\" alt=\"KakaoTalk_20211030_152011562_02.jpg\"width=\"500\" height=\"360\" alt=\"KakaoTalk_20211030_152011562_02.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1635728871,
//         "nanoseconds": 402000000
//     },
//     "files": "",
//     "author": "관리자",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_01.jpg?alt=media&token=1979c5a8-529f-41ac-ac5c-cbc4f42fcedd",
//     "title": "미스터 폴리스 선발대회",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12"
// })
//     db.collection("photo").doc("5NwIGjVWGuu2vVoRwD5o").set({
//     "files": "",
//     "author": "관리자",
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "createdAt": {
//         "seconds": 1636436286,
//         "nanoseconds": 719000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_11.jpg?alt=media&token=d51f36b2-f3a8-4627-ae3d-fcc9a0ba6900",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_11.jpg?alt=media&token=d51f36b2-f3a8-4627-ae3d-fcc9a0ba6900\" alt=\"KakaoTalk_20211107_132417404_11.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_11.jpg\"></p>"
// })
//     db.collection("photo").doc("5v9lmIlegew1z7y7DGxe").set({
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220408_163306796.jpg?alt=media&token=7c90f261-b70a-4bb3-939a-86c8655ac76d",
//     "createdAt": {
//         "seconds": 1649403327,
//         "nanoseconds": 527000000
//     },
//     "title": "대한생활체육당구협회 임명장&단체등록증 전달식 2022.04.08",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220408_163306796.jpg?alt=media&token=7c90f261-b70a-4bb3-939a-86c8655ac76d alt=\"KakaoTalk_20220408_163306796.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220408_163306796.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220408_163313986.jpg?alt=media&token=7e4ef7ad-7246-448e-95ff-ebee18e99834 alt=\"KakaoTalk_20220408_163313986.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220408_163313986.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220408_163313986_01.jpg?alt=media&token=cf02d4fe-e372-4b82-819e-4e8164397a35 alt=\"KakaoTalk_20220408_163313986_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220408_163313986_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220408_163313986_02.jpg?alt=media&token=0efb3bcd-e310-4365-b71b-2bed2db39ef0 alt=\"KakaoTalk_20220408_163313986_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220408_163313986_02.jpg\"></p>"
// })
//     db.collection("photo").doc("6ECXrbvpuzLdSm9qymGq").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_03.jpg?alt=media&amp;token=8fee6b08-216d-4b6d-83d5-ad0466bc7ec",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_03.jpg?alt=media&amp;token=8fee6b08-216d-4b6d-83d5-ad0466bc7ecd alt=\"KakaoTalk_20211226_203126704_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704.jpg?alt=media&amp;token=8b8e024a-7813-45bb-b651-08e1256d8c15 alt=\"KakaoTalk_20211226_203126704.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_01.jpg?alt=media&amp;token=5cbdf8f7-1322-4b02-b103-eb655f61777c alt=\"KakaoTalk_20211226_203126704_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_02.jpg?alt=media&amp;token=859ee2bb-7125-4c18-b7e4-6c652a9ebc30 alt=\"KakaoTalk_20211226_203126704_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_04.jpg?alt=media&amp;token=dfb4730a-1208-4222-9cb2-a44c8b10246d alt=\"KakaoTalk_20211226_203126704_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_05.jpg?alt=media&amp;token=d703c013-9338-4b91-ba4d-e266332dfc5e alt=\"KakaoTalk_20211226_203126704_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_06.jpg?alt=media&amp;token=40f70b76-0ad6-475f-a91b-71a686578c06 alt=\"KakaoTalk_20211226_203126704_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_06.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211226_203126704_07.jpg?alt=media&amp;token=0b34540c-77dd-4c4e-8d7a-8ff612517d38 alt=\"KakaoTalk_20211226_203126704_07.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211226_203126704_07.jpg\"></p>",
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "createdAt": {
//         "seconds": 1640518737,
//         "nanoseconds": 428000000
//     },
//     "author": "관리자1",
//     "title": "대한생활체육테니스협회 김태훈회장 코리아오픈테니스대회 축하 참석 2021.12.26"
// })
// //15
//     db.collection("photo").doc("7cRwPq8Azc3mhuZ2GABL").set({
//     "author": "관리자",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_26.jpg?alt=media&amp;token=aee58fb0-35fd-4844-82ef-8e35990092d",
//     "title": " ",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_26.jpg?alt=media&amp;token=aee58fb0-35fd-4844-82ef-8e35990092d1\" alt=\"KakaoTalk_20211107_132417404_26.jpg\"width=\"400\" height=\"270\" alt=\"KakaoTalk_20211107_132417404_26.jpg\"></p>",
//     "files": "",
//     "createdAt": {
//         "seconds": 1637092829,
//         "nanoseconds": 405000000
//     }
// })
//     db.collection("photo").doc("85KoEEXj6vXPM0aKXU8C").set({
//     "title": " ",
//     "files": "",
//     "createdAt": {
//         "seconds": 1636436472,
//         "nanoseconds": 302000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_18.jpg?alt=media&token=2aed0510-718d-4801-8842-d01280922aae",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_18.jpg?alt=media&token=2aed0510-718d-4801-8842-d01280922aae\" alt=\"KakaoTalk_20211107_132417404_18.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_18.jpg\"></p>",
//     "author": "관리자"
// })
//     db.collection("photo").doc("8LKWrN6WFDfwnseDIyuV").set({
//     "author": "관리자",
//     "title": " ",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_12.jpg?alt=media&token=7b0d925c-e1c6-48f8-ba6d-3c885a0bed93",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_12.jpg?alt=media&token=7b0d925c-e1c6-48f8-ba6d-3c885a0bed93\" alt=\"KakaoTalk_20211107_132417404_12.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_12.jpg\"></p>",
//     "files": "",
//     "createdAt": {
//         "seconds": 1636436323,
//         "nanoseconds": 236000000
//     },
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12"
// })
//     db.collection("photo").doc("8SD76SWLMMBd3ZCMt1cW").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_05.jpg?alt=media&token=19f746e9-8ab7-417c-acc9-143e5c702d23\" alt=\"KakaoTalk_20211030_152011562_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211030_152011562_05.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_05.jpg?alt=media&token=19f746e9-8ab7-417c-acc9-143e5c702d23",
//     "title": " ",
//     "createdAt": {
//         "seconds": 1635728952,
//         "nanoseconds": 218000000
//     },
//     "files": "",
//     "author": "관리자",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12"
// })
//     db.collection("photo").doc("8pcEKfvept1WMeXEO8Gf").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "title": "대한생활체육회 동서한방병원과 업무협약체결 2022.03.25",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F1234567.jpg?alt=media&amp;token=5ca2554c-191a-4a14-9974-44b6777ed98",
//     "files": "",
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2F1234567.jpg?alt=media&amp;token=5ca2554c-191a-4a14-9974-44b6777ed989 alt=\"1234567.jpg\"width=\"400\" height=\"300\" alt=\"1234567.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220325_232019572.jpg-2?alt=media&amp;token=f987f102-1905-4b8a-a497-fcc6928d8216 alt=\"KakaoTalk_20220325_232019572.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220325_232019572.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220325_232019572_01.jpg-2?alt=media&amp;token=77089d23-7535-4717-af68-be23e997fc98 alt=\"KakaoTalk_20220325_232019572_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220325_232019572_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220325_232019572_02.jpg-2?alt=media&amp;token=c51b46d5-7d3c-4eee-8f66-1f7bcd691c18 alt=\"KakaoTalk_20220325_232019572_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220325_232019572_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220325_232019572_03.jpg-2?alt=media&amp;token=2e16b5e3-892d-4333-bc25-de5351a7e5d6 alt=\"KakaoTalk_20220325_232019572_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220325_232019572_03.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1648812477,
//         "nanoseconds": 904000000
//     }
// })
//     db.collection("photo").doc("9KrqBUlGoeRq6j94KAnK").set({
//     "title": "대한생활체육회 사업본부단 임명장 수여식 2022.03.11",
//     "createdAt": {
//         "seconds": 1647166202,
//         "nanoseconds": 509000000
//     },
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220313_190405918_07.jpg?alt=media&token=eda2d2f1-c316-4809-8a75-d77136720964 alt=\"KakaoTalk_20220313_190405918_07.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220313_190405918_07.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220313_190405918_06.jpg?alt=media&token=b72ca709-fa4c-4065-8270-190148842426 alt=\"KakaoTalk_20220313_190405918_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220313_190405918_06.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220313_190405918_07.jpg?alt=media&token=eda2d2f1-c316-4809-8a75-d77136720964"
// })
//     db.collection("photo").doc("AQao7buN7V75gWlWMF0r").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_17.jpg?alt=media&token=8d3a5793-3ff6-4bcd-a1f4-f84ec6c66c06\" alt=\"KakaoTalk_20211107_132417404_17.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_17.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_17.jpg?alt=media&token=8d3a5793-3ff6-4bcd-a1f4-f84ec6c66c06",
//     "createdAt": {
//         "seconds": 1636436455,
//         "nanoseconds": 356000000
//     },
//     "files": "",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "title": " ",
//     "author": "관리자"
// })
//     db.collection("photo").doc("ASOdQ4q2YudbK99sqALV").set({
//     "createdAt": {
//         "seconds": 1644408137,
//         "nanoseconds": 112000000
//     },
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "title": "대한생활체육회 ㈜더드림&다드림 제휴 체결 2022.02.09",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220209_210001608.jpg?alt=media&token=20653139-cb22-40a0-98e9-308a2fb05d09",
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220209_210001608.jpg?alt=media&token=20653139-cb22-40a0-98e9-308a2fb05d09 alt=\"KakaoTalk_20220209_210001608.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220209_210001608.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220209_210006461.jpg?alt=media&token=9b6e4460-8217-49db-a770-8eec58a2356e alt=\"KakaoTalk_20220209_210006461.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220209_210006461.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220209_210006461_01.jpg?alt=media&token=f8eb6039-1f79-4ac6-bbaa-5e0b9a1901b1 alt=\"KakaoTalk_20220209_210006461_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220209_210006461_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220209_210006461_02.jpg?alt=media&token=426977c1-3396-416b-99c2-7a5da66baf5f alt=\"KakaoTalk_20220209_210006461_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220209_210006461_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220209_210006461_03.jpg?alt=media&token=9a5514f6-47bb-46b2-a04a-2d89ca8c596f alt=\"KakaoTalk_20220209_210006461_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220209_210006461_03.jpg\"></p>",
//     "files": ""
// })
//     db.collection("photo").doc("AcTa2lynXAWUIGtezHPJ").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_01.jpg?alt=media&token=8460c71c-8cff-4805-a84b-bf0cb8d2166b",
//     "title": "전국 OPEN 생활체육탁구대회",
//     "author": "관리자",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_01.jpg?alt=media&token=8460c71c-8cff-4805-a84b-bf0cb8d2166b\" alt=\"KakaoTalk_20211107_132417404_01.jpg\"width=\"520\" height=\"400\" alt=\"KakaoTalk_20211107_132417404_01.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404.jpg?alt=media&token=6d71699e-e689-43d2-b060-6f91f562d018\" alt=\"KakaoTalk_20211107_132417404.jpg\"width=\"520\" height=\"400\" alt=\"KakaoTalk_20211107_132417404.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1636344097,
//         "nanoseconds": 517000000
//     },
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "files": ""
// })
//     // db.collection("photo").doc("B0vWhS879hbZXps0I2tr").set()
//     db.collection("photo").doc("BKEGNzWGeBmzneDl0WZp").set({
//     "createdAt": {
//         "seconds": 1639297967,
//         "nanoseconds": 731000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640_01.jpg?alt=media&token=fc07db90-070c-43ff-83eb-8a456f8cf3d3",
//     "title": "대한생활체육회 태백시니어힐링협동조합 MOU체결 2021.12.12",
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640_01.jpg?alt=media&token=fc07db90-070c-43ff-83eb-8a456f8cf3d3 alt=\"KakaoTalk_20211212_172844640_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211212_172844640_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640.jpg?alt=media&token=3b66dea7-f22f-4ad9-aa82-21de3ff00664 alt=\"KakaoTalk_20211212_172844640.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211212_172844640.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640_02.jpg?alt=media&token=2e594d88-0239-4ff9-8c0f-17c3989d01e9 alt=\"KakaoTalk_20211212_172844640_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211212_172844640_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640_03.jpg?alt=media&token=f1a75f0b-13ca-4160-9148-28d9e7ae0315 alt=\"KakaoTalk_20211212_172844640_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211212_172844640_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640_04.jpg?alt=media&token=e6feabd2-cd45-430d-9a84-9fefcc510f3e alt=\"KakaoTalk_20211212_172844640_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211212_172844640_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211212_172844640_05.jpg?alt=media&token=50a8bce9-4d58-4abb-9747-c5cbeea310a0 alt=\"KakaoTalk_20211212_172844640_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211212_172844640_05.jpg\"></p>",
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("BdPUZDoP2XCKpCLVvV59").set({
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "post": "<p>대한생활체육회 마하나임GK 업무협약식 2022.02.18</p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_162638489.jpg?alt=media&token=27139431-35b1-4db1-aa81-9734f4ed9b24 alt=\"KakaoTalk_20220218_162638489.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220218_162638489.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_163331415.jpg?alt=media&token=d80c2ffb-14d8-4d6a-80b7-315645b7c527 alt=\"KakaoTalk_20220218_163331415.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220218_163331415.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_163331415_01.jpg?alt=media&token=6ecba433-bd88-4967-9940-0ab6963308fd alt=\"KakaoTalk_20220218_163331415_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220218_163331415_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_163331415_02.jpg?alt=media&token=1a4d5bab-f68c-45e4-a136-089ce6fd60ca alt=\"KakaoTalk_20220218_163331415_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220218_163331415_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_163331415_03.jpg?alt=media&token=2fe8d958-c23d-4436-aeea-f9c3f1f89864 alt=\"KakaoTalk_20220218_163331415_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220218_163331415_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_163331415_04.jpg?alt=media&token=a28e8bed-92f2-44c3-9ffb-674824f2b950 alt=\"KakaoTalk_20220218_163331415_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220218_163331415_04.jpg\"></p>",
//     "title": "대한생활체육회 마하나임GK 업무협약식 2022.02.18",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220218_162638489.jpg?alt=media&token=27139431-35b1-4db1-aa81-9734f4ed9b24",
//     "files": "",
//     "createdAt": {
//         "seconds": 1645169927,
//         "nanoseconds": 794000000
//     }
// })
//     db.collection("photo").doc("DdkUtLYXtwu6w9JT0nt2").set({
//     "createdAt": {
//         "seconds": 1639721567,
//         "nanoseconds": 915000000
//     },
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_02.jpg?alt=media&token=edbf67e4-b51b-4ce5-a3e2-4b40f672b202",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_02.jpg?alt=media&token=edbf67e4-b51b-4ce5-a3e2-4b40f672b202 alt=\"KakaoTalk_20211217_150719709_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709.jpg?alt=media&token=aada8e4c-81ec-4abe-a758-c9885cbb79e7 alt=\"KakaoTalk_20211217_150719709.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_01.jpg?alt=media&token=84cc6dc3-ffa4-4230-ac6b-48d172b714dc alt=\"KakaoTalk_20211217_150719709_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_03.jpg?alt=media&token=84855945-dd93-43b4-91ba-172271a7f11f alt=\"KakaoTalk_20211217_150719709_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_04.jpg?alt=media&token=30c29ae0-ed52-4af8-834e-631d23996e9e alt=\"KakaoTalk_20211217_150719709_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_05.jpg?alt=media&token=c08f3ed6-8cd6-4edd-82db-26d6ed66eb32 alt=\"KakaoTalk_20211217_150719709_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_150719709_06.jpg?alt=media&token=fbefb624-4800-4ee3-80b5-9558432b34a0 alt=\"KakaoTalk_20211217_150719709_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_150719709_06.jpg\"></p>",
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "title": "대한생활체육피구협회 회장 조현영 임명장&단체등록증 전달식 2021.12.17"
// })
//     db.collection("photo").doc("G9ZWFLcUx4hRlDDALCey").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_07.jpg?alt=media&token=a6cdcc5a-f378-4d8b-b75a-b40ab3955579",
//     "files": "",
//     "author": "관리자",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_07.jpg?alt=media&token=a6cdcc5a-f378-4d8b-b75a-b40ab3955579\" alt=\"KakaoTalk_20211107_132417404_07.jpg\"width=\"400\" height=\"320\" alt=\"KakaoTalk_20211107_132417404_07.jpg\"></p>",
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "createdAt": {
//         "seconds": 1636436182,
//         "nanoseconds": 16000000
//     }
// })
//     db.collection("photo").doc("Gq0hnuNcAFF0sfLAT0fj").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_13.jpg?alt=media&token=1febf234-463b-480c-b1e4-9918aaac0ca9\" alt=\"KakaoTalk_20211107_132417404_13.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_13.jpg\"></p>",
//     "author": "관리자",
//     "createdAt": {
//         "seconds": 1636436348,
//         "nanoseconds": 149000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_13.jpg?alt=media&token=1febf234-463b-480c-b1e4-9918aaac0ca9",
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "files": ""
// })
//     db.collection("photo").doc("IUjXqAUYwoXfKBUeKEsl").set({
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220313_190405918_02.jpg?alt=media&amp;token=0a1bfe41-ee07-4234-a8e4-3f3dd090ea8",
//     "title": "대한생활체육회 온라인 운영단 임명장 수여식 2022.03.13",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220313_190405918_02.jpg?alt=media&amp;token=0a1bfe41-ee07-4234-a8e4-3f3dd090ea85 alt=\"KakaoTalk_20220313_190405918_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220313_190405918_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220313_190405918_01.jpg?alt=media&amp;token=bbe94e19-bbe3-431f-9ddf-5b060662530a alt=\"KakaoTalk_20220313_190405918_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220313_190405918_01.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1648812445,
//         "nanoseconds": 943000000
//     }
// })
//     db.collection("photo").doc("JOmuSfz7F6d5a9g78azt").set({
//     "title": "대한생활체육회 사무실에서",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8C%80%EC%83%9D%EC%B2%B4%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%97%90%EC%84%9C.jpg-2?alt=media&token=186bf05e-0f73-44ac-b064-45fd28afa897\" alt=\"대생체사무실에서.jpg\"width=\"400\" height=\"200\" alt=\"대생체사무실에서.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8C%80%EC%83%9D%EC%B2%B4%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%97%90%EC%84%9C2.jpg-2?alt=media&token=30d444dd-790b-4cad-9d2c-0b2461059351\" alt=\"대생체사무실에서2.jpg\"width=\"400\" height=\"200\" alt=\"대생체사무실에서2.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8C%80%EC%83%9D%EC%B2%B4%EC%82%AC%EB%AC%B4%EC%8B%A4%EC%97%90%EC%84%9C.jpg-2?alt=media&token=186bf05e-0f73-44ac-b064-45fd28afa897",
//     "author": "관리자",
//     "files": "",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "createdAt": {
//         "seconds": 1634530522,
//         "nanoseconds": 124000000
//     }
// })
//     db.collection("photo").doc("JUSUzOC8VVfBmlhOTId0").set({
//     "files": "",
//     "createdAt": {
//         "seconds": 1636436251,
//         "nanoseconds": 194000000
//     },
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_10.jpg?alt=media&token=52e7bc23-ad6c-4268-8759-5d263aa06455\" alt=\"KakaoTalk_20211107_132417404_10.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_10.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_10.jpg?alt=media&token=52e7bc23-ad6c-4268-8759-5d263aa06455",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "title": " ",
//     "author": "관리자"
// })
//     db.collection("photo").doc("KG6147zgrsIW9UzrF5Ae").set({
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_05.jpg?alt=media&token=50cbb945-945d-473b-8b5f-f72ea44f7a49",
//     "createdAt": {
//         "seconds": 1636436143,
//         "nanoseconds": 506000000
//     },
//     "title": " ",
//     "author": "관리자",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_05.jpg?alt=media&token=50cbb945-945d-473b-8b5f-f72ea44f7a49\" alt=\"KakaoTalk_20211107_132417404_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_05.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_06.jpg?alt=media&token=df072346-554c-4f4c-b92f-133400aa85ea\" alt=\"KakaoTalk_20211107_132417404_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_06.jpg\"></p>"
// })
//     db.collection("photo").doc("KGapFsIKuU0JK0Mjyycz").set({
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자",
//     "title": " ",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_06.jpg?alt=media&token=48882161-cb73-4851-bf03-59ab07808971",
//     "createdAt": {
//         "seconds": 1635728983,
//         "nanoseconds": 954000000
//     },
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_06.jpg?alt=media&token=48882161-cb73-4851-bf03-59ab07808971\" alt=\"KakaoTalk_20211030_152011562_06.jpg\"width=\"450\" height=\"300\" alt=\"KakaoTalk_20211030_152011562_06.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562_07.jpg?alt=media&token=9606ea03-3c10-4fd9-88ce-385091052322\" alt=\"KakaoTalk_20211030_152011562_07.jpg\"width=\"450\" height=\"300\" alt=\"KakaoTalk_20211030_152011562_07.jpg\"></p>"
// })
//     db.collection("photo").doc("LavIHdCV6szw7cP7Citd").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "title": "대한생활체육회 펫스포츠협회장 임명장&단체등록증 전달식 2021.12.03",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191815216.jpg?alt=media&token=2699611d-889d-453c-8f00-06492161f94c alt=\"KakaoTalk_20211203_191815216.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191815216.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191815216_01.jpg?alt=media&token=3c8c1d8c-ef59-44e0-a938-4f398c75720e alt=\"KakaoTalk_20211203_191815216_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191815216_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191815216_02.jpg?alt=media&token=45a5791d-66b5-444d-9bd4-469a03a87a40 alt=\"KakaoTalk_20211203_191815216_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191815216_02.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191815216.jpg?alt=media&token=2699611d-889d-453c-8f00-06492161f94c",
//     "author": "관리자1",
//     "files": "",
//     "createdAt": {
//         "seconds": 1638526860,
//         "nanoseconds": 727000000
//     }
// })
//     db.collection("photo").doc("LppYNiOwUDQ5WCZvMrvi").set({
//     "createdAt": {
//         "seconds": 1637908082,
//         "nanoseconds": 187000000
//     },
//     "post": "<p>2021.11.26</p><p><span class=\"ql-size-large\">대한생활체육회 총재 (김균식)는 굿 뉴스측(차장 고정연)과 26일 생활체육의 발전과 미래에 대한 대한생활체육회의 비전을 전하였다.</span></p><p><br></p><p><span class=\"ql-size-large\"><span class=\"ql-cursor\">﻿</span></span></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211126_150311364.jpg?alt=media&amp;token=8b245db2-5f75-40bb-85b4-2000b7d6678e alt=\"KakaoTalk_20211126_150311364.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211126_150311364.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211126_150311364_03.jpg?alt=media&amp;token=9279facf-f41b-471f-bbd4-eda74b74a8df alt=\"KakaoTalk_20211126_150311364_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211126_150311364_03.jpg\"></p>",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1",
//     "title": "대한생활체육회 굿 뉴스 취재기자 고정연님과의 인터뷰",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211126_150311364.jpg?alt=media&amp;token=8b245db2-5f75-40bb-85b4-2000b7d6678",
//     "files": ""
// })
//     db.collection("photo").doc("MM3NcZaBNZck0OWBtdPC").set({
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211229_100716610.jpg?alt=media&token=ba093dab-81e2-4180-a472-9e21ae187a68 alt=\"KakaoTalk_20211229_100716610.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211229_100716610.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211229_100716610_01.jpg?alt=media&token=d7a8837d-c5f3-43d7-b2b0-26ebd80a713f alt=\"KakaoTalk_20211229_100716610_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211229_100716610_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211229_100716610_02.jpg?alt=media&token=d1b704b7-d5a0-43f2-bae5-c5c9fe43f8f6 alt=\"KakaoTalk_20211229_100716610_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211229_100716610_02.jpg\"></p>",
//     "title": "대한생활체육골프협회 대전지회 사무실 현판식 2021.12.29",
//     "createdAt": {
//         "seconds": 1640740216,
//         "nanoseconds": 163000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211229_100716610.jpg?alt=media&token=ba093dab-81e2-4180-a472-9e21ae187a68",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1"
// })
//     db.collection("photo").doc("MthNlZcikAcE4MgBXhEs").set({
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "createdAt": {
//         "seconds": 1638526457,
//         "nanoseconds": 253000000
//     },
//     "author": "관리자1",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191035788.jpg?alt=media&token=a7bd3ebc-e9cf-4742-b366-44cc3d316f60",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191035788.jpg?alt=media&token=a7bd3ebc-e9cf-4742-b366-44cc3d316f60 alt=\"KakaoTalk_20211203_191035788.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191035788.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191035788_01.jpg?alt=media&token=eb2b2525-dc83-4244-a322-a714571779e9 alt=\"KakaoTalk_20211203_191035788_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191035788_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191035788_02.jpg?alt=media&token=23851d93-07d0-45dc-bedc-2455b6ec2f4a alt=\"KakaoTalk_20211203_191035788_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191035788_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191035788_03.jpg?alt=media&token=c983fbbe-0708-4971-a5ef-49c432a073d4 alt=\"KakaoTalk_20211203_191035788_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191035788_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191035788_04.jpg?alt=media&token=82c0605c-a33e-49e8-b7cb-098b834c422e alt=\"KakaoTalk_20211203_191035788_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191035788_04.jpg\"></p>",
//     "title": "대한생활체육회 자문위원장 위촉장 전달식 2021.12.03"
// })
//     db.collection("photo").doc("OcJ2cpm9gVnwrOsL4fk7").set({
//     "files": "",
//     "title": " ",
//     "createdAt": {
//         "seconds": 1636450331,
//         "nanoseconds": 214000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_23.jpg?alt=media&token=02f81d84-6caf-4783-be89-da95680efcb9",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_23.jpg?alt=media&token=02f81d84-6caf-4783-be89-da95680efcb9\" alt=\"KakaoTalk_20211107_132417404_23.jpg\"width=\"400\" height=\"270\" alt=\"KakaoTalk_20211107_132417404_23.jpg\"></p>",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자"
// })

//     //40

//       // db.collection("photo").doc("OiKuux3txcQ2X2gVecgS").set()
//     db.collection("photo").doc("PLcGbbgKq94zShe1SH5a").set({
//     "title": "대한생활체육승마협회장 임명장&단체등록증 전달식 2021.12.03",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192326380.jpg?alt=media&token=cb0946ba-bbba-4289-a620-9209bb1041a7",
//     "createdAt": {
//         "seconds": 1638527188,
//         "nanoseconds": 861000000
//     },
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192326380.jpg?alt=media&token=cb0946ba-bbba-4289-a620-9209bb1041a7 alt=\"KakaoTalk_20211203_192326380.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192326380.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192326380_01.jpg?alt=media&token=258f7ab3-e701-405e-9f25-402f239de839 alt=\"KakaoTalk_20211203_192326380_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192326380_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192326380_02.jpg?alt=media&token=3c62e2b9-9576-4071-a40e-3002012e8bd1 alt=\"KakaoTalk_20211203_192326380_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192326380_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192326380_03.jpg?alt=media&token=0683f86b-33c6-434a-b048-3e6b955b2f1d alt=\"KakaoTalk_20211203_192326380_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192326380_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192326380_04.jpg?alt=media&token=e1060f24-e886-4609-b927-b87293c7dd56 alt=\"KakaoTalk_20211203_192326380_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192326380_04.jpg\"></p>",
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("QvhakZzASaw5SBIhf80e").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_02.jpg?alt=media&token=f610f85f-75c1-4621-a533-ad872abc5dc9",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_02.jpg?alt=media&token=f610f85f-75c1-4621-a533-ad872abc5dc9\" alt=\"KakaoTalk_20211107_132417404_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_02.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_03.jpg?alt=media&token=aa8e461b-ec42-499e-a96c-e8f1f2b6c594\" alt=\"KakaoTalk_20211107_132417404_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_03.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1636436058,
//         "nanoseconds": 519000000
//     },
//     "title": " ",
//     "author": "관리자",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "files": ""
// })
//     db.collection("photo").doc("RomQZp15MncSDA38WRmv").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "createdAt": {
//         "seconds": 1641102648,
//         "nanoseconds": 151000000
//     },
//     "title": "2022년 새해 출발 대한생활체육회 스키-스노우보드협회 회장과 협회원과 함께 2022.01.01",
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452.jpg?alt=media&amp;token=5c474dae-345f-45d8-bf96-bba41ea3b8ef alt=\"KakaoTalk_20220102_142828452.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452_01.jpg?alt=media&amp;token=21a9b382-3f10-40c8-b92f-eee1df04604c alt=\"KakaoTalk_20220102_142828452_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452_02.jpg?alt=media&amp;token=72ec6dd9-0d4b-467f-a844-a0d433e0dbba alt=\"KakaoTalk_20220102_142828452_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452_03.jpg?alt=media&amp;token=d5240992-6c19-4820-a5dd-54fb501c3aaf alt=\"KakaoTalk_20220102_142828452_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452_04.jpg?alt=media&amp;token=b70315cd-add0-4199-8390-a02e39d289a4 alt=\"KakaoTalk_20220102_142828452_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452_05.jpg?alt=media&amp;token=0063c49a-0e77-47ce-9631-0afb7c3596bf alt=\"KakaoTalk_20220102_142828452_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452_06.jpg?alt=media&amp;token=4827e1a3-57df-4494-918a-a9f2989387cb alt=\"KakaoTalk_20220102_142828452_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142828452_06.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142834132.jpg?alt=media&amp;token=f0254f27-5382-4164-bdd3-2e5eda80f9f4 alt=\"KakaoTalk_20220102_142834132.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220102_142834132.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220102_142828452.jpg?alt=media&amp;token=5c474dae-345f-45d8-bf96-bba41ea3b8e",
//     "author": "관리자1"
// })
//     db.collection("photo").doc("SPoCiWzMS9BeZOejlLtu").set({
//     "author": "관리자",
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "createdAt": {
//         "seconds": 1636436227,
//         "nanoseconds": 293000000
//     },
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_08.jpg?alt=media&token=cd089c1e-925d-4b5a-b32a-32793e9ec27c\" alt=\"KakaoTalk_20211107_132417404_08.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_08.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_09.jpg?alt=media&token=456747f7-f434-44ad-a6f8-fe11c6777b8d\" alt=\"KakaoTalk_20211107_132417404_09.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_09.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_08.jpg?alt=media&token=cd089c1e-925d-4b5a-b32a-32793e9ec27c",
//     "files": ""
// })
//     db.collection("photo").doc("U3g0VYO4ysQJUaY7Slty").set({
//     "createdAt": {
//         "seconds": 1648812512,
//         "nanoseconds": 216000000
//     },
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_201112836.jpg?alt=media&amp;token=760a1cbc-4b81-40a8-9cce-a3c893fa56a",
//     "files": "",
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_201112836.jpg?alt=media&amp;token=760a1cbc-4b81-40a8-9cce-a3c893fa56a8 alt=\"KakaoTalk_20220401_201112836.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_201112836.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202232038.jpg?alt=media&amp;token=e13dea2a-34ea-4519-80eb-c8f4bd0f898b alt=\"KakaoTalk_20220401_202232038.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202232038.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202232038_01.jpg?alt=media&amp;token=40174c8c-16e1-4055-a944-e22606ae0019 alt=\"KakaoTalk_20220401_202232038_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202232038_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202232038_02.jpg?alt=media&amp;token=ff6accf7-c065-4053-b9f5-927ebf5538c2 alt=\"KakaoTalk_20220401_202232038_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202232038_02.jpg\"></p>",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "title": "대한생활체육올리골프협회장 임명장&단체등록증 수여 전달식 2022.04.01"
// })
//     // db.collection("photo").doc("UP6WU1ZpbxSfbbKzdufS").set()
//     db.collection("photo").doc("UWmLckB4PaHAUScimXbF").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_211133321.jpg?alt=media&amp;token=ae8170f7-98c5-4f3b-89fb-95dbf132cc5",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1645532310,
//         "nanoseconds": 539000000
//     },
//     "title": "대한생활체육회 미주한인회 총 연합회 전경수 회장 활동 현황 2022.02.22",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_211133321.jpg?alt=media&amp;token=ae8170f7-98c5-4f3b-89fb-95dbf132cc5b alt=\"KakaoTalk_20220222_211133321.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_211133321.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_211139362.jpg?alt=media&amp;token=d85a3744-5dab-43f3-a343-186ffd431714 alt=\"KakaoTalk_20220222_211139362.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_211139362.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_211139362_01.jpg?alt=media&amp;token=29c458bf-4c50-423d-9f36-aecdd3bc8fc0 alt=\"KakaoTalk_20220222_211139362_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_211139362_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220222_211139362_02.jpg?alt=media&amp;token=fc24eff8-65dd-4542-b89f-efc8518d9eee alt=\"KakaoTalk_20220222_211139362_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220222_211139362_02.jpg\"></p>",
//     "files": ""
// })
//     db.collection("photo").doc("V8Z0LtDhfaRWUMLhz8DJ").set({
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_03.jpg-2?alt=media&amp;token=03e5b5f6-6b78-4904-9ea9-f6382452d83f alt=\"KakaoTalk_20211217_145850652_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652.jpg?alt=media&amp;token=46328a1b-e480-4ee4-ae48-bad2032f72de alt=\"KakaoTalk_20211217_145850652.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_01.jpg?alt=media&amp;token=d309e75a-6c8b-458e-af84-d925961d8d1b alt=\"KakaoTalk_20211217_145850652_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_02.jpg?alt=media&amp;token=9c28a118-7087-44a2-90a2-e141cc5c2d1e alt=\"KakaoTalk_20211217_145850652_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_04.jpg?alt=media&amp;token=f1e5f0b2-8c19-4847-ab67-5668e2b48834 alt=\"KakaoTalk_20211217_145850652_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_05.jpg?alt=media&amp;token=1dc55ee4-ff8a-46df-a580-934055f0d937 alt=\"KakaoTalk_20211217_145850652_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_06.jpg?alt=media&amp;token=b78f7961-aa39-4256-87ea-cee694748351 alt=\"KakaoTalk_20211217_145850652_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_06.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_07.jpg?alt=media&amp;token=bbf0fd63-8db2-4b96-9412-b17bee86d7d3 alt=\"KakaoTalk_20211217_145850652_07.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211217_145850652_07.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211217_145850652_03.jpg-2?alt=media&amp;token=03e5b5f6-6b78-4904-9ea9-f6382452d83",
//     "createdAt": {
//         "seconds": 1639721352,
//         "nanoseconds": 22000000
//     },
//     "title": "대한생활체육티볼소프트볼협회 회장 황창근  임명장&단체등록증 전달식 2021.12.17",
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("ZGFA3gUWbC6dxZLXrHPV").set({
//     "createdAt": {
//         "seconds": 1642336197,
//         "nanoseconds": 287000000
//     },
//     "title": "대한생활체육골프협회, 임명장 수여 및 출범식 개최 2022.01.16",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160.jpg?alt=media&token=55da6410-99d9-4064-a25c-7b2eb73308fd",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160.jpg?alt=media&token=55da6410-99d9-4064-a25c-7b2eb73308fd alt=\"KakaoTalk_20220116_212654160.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160_01.jpg?alt=media&token=d403d53c-c5a7-4252-a712-6235496514de alt=\"KakaoTalk_20220116_212654160_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160_02.jpg?alt=media&token=53c2ce14-f224-45de-973c-f0ceb8e14705 alt=\"KakaoTalk_20220116_212654160_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160_03.jpg?alt=media&token=44f1e241-35dd-44e6-a1d0-0dec7f72a6cb alt=\"KakaoTalk_20220116_212654160_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160_04.jpg?alt=media&token=bd06acda-3e06-4791-b409-6fe68f8bbe28 alt=\"KakaoTalk_20220116_212654160_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160_05.jpg?alt=media&token=672605c8-55f4-4135-8c29-9162938eb2da alt=\"KakaoTalk_20220116_212654160_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220116_212654160_06.jpg?alt=media&token=39d9b9e2-4d56-4b45-b384-f8f85db63715 alt=\"KakaoTalk_20220116_212654160_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220116_212654160_06.jpg\"></p>",
//     "author": "관리자1",
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("amc4Z6wcYIB3zOdfnTtV").set({
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EC%A4%91%EC%95%99%EC%82%AC%EB%AC%B4%EC%8B%A4%20%EC%A0%84%EA%B2%BD.jpg?alt=media&token=e2010992-de12-4565-9ea0-58501234d2cb",
//     "author": "관리자",
//     "title": "중앙사무실 전경",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EC%A4%91%EC%95%99%EC%82%AC%EB%AC%B4%EC%8B%A4%20%EC%A0%84%EA%B2%BD.jpg?alt=media&token=e2010992-de12-4565-9ea0-58501234d2cb\" alt=\"중앙사무실 전경.jpg\"width=\"400\" height=\"250\" alt=\"중앙사무실 전경.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1634543638,
//         "nanoseconds": 682000000
//     },
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12"
// })
//     db.collection("photo").doc("b0rga9bHv8hf4SfDFP8s").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211118_171335897.jpg-2-3?alt=media&token=d067e996-9630-4e92-8172-fd5fbdfaebbd",
//     "createdAt": {
//         "seconds": 1637223911,
//         "nanoseconds": 451000000
//     },
//     "files": "",
//     "title": "대한생활(다문화)체육회 회장 김선용님 임명장 전달식",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211118_171335897.jpg-2-3?alt=media&token=d067e996-9630-4e92-8172-fd5fbdfaebbd alt=\"KakaoTalk_20211118_171335897.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211118_171335897.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211118_171335897_01.jpg?alt=media&token=7aaea9e4-e35d-449a-a23e-eae3adb08c6f alt=\"KakaoTalk_20211118_171335897_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211118_171335897_01.jpg\"></p>",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1"
// })
//     db.collection("photo").doc("bhGKTcnCIMVUu24PtSmB").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220110_175912854.jpg?alt=media&token=345c1d57-73da-4b48-90a6-18e90cd74af9 alt=\"KakaoTalk_20220110_175912854.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220110_175912854.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220110_175912854_01.jpg?alt=media&token=46b9dc66-8413-4ea9-8779-350e1fbf9eb5 alt=\"KakaoTalk_20220110_175912854_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220110_175912854_01.jpg\"></p>",
//     "author": "관리자1",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220110_175912854.jpg?alt=media&token=345c1d57-73da-4b48-90a6-18e90cd74af9",
//     "title": "대한생활체육회 부총재 권용철, 끌레오슈가링 대표 체육회 방문 2022.01.10",
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "createdAt": {
//         "seconds": 1641805358,
//         "nanoseconds": 246000000
//     }
// })
//     db.collection("photo").doc("c09SQxQS3R5nbpPqXx2Q").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192027295.jpg?alt=media&token=1e2d5fd6-9b67-4671-8fa8-c66a811f80d6",
//     "title": "대한생활체육유청소년체육회장 임명장&단체등록증 전달식 2021.12.03",
//     "createdAt": {
//         "seconds": 1638527021,
//         "nanoseconds": 482000000
//     },
//     "files": "",
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192027295.jpg?alt=media&token=1e2d5fd6-9b67-4671-8fa8-c66a811f80d6 alt=\"KakaoTalk_20211203_192027295.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192027295.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192027295_01.jpg?alt=media&token=1d40d34b-fa57-4373-bdbb-52787c0bd9e8 alt=\"KakaoTalk_20211203_192027295_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192027295_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192027295_02.jpg?alt=media&token=172061b9-678c-4096-a56e-9ba9e7c1c902 alt=\"KakaoTalk_20211203_192027295_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192027295_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_192027295_03.jpg?alt=media&token=d88303fa-b0b7-4c99-be01-8ca0c1eeeb59 alt=\"KakaoTalk_20211203_192027295_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_192027295_03.jpg\"></p>"
// })
//     db.collection("photo").doc("cndSzmz0aMbRdaSv8dLz").set({
//     "title": "대한생활체육회 용평호텔리조트 상호협력 업무 협약식 2021.12.09",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_06.jpg-2?alt=media&token=1152d689-a3ef-4c03-b376-5a8b0484968b",
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1639062850,
//         "nanoseconds": 689000000
//     },
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_06.jpg-2?alt=media&token=1152d689-a3ef-4c03-b376-5a8b0484968b alt=\"KakaoTalk_20211210_000337428_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_06.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428.jpg-2?alt=media&token=a9ec90d5-ef3a-4c51-b625-d99cebba9e0e alt=\"KakaoTalk_20211210_000337428.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_01.jpg-2?alt=media&token=4c4fe040-7156-4c6e-b5da-c450acda2539 alt=\"KakaoTalk_20211210_000337428_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_02.jpg-2?alt=media&token=be4ad6f4-90a2-449e-a7ec-a02c8c14bd06 alt=\"KakaoTalk_20211210_000337428_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_03.jpg-2?alt=media&token=2fb682ee-cd4d-4a42-bccf-a7f11fcadc31 alt=\"KakaoTalk_20211210_000337428_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_04.jpg-2?alt=media&token=5c08af30-db6d-4934-a5c6-fdd0e0f59ea6 alt=\"KakaoTalk_20211210_000337428_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_05.jpg-2?alt=media&token=9c843b49-e238-4821-865c-9ffbcb14c389 alt=\"KakaoTalk_20211210_000337428_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_07.jpg-2?alt=media&token=1b3b6c8f-a4d6-470e-b267-05461f30fe7e alt=\"KakaoTalk_20211210_000337428_07.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_07.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_08.jpg-2?alt=media&token=c496f0fb-ed7c-4c53-aaac-08dbe11cd126 alt=\"KakaoTalk_20211210_000337428_08.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_08.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_000337428_09.jpg-2?alt=media&token=e7b42b02-6c12-4923-bf03-c4c5049ecbd8 alt=\"KakaoTalk_20211210_000337428_09.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_000337428_09.jpg\"></p>",
//     "files": ""
// })
//     db.collection("photo").doc("e7z7c9nD6Jro3QqeLP8t").set({
//     "author": "관리자",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F(%EC%82%AC)%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C.jpg?alt=media&token=90ca5bde-0d52-4089-9498-edc886bd1c3e\" alt=\"(사)대한생활체육회.jpg\"width=\"400\" height=\"400\" alt=\"(사)대한생활체육회.jpg\"></p>",
//     "title": "(사)대한생활체육회",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F(%EC%82%AC)%EB%8C%80%ED%95%9C%EC%83%9D%ED%99%9C%EC%B2%B4%EC%9C%A1%ED%9A%8C.jpg?alt=media&token=90ca5bde-0d52-4089-9498-edc886bd1c3e",
//     "files": "",
//     "createdAt": {
//         "seconds": 1634544175,
//         "nanoseconds": 888000000
//     },
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12"
// })
//     db.collection("photo").doc("eIAaA8zdR1LxRtmw0VAy").set({
//     "author": "관리자",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_20.jpg?alt=media&token=d3331ed1-fee6-4ec3-ad78-acd2c0b85baf",
//     "createdAt": {
//         "seconds": 1636436517,
//         "nanoseconds": 574000000
//     },
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_20.jpg?alt=media&token=d3331ed1-fee6-4ec3-ad78-acd2c0b85baf\" alt=\"KakaoTalk_20211107_132417404_20.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_20.jpg\"></p>"
// })
//     db.collection("photo").doc("eqheM0MAjpD0MJSmKWmm").set({
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562.jpg?alt=media&token=3ec74bd8-0c66-4dbd-ac6f-25e6b87ce6f2",
//     "files": "",
//     "author": "관리자1",
//     "title": "대한생활체육태권도협회 손천택회장 임명장&단체등록증 수여 전달식 2022.01.28",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562.jpg?alt=media&token=3ec74bd8-0c66-4dbd-ac6f-25e6b87ce6f2 alt=\"KakaoTalk_20220128_220909562.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562_01.jpg?alt=media&token=6ac77c5c-cc7d-40ca-90da-f5b38e892fd4 alt=\"KakaoTalk_20220128_220909562_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562_02.jpg?alt=media&token=08649970-3905-41bf-9626-0d31df0fc97d alt=\"KakaoTalk_20220128_220909562_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562_03.jpg?alt=media&token=c29ba409-6fa3-46bf-a6b6-2ee3e3425a31 alt=\"KakaoTalk_20220128_220909562_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562_04.jpg?alt=media&token=93d1b054-7a94-4909-b5ce-5bf4441b3de3 alt=\"KakaoTalk_20220128_220909562_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562_05.jpg?alt=media&token=59799e55-0626-4778-892a-b17b14abda07 alt=\"KakaoTalk_20220128_220909562_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220128_220909562_06.jpg?alt=media&token=61fc34d4-6d74-480f-9c77-07d3bb006c70 alt=\"KakaoTalk_20220128_220909562_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220128_220909562_06.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1643375736,
//         "nanoseconds": 52000000
//     }
// })
//     db.collection("photo").doc("fEXOCbSX8LpS83gdHBMK").set({
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_15.jpg?alt=media&token=f97135f5-f2e3-40fc-8de9-38f4c765c3da",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_15.jpg?alt=media&token=f97135f5-f2e3-40fc-8de9-38f4c765c3da\" alt=\"KakaoTalk_20211107_132417404_15.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_15.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_16.jpg?alt=media&token=36b22b05-1d00-4356-8feb-6e35f68c2fc2\" alt=\"KakaoTalk_20211107_132417404_16.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_16.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1636436431,
//         "nanoseconds": 272000000
//     }
// })
//     db.collection("photo").doc("fNiFkkf3x9mgbbkQHt08").set({
//     "createdAt": {
//         "seconds": 1643263030,
//         "nanoseconds": 321000000
//     },
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269_01.jpg-2?alt=media&amp;token=b894e9b6-aede-461a-afba-9d8b07a77a99 alt=\"KakaoTalk_20220126_201215269_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220126_201215269_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269_02.jpg-2?alt=media&amp;token=51890053-417f-4ce5-9b22-5ed78247c5ae alt=\"KakaoTalk_20220126_201215269_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220126_201215269_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269_03.jpg-2?alt=media&amp;token=47b64a05-6f44-4266-a1d5-94fb6741bf80 alt=\"KakaoTalk_20220126_201215269_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220126_201215269_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269_04.jpg-2?alt=media&amp;token=5d4efa11-70b5-4b50-bbd9-9ac109204242 alt=\"KakaoTalk_20220126_201215269_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220126_201215269_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269_05.jpg?alt=media&amp;token=8fc9fe48-c65d-4a8e-a76a-890f07811928 alt=\"KakaoTalk_20220126_201215269_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220126_201215269_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269.jpg?alt=media&amp;token=9711838c-6297-4321-921a-1bc9c08db8e8 alt=\"KakaoTalk_20220126_201215269.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220126_201215269.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220127_145501004.jpg?alt=media&token=3a4a6f61-1f3d-47fc-a993-baa27092c343\" alt=\"KakaoTalk_20220127_145501004.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220127_145501004.jpg\"></p>",
//     "title": "대한생활체육회 글로리 서울안과와 특별 제휴 체결 2022.01.26",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220126_201215269_01.jpg-2?alt=media&amp;token=b894e9b6-aede-461a-afba-9d8b07a77a9"
// })
//     // db.collection("photo").doc("h1xnLPWYyzBDyhgiCzxH").set()
//     db.collection("photo").doc("hAwGKASDdXT1QGfcfuf2").set({
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562.jpg?alt=media&token=a5fae828-78c8-4dfc-bc79-ebf2a8ecef1d",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211030_152011562.jpg?alt=media&token=a5fae828-78c8-4dfc-bc79-ebf2a8ecef1d\" alt=\"KakaoTalk_20211030_152011562.jpg\"width=\"500\" height=\"400\" alt=\"KakaoTalk_20211030_152011562.jpg\"></p>",
//     "createdAt": {
//         "seconds": 1635728805,
//         "nanoseconds": 306000000
//     },
//     "title": " ",
//     "files": ""
// })
//     db.collection("photo").doc("i8C5h0VQkJbRV2OLGm2n").set({
//     "createdAt": {
//         "seconds": 1648812463,
//         "nanoseconds": 695000000
//     },
//     "author": "관리자1",
//     "title": "대한생활체육회 김균식 총재 스포츠 아웃라인 NEWS 인터뷰 2022.03.24",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220324_174734886.jpg?alt=media&amp;token=821e3cde-af26-4732-9f17-a1d8a123ae3",
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220324_174734886.jpg?alt=media&amp;token=821e3cde-af26-4732-9f17-a1d8a123ae34 alt=\"KakaoTalk_20220324_174734886.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220324_174734886.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220324_174734886_01.jpg?alt=media&amp;token=260c4331-fd4f-438b-ba19-2593bc4d0537 alt=\"KakaoTalk_20220324_174734886_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220324_174734886_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220324_174734886_02.jpg?alt=media&amp;token=d1edcda5-1862-40f6-83c2-e0fcc995ef15 alt=\"KakaoTalk_20220324_174734886_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220324_174734886_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220324_174734886_03.jpg?alt=media&amp;token=786779a4-f61a-418b-8f2c-2c24f52a6464 alt=\"KakaoTalk_20220324_174734886_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220324_174734886_03.jpg\"></p>",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("lMu3PlBPZD87tmMS9UgB").set({
//     "createdAt": {
//         "seconds": 1636436097,
//         "nanoseconds": 107000000
//     },
//     "files": "",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_04.jpg?alt=media&token=33f4462b-d9fc-4f38-ba3e-3b03545625fa\" alt=\"KakaoTalk_20211107_132417404_04.jpg\"width=\"400\" height=\"320\" alt=\"KakaoTalk_20211107_132417404_04.jpg\"></p>",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "title": " ",
//     "author": "관리자",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_04.jpg?alt=media&token=33f4462b-d9fc-4f38-ba3e-3b03545625fa"
// })
//     db.collection("photo").doc("lNXu8u0PFZbLzz5UDunu").set({
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1648812405,
//         "nanoseconds": 942000000
//     },
//     "title": "대한생활체육회 대외협력단 임명장 전달식 2022.03.11",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220316_134037708.jpg?alt=media&amp;token=2ffd0f72-0838-4c75-bdbf-bb393cb9d5fc alt=\"KakaoTalk_20220316_134037708.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220316_134037708.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220316_134107809_04.jpg?alt=media&amp;token=ed4d685d-4845-46b8-bd24-643be64d2452 alt=\"KakaoTalk_20220316_134107809_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220316_134107809_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220316_134107809_05.jpg?alt=media&amp;token=88c771fd-18e7-4275-b1ad-29f7574e0438 alt=\"KakaoTalk_20220316_134107809_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220316_134107809_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220316_134107809_03.jpg?alt=media&amp;token=dbffc8a7-833f-4caa-8b4a-543b84703b0f alt=\"KakaoTalk_20220316_134107809_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220316_134107809_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202419726.jpg?alt=media&token=a8f7a8a9-cee2-4311-b8b9-d78bfd9cfefb\" alt=\"KakaoTalk_20220401_202419726.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202419726.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202419726_01.jpg?alt=media&token=ce5f0e7e-3230-4a62-b6e7-1f6aac2008eb\" alt=\"KakaoTalk_20220401_202419726_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202419726_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202419726_02.jpg?alt=media&token=75be6776-3e37-4b24-9df6-8c438f570d7d\" alt=\"KakaoTalk_20220401_202419726_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202419726_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202419726_03.jpg?alt=media&token=50feeee1-ae7e-4896-9139-979a6a3df07e\" alt=\"KakaoTalk_20220401_202419726_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202419726_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202419726_04.jpg?alt=media&token=deef65f6-1c5c-4039-9c7f-064553b7449c\" alt=\"KakaoTalk_20220401_202419726_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202419726_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220401_202419726_05.jpg?alt=media&token=1e8eaf64-8eb2-4ad4-9736-1339b71f7e0c\" alt=\"KakaoTalk_20220401_202419726_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220401_202419726_05.jpg\"></p>",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220316_134037708.jpg?alt=media&amp;token=2ffd0f72-0838-4c75-bdbf-bb393cb9d5f",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("o1M6MNgr8iCvSzfZnu0R").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_171851252_01.jpg?alt=media&token=4455356f-9a4c-458f-9cf2-e28a6f4ceb93 alt=\"KakaoTalk_20211210_171851252_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_171851252_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_171851252.jpg?alt=media&token=170a891a-9bd8-42dc-89ba-b4df7f5f5304 alt=\"KakaoTalk_20211210_171851252.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_171851252.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_171851252_02.jpg?alt=media&token=cbaddda3-cc87-4ffc-8eb3-7971beb5be1c alt=\"KakaoTalk_20211210_171851252_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_171851252_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_171851252_03.jpg?alt=media&token=919d89ff-f086-4357-ba5b-1e3aaf7d5f83 alt=\"KakaoTalk_20211210_171851252_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_171851252_03.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_171851252_01.jpg?alt=media&token=4455356f-9a4c-458f-9cf2-e28a6f4ceb93",
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "createdAt": {
//         "seconds": 1639124567,
//         "nanoseconds": 937000000
//     },
//     "title": "경기도 생활체육회 회장 최호열 임명장&단체등록증 전달식 2021.12.09"
// })
//     db.collection("photo").doc("oiz5KYvNEc5kA1eQVP9r").set({
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1646403769,
//         "nanoseconds": 190000000
//     },
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220304_231854731.jpg?alt=media&token=7f9a3511-026e-4dd3-a1c1-29cf0db15487 alt=\"KakaoTalk_20220304_231854731.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220304_231854731.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220304_231909159.jpg?alt=media&token=5e3d5401-aa44-48ce-a691-9a98242663a3 alt=\"KakaoTalk_20220304_231909159.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220304_231909159.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220304_231909159_01.jpg?alt=media&token=e8bb26e3-826a-46ff-97ea-2fea16bde412 alt=\"KakaoTalk_20220304_231909159_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220304_231909159_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220304_231909159_02.jpg?alt=media&token=b31e46d5-fea2-491c-afb9-87baafcca1aa alt=\"KakaoTalk_20220304_231909159_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220304_231909159_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220304_231909159_03.jpg?alt=media&token=eb9bf3fb-6ba4-4007-87c7-f5e786b783b0 alt=\"KakaoTalk_20220304_231909159_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220304_231909159_03.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220304_231854731.jpg?alt=media&token=7f9a3511-026e-4dd3-a1c1-29cf0db15487",
//     "title": "대한생활체육회 & 국제교류발전협회 교류 미팅 2022.03.04"
// })
//     db.collection("photo").doc("p9Ob4Fch55o4UTgA8FjO").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172553916_01.jpg?alt=media&amp;token=6350946d-ddd3-4858-b204-a8ae30dbadee alt=\"KakaoTalk_20211210_172553916_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172553916_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172553916_02.jpg?alt=media&amp;token=5ad05387-32e9-4076-ba1f-8d3e4bf1cc8d alt=\"KakaoTalk_20211210_172553916_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172553916_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172553916_03.jpg?alt=media&amp;token=c5917ec3-c547-47a2-9a9c-3b8c1ec0b4e3 alt=\"KakaoTalk_20211210_172553916_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172553916_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172314789_06.jpg-2?alt=media&amp;token=dc5e8dc9-1a1e-43b9-988a-f3d50eb23c1c alt=\"KakaoTalk_20211210_172314789_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211210_172314789_06.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211210_172553916_01.jpg?alt=media&amp;token=6350946d-ddd3-4858-b204-a8ae30dbade",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "title": "대한생활체육파크골프협회 회장 천성희 임명장&단체등록증 전달식 2021.12.09",
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1639124927,
//         "nanoseconds": 862000000
//     }
// })
//     db.collection("photo").doc("r3DLsmkA25CPSgdstAT1").set({
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220112_202129833.jpg?alt=media&token=4a9ebbc4-662f-42c2-af2e-27a535271a75",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220112_202129833.jpg?alt=media&token=4a9ebbc4-662f-42c2-af2e-27a535271a75 alt=\"KakaoTalk_20220112_202129833.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220112_202129833.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220112_202129833_01.jpg?alt=media&token=947b8f71-79b9-4381-80ba-008455a013a7 alt=\"KakaoTalk_20220112_202129833_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220112_202129833_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220112_202129833_02.jpg?alt=media&token=ff490eff-07ac-41c2-a7a4-daa4de1cb454 alt=\"KakaoTalk_20220112_202129833_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220112_202129833_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220112_202129833_03.jpg?alt=media&token=ecea6621-5411-4fba-899a-4af3ce41ecee alt=\"KakaoTalk_20220112_202129833_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220112_202129833_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220112_202129833_04.jpg?alt=media&token=7c92e7b9-052b-43b4-800e-d6b319e87b75 alt=\"KakaoTalk_20220112_202129833_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220112_202129833_04.jpg\"></p>",
//     "title": "대한생활체육회 스키 스노우보드협회 부회장 임명장 수여식 2022.01.12",
//     "createdAt": {
//         "seconds": 1641986769,
//         "nanoseconds": 615000000
//     }
// })
//     db.collection("photo").doc("rN7hKVxOeEAd2P31A3Nb").set({
//     "title": " ",
//     "files": "",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "author": "관리자",
//     "post": "<p class=\"ql-align-justify\"><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84.png?alt=media&token=7a0b03e4-9fff-40e5-8cc1-c0ebb06a0ca4\" alt=\"단체사진.png\"width=\"400\" height=\"400\" alt=\"단체사진.png\"></p><p class=\"ql-align-justify\">세계생활체육연맹&nbsp;총재&nbsp;장주호(사진우) / 대한생활체육회&nbsp;총재&nbsp;김균식(사진좌)</p><p>한국생활체육양궁연맹&nbsp;회장&nbsp;정미자(뒤&nbsp;우) / 대한생활체육회&nbsp;사무총장(뒤&nbsp;좌)</p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8B%A8%EC%B2%B4%EC%82%AC%EC%A7%84.png?alt=media&token=7a0b03e4-9fff-40e5-8cc1-c0ebb06a0ca4",
//     "createdAt": {
//         "seconds": 1634532539,
//         "nanoseconds": 589000000
//     }
// })
//     db.collection("photo").doc("rjI5pXGpegMA38XdfHNK").set({
//     "files": "KakaoTalk_20211127_193757686.jpgURLSTARTPOINThttps://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/files%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211127_193757686.jpg?alt=media&token=7e4852b5-4dc1-487d-9700-d04c11e5b31fURLENDPOINT",
//     "title": "대한생활체육회 축구협회 출범식 및 임명장 전달 2021.11.27",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211127_193757686_01.jpg?alt=media&amp;token=1ba66f8a-bdc2-48b0-8347-625988de43b",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "createdAt": {
//         "seconds": 1638010177,
//         "nanoseconds": 48000000
//     },
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211127_193757686_01.jpg?alt=media&amp;token=1ba66f8a-bdc2-48b0-8347-625988de43b0 alt=\"KakaoTalk_20211127_193757686_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211127_193757686_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211127_193757686_02.jpg?alt=media&amp;token=24ac2dd8-8004-4bd2-ac9f-93220fe96bfa alt=\"KakaoTalk_20211127_193757686_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211127_193757686_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211127_193757686_03.jpg?alt=media&amp;token=42d4476f-8df6-44d6-a185-70345e9664ec alt=\"KakaoTalk_20211127_193757686_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211127_193757686_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211127_193757686_04.jpg?alt=media&amp;token=56d47ce3-ec12-49c0-bdf8-deb114ea9e46 alt=\"KakaoTalk_20211127_193757686_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211127_193757686_04.jpg\"></p><p><br></p>",
//     "author": "관리자1"
// })
//     db.collection("photo").doc("tZogxQ4rgosMALFsITUK").set({
//     "createdAt": {
//         "seconds": 1634532880,
//         "nanoseconds": 31000000
//     },
//     "author": "관리자",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EC%83%81%EB%8B%B4%EC%B0%A8%20%EC%9D%B4%ED%98%9C%EC%A3%BC%EB%8B%98%20%EB%B0%A9%EB%AC%B8.png?alt=media&token=92d4e0e8-7d15-4e56-8d00-bb2f255bf6c7\" alt=\"상담차 이혜주님 방문.png\"width=\"400\" height=\"400\" alt=\"상담차 이혜주님 방문.png\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EC%83%81%EB%8B%B4%EC%B0%A8%20%EC%9D%B4%ED%98%9C%EC%A3%BC%EB%8B%98%20%EB%B0%A9%EB%AC%B82.png?alt=media&token=dc872122-3d05-4f3c-88dd-d8b43fecbcdb\" alt=\"상담차 이혜주님 방문2.png\"width=\"400\" height=\"400\" alt=\"상담차 이혜주님 방문2.png\"></p><p>대한생활체육회&nbsp;가입&nbsp;상담차&nbsp;사단법인&nbsp;한국프리테니스협회&nbsp;이사장&nbsp;이혜주님&nbsp;방문</p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EC%83%81%EB%8B%B4%EC%B0%A8%20%EC%9D%B4%ED%98%9C%EC%A3%BC%EB%8B%98%20%EB%B0%A9%EB%AC%B8.png?alt=media&token=92d4e0e8-7d15-4e56-8d00-bb2f255bf6c7",
//     "files": "",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "title": "대한생활체육회 가입 상담차 사단법인 한국프리테니스협회 이사장 이혜주님 방문"
// })
//     db.collection("photo").doc("tfgkDDiX19lxmbBrKO0e").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_14.jpg?alt=media&token=a003a7a2-2052-4c10-8fa8-77cc2815eb39\" alt=\"KakaoTalk_20211107_132417404_14.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_14.jpg\"></p>",
//     "author": "관리자",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_14.jpg?alt=media&token=a003a7a2-2052-4c10-8fa8-77cc2815eb39",
//     "title": " ",
//     "createdAt": {
//         "seconds": 1636436393,
//         "nanoseconds": 220000000
//     },
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "files": ""
// })
//     db.collection("photo").doc("uDPw4mW2dGdEZTQzj94K").set({
//     "author": "관리자1",
//     "createdAt": {
//         "seconds": 1641455476,
//         "nanoseconds": 537000000
//     },
//     "title": "대한생활체육회 스키스노우보드협회 임원 임명장 수여식 2022.01.06",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164010442.jpg?alt=media&amp;token=14869353-614e-4915-8d87-6e97f351b7fd alt=\"KakaoTalk_20220106_164010442.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220106_164010442.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164010442_01.jpg?alt=media&amp;token=27f14270-fd8e-47b4-a818-8782c7c66496 alt=\"KakaoTalk_20220106_164010442_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220106_164010442_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164010442_02.jpg?alt=media&amp;token=292deaef-9f9e-4c79-b6d7-3b86bd86e514 alt=\"KakaoTalk_20220106_164010442_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220106_164010442_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164010442_03.jpg?alt=media&amp;token=b4d8c1bf-c2b3-4da6-a8a1-520c5b1412d6 alt=\"KakaoTalk_20220106_164010442_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220106_164010442_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164010442_04.jpg?alt=media&amp;token=d7eeaf7e-912c-4982-9390-8fd8f691c18c alt=\"KakaoTalk_20220106_164010442_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220106_164010442_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164043810.jpg?alt=media&amp;token=8732d38d-d1c1-480a-9d52-f02804e58f81 alt=\"KakaoTalk_20220106_164043810.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220106_164043810.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220106_164010442.jpg?alt=media&amp;token=14869353-614e-4915-8d87-6e97f351b7f",
//     "files": "",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2"
// })
//     db.collection("photo").doc("uKsJsNiicfp5YL0szStB").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8C%80%EC%83%9D%EC%B2%B4%20%EB%B0%9C%EA%B8%B0%EC%9D%B8%EC%B4%9D%ED%9A%8C.jpg?alt=media&token=dc42f2cd-49c9-4532-8215-d8b5ee162182\" alt=\"대생체 발기인총회.jpg\"width=\"400\" height=\"300\" alt=\"대생체 발기인총회.jpg\"></p>",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2F%EB%8C%80%EC%83%9D%EC%B2%B4%20%EB%B0%9C%EA%B8%B0%EC%9D%B8%EC%B4%9D%ED%9A%8C.jpg?alt=media&token=dc42f2cd-49c9-4532-8215-d8b5ee162182",
//     "createdAt": {
//         "seconds": 1634543675,
//         "nanoseconds": 601000000
//     },
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "title": "대한생활체육회 발기인총회",
//     "author": "관리자"
// })
//     db.collection("photo").doc("xB6VyMtyknH2DdOaOEkI").set({
//     "files": "",
//     "createdAt": {
//         "seconds": 1636450298,
//         "nanoseconds": 973000000
//     },
//     "title": " ",
//     "author": "관리자",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_21.jpg-2?alt=media&token=9b3bd53d-4119-422b-90cc-bed99e490cdc",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_21.jpg-2?alt=media&token=9b3bd53d-4119-422b-90cc-bed99e490cdc\" alt=\"KakaoTalk_20211107_132417404_21.jpg\"width=\"400\" height=\"250\" alt=\"KakaoTalk_20211107_132417404_21.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_22.jpg?alt=media&token=9b07bcc0-fccf-4114-9a3b-52b79855973e\" alt=\"KakaoTalk_20211107_132417404_22.jpg\"width=\"400\" height=\"250\" alt=\"KakaoTalk_20211107_132417404_22.jpg\"></p>",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12"
// })
//     db.collection("photo").doc("xX1njDlZa6yHJGymaJP2").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220115_202246469.jpg?alt=media&token=343495a1-0166-4461-b66a-560bbec7048c alt=\"KakaoTalk_20220115_202246469.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220115_202246469.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220115_202246469_01.jpg?alt=media&token=b7c47e72-b1ce-4aba-a52d-5ad54fd6ceca alt=\"KakaoTalk_20220115_202246469_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220115_202246469_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220115_202246469_02.jpg?alt=media&token=e879f07e-a0fe-484f-8270-790fe3b4c955 alt=\"KakaoTalk_20220115_202246469_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220115_202246469_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220115_202246469_03.jpg?alt=media&token=4ca321a1-774e-45b7-a58c-70ccbb8da11e alt=\"KakaoTalk_20220115_202246469_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20220115_202246469_03.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20220115_202246469.jpg?alt=media&token=343495a1-0166-4461-b66a-560bbec7048c",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "createdAt": {
//         "seconds": 1642246136,
//         "nanoseconds": 708000000
//     },
//     "files": "",
//     "title": "대한생활체육회 스키 스노우보드 협회 임원 임명장 전달식 2022.01.15",
//     "author": "관리자1"
// })
//     db.collection("photo").doc("xg8XglgZR9gnVRdy7Lgk").set({
//     "title": "대한생활체육회 키즈협회장 임명장&단체등록증 전달식 2021.12.03",
//     "files": "",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191412779.jpg?alt=media&token=43ef71f8-120a-448b-b1cb-9a2fb8ab79bc",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "author": "관리자1",
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191412779.jpg?alt=media&token=43ef71f8-120a-448b-b1cb-9a2fb8ab79bc alt=\"KakaoTalk_20211203_191412779.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191412779.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191412779_01.jpg?alt=media&token=bbf52cc0-c572-41b2-b74a-05f7f8f1d7c3 alt=\"KakaoTalk_20211203_191412779_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191412779_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191412779_02.jpg?alt=media&token=6595211f-a0f7-4d60-a963-87e85cfba6eb alt=\"KakaoTalk_20211203_191412779_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191412779_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191412779_03.jpg?alt=media&token=3bde39a6-ca02-41fa-80fa-b63ef32c74cf alt=\"KakaoTalk_20211203_191412779_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191412779_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211203_191412779_04.jpg?alt=media&token=e2e637bc-ded3-4b7c-9863-89af23841f76 alt=\"KakaoTalk_20211203_191412779_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211203_191412779_04.jpg\"></p><p><br></p><p><br></p>",
//     "createdAt": {
//         "seconds": 1638526738,
//         "nanoseconds": 906000000
//     }
// })
//     db.collection("photo").doc("y3lyrZQQVz2ruv3P8CbD").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_08.jpg?alt=media&token=cd089c1e-925d-4b5a-b32a-32793e9ec27c\" alt=\"KakaoTalk_20211107_132417404_08.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_08.jpg\"></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_09.jpg?alt=media&token=456747f7-f434-44ad-a6f8-fe11c6777b8d\" alt=\"KakaoTalk_20211107_132417404_09.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211107_132417404_09.jpg\"></p>",
//     "title": " ",
//     "uid": "mlJOGr4vZMgXORU1DoG9VOFHjU12",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FmlJOGr4vZMgXORU1DoG9VOFHjU12%2FKakaoTalk_20211107_132417404_08.jpg?alt=media&token=cd089c1e-925d-4b5a-b32a-32793e9ec27c",
//     "createdAt": {
//         "seconds": 1636436225,
//         "nanoseconds": 595000000
//     },
//     "files": "",
//     "author": "관리자"
// })
//     db.collection("photo").doc("yy1eqD1KtGjERzytHprL").set({
//     "post": "<p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_07.jpg?alt=media&token=a4100d90-7844-4763-a306-12efe33b6c82 alt=\"KakaoTalk_20211224_110225161_07.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_07.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161.jpg?alt=media&token=7c4003f6-0e74-4d63-b914-50cbdd72b42a alt=\"KakaoTalk_20211224_110225161.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_01.jpg?alt=media&token=bd5daa2c-3df6-4342-b42b-72ee4a07d4cc alt=\"KakaoTalk_20211224_110225161_01.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_01.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_02.jpg?alt=media&token=f957353c-e2cc-485b-82b8-1d56da362c3a alt=\"KakaoTalk_20211224_110225161_02.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_02.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_03.jpg?alt=media&token=0e36412f-150d-4c2d-954c-3b27d5b97896 alt=\"KakaoTalk_20211224_110225161_03.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_03.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_04.jpg?alt=media&token=3552dbda-4a2e-4b58-9d29-f10a3ca04f23 alt=\"KakaoTalk_20211224_110225161_04.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_04.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_05.jpg?alt=media&token=8620b842-e9e7-4883-8500-5d799dc14217 alt=\"KakaoTalk_20211224_110225161_05.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_05.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_06.jpg?alt=media&token=40260b1c-d57a-4243-9dd9-7abe7ead4d6e alt=\"KakaoTalk_20211224_110225161_06.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_06.jpg\"></p><p><br></p><p><img src=\"https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_08.jpg?alt=media&token=ded03472-b882-45ad-a9bb-eb3e314e420c alt=\"KakaoTalk_20211224_110225161_08.jpg\"width=\"400\" height=\"300\" alt=\"KakaoTalk_20211224_110225161_08.jpg\"></p>",
//     "thumbnail": "https://firebasestorage.googleapis.com/v0/b/sports-asso-v2.appspot.com/o/images%2FIjZiqBcGbRSLAaFRtxQ1MM5GLEL2%2FKakaoTalk_20211224_110225161_07.jpg?alt=media&token=a4100d90-7844-4763-a306-12efe33b6c82",
//     "author": "관리자1",
//     "uid": "IjZiqBcGbRSLAaFRtxQ1MM5GLEL2",
//     "files": "",
//     "createdAt": {
//         "seconds": 1640311860,
//         "nanoseconds": 852000000
//     },
//     "title": "대한생활체육회 구로고대병원 건강검진협약체결 2021.12.24"
// })


    //데이터들을 createdAt에 따라 sort하고 번호추가하기 + 고정 boolean데이터 (fixed=true/false) + createdAt timestamp로 바꾸기
    // db.collection("photo").orderBy("createdAt").get().then((query) => {
    //   let count = 0;
    //   query.forEach((doc) => {
    //     count++;
    //     const date = new Date(doc.data().createdAt.seconds*1000)
    //     db.collection("photo").doc(doc.id).update({count: count, fixed: false, createdAt: date})
    //   })
    // })
    

    //photo 제목맨마지막마다 달려있는 날짜 지우고, 제목이 없을땐 - 로 표기
    // db.collection("photo").get().then((query) => {
    //   query.forEach((doc) => {
    //     if (doc.data().title.includes("2021")) {
    //       const res = doc.data().title.split("2021")
    //       db.collection('photo').doc(doc.id).update({title: res[0]})
    //     }
    //     else if (doc.data().title.includes("2022")) {
    //       const res = doc.data().title.split("2022")
    //       db.collection('photo').doc(doc.id).update({title: res[0]})
    //     }
    //     else if (doc.data().title === " ") {
    //       db.collection('photo').doc(doc.id).update({title: "-"})
    //     }
    //   })
    // })
    
  },[])
  return (
    <>
      
    </>
  )
}
export default fetchData;