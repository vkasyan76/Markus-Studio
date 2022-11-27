import { useState } from 'react'
import ProgressBar from './ProgressBar'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg', 'image/heic', 'image/jpg']

  const changeHandler = (e) => {
    // console.log('changed')
    let selected = e.target.files[0]
    // console.log(selected)
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
    } else {
      setFile(null)
      setError('Select a valid file type (png, jpeg, jpg')
    }
  }

  return (
    <>
      {' '}
      <form>
        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
      <Link to="/" className="btn btn-primary btn-lg">
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </>
  )
}

export default UploadForm
