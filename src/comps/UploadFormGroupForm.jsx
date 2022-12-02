import { useState } from 'react'
import ProgressBarGroup from './ProgressBarGroup'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
// import { GrPowerReset } from 'react-icons/gr'
// import { db } from '../firebase/config'
// import { collection } from 'firebase/firestore'
import image from '../images/image.jpg'

// import { useFirestoreLastItem } from '../hooks/useFirestoreLastItem'
import reset from '../images/reset.svg'

const UploadFormGroupForm = () => {
  const [selected, setSelected] = useState(null)
  const [imageTarget, setImageTarget] = useState(null)
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const [Description, setDescription] = useState('')
  const [Location, setLocation] = useState('')

  const types = ['image/png', 'image/jpeg', 'image/heic', 'image/jpg']

  // For showing last image:

  // const { docs } = useFirestoreLastItem('images')
  // const [selectedImg, setSelectedImg] = useState(null)

  // const changeHandler = (e) => {
  //   // console.log('changed')
  //   let selected = e.target.files[0]
  //   // console.log(selected)
  //   if (selected && types.includes(selected.type)) {
  //     setFile(selected)
  //     setError('')
  //   } else {
  //     setFile(null)
  //     setError('Select a valid file type (png, jpeg, jpg')
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(Description)
    // console.log(Location)
    // setDescription(Description)
    // setLocation(Location)
    if (selected && types.includes(selected.type)) {
      setFile(selected)
      setError('')
      console.log(selected)
      setImageTarget(URL.createObjectURL(selected))
      // image from Firebase:
      // setSelectedImg(docs[0].url)
    } else {
      setFile(null)
      setError('Select a valid file type (png, jpeg, jpg')
    }
  }

  const resetHandler = (e) => {
    setSelected(null)
    setImageTarget(null)
    setFile(null)
    setError(null)
    setDescription('')
    setLocation('')
    window.location.reload()
    // console.log(Location)
  }

  return (
    <>
      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left Side */}
        <div className="p-6 md:p-20">
          <form onSubmit={handleSubmit}>
            {/* <input className="pb-3 mb-3" type="file" onChange={changeHandler} /> */}
            <input
              className="pb-3 mb-3"
              type="file"
              onChange={(e) => setSelected(e.target.files[0])}
            />

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
            {/* Upload & Reset Buttons */}
            <div className="flex flex-row justify-between">
              <button className="btn">Upload Foto</button>
              <button className="btn" type="button" onClick={resetHandler}>
                <img
                  src={reset}
                  alt="reset"
                  className="mr-2"
                  onClick={resetHandler}
                  // onClick={(e) => resetHandler}
                />
                Reset Form
              </button>
            </div>

            {/* <button className="btn">Upload Foto</button> */}
          </form>

          <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
            {file && (
              <ProgressBarGroup
                file={file}
                Description={Description}
                Location={Location}
                setFile={setFile}
                // docs={docs}
                // selectedImg={selectedImg}
                // setSelectedImg={setSelectedImg}
              />
            )}
          </div>

          <div className="container py-10 px-10 mx-0 min-w-full grid place-items-center">
            <Link to="/" className="btn btn-primary btn-lg">
              <FaHome className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Right Side */}

        {selected ? (
          <img src={imageTarget} alt="" className="w-[430px] hidden md:block" />
        ) : (
          <img src={image} alt="" className="w-[430px] hidden md:block" />
        )}

        {/* {selectedImg ? (
          <img src={selectedImg} alt="" className="w-[430px] hidden md:block" />
        ) : (
          <img src={image} alt="" className="w-[430px] hidden md:block" />
        )} */}
        {/* <img src={image} alt="" className="w-[430px] hidden md:block" /> */}
      </div>
    </>
  )
}

export default UploadFormGroupForm
