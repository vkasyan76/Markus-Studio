import { useState } from 'react'
import ProgressBarGroup from './ProgressBarGroup'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import { db } from '../firebase/config'
import { collection, addDoc } from 'firebase/firestore'

const UploadFormGroup = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const [Description, setDescription] = useState('')
  const [Location, setLocation] = useState('')

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

  const handleSubmit = async (e) => {
    const ref = collection(db, 'images')
    e.preventDefault()
    console.log(Description)
    console.log(Location)
    // await addDoc(ref, {
    //   event: setNewEvent,
    //   location: setNewLocation,
    // })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-6 mb-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder="Description"
          required
          onChange={(e) => setDescription(e.target.value)}
          value={Description}
        />

        <input
          type="text"
          className="w-full p-6 mb-3 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
          placeholder="Location"
          required
          onChange={(e) => setLocation(e.target.value)}
          value={Location}
        />

        <input type="file" onChange={changeHandler} />
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && (
            <ProgressBarGroup
              file={file}
              Description={Description}
              Location={Location}
              setFile={setFile}
            />
          )}
        </div>
        <button className="btn">Add</button>
      </form>
      <Link to="/" className="btn btn-primary btn-lg">
        <FaHome className="mr-2" />
        Back to Home
      </Link>
    </>
  )
}

export default UploadFormGroup
