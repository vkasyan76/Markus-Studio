import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useStorageGroup from '../hooks/useStorageGroup'

const ProgressBarGroup = ({
  file,
  setFile,
  Description,
  Location,
  selectedImg,
  setSelectedImg,
  docs,
}) => {
  const { url, progress } = useStorageGroup(
    file,
    Description,
    Location,
    selectedImg,
  )
  // console.log(progress, url)

  useEffect(() => {
    if (url) {
      setFile(null)
      // Selected Image:
      // setSelectedImg(docs[0].url)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return (
    // <div className="progress-bar" style={{ width: progress + '%' }}></div>

    // animate progress bar:
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBarGroup
