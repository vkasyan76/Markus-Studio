import { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)
  console.log(progress, url)

  useEffect(() => {
    if (url) {
      setFile(null)
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url])

  return <div className="progress-bar" style={{ width: progress + '%' }}></div>
}

export default ProgressBar
