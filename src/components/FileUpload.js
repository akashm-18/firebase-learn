import React, { useState } from 'react'
import { storage } from '../config/firebase'
import { ref , uploadBytes } from 'firebase/storage'

const FileUpload = () => {
    const [file , setFile] = useState(null)

    const uploadFile = async () => {
        if (!file) return ;
        const filesFolderRef = ref (storage , `projectFiles/${file.name}`)
        try {
            await uploadBytes (filesFolderRef , file)
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <div>
      <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={uploadFile} >Upload File</button>
    </div>
  )
}

export default FileUpload
