import { useEffect } from 'react'
import { motion } from 'framer-motion'
import useStorageGroup from '../hooks/useStorageGroup'

const ProgressBarGroup = ({ file, setFile, Event, Location }) => {
  const { url, progress } = useStorageGroup(file, Event, Location)
  // console.log(progress, url)

  useEffect(() => {
    if (url) {
      setFile(null)
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
