import { storage } from "src/firebase/firebase"

export const FileDelete = async (loc, fileName, uid) => {
  storage.ref(`${loc}/${uid}/${fileName}`).delete().then(function () {
    
  }).catch(function(e){console.log(e)})
}