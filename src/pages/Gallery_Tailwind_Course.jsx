import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

import image1 from '../images/image1.jpg'
import bookmark from '../images/bookmark.svg'

const Gallery = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      {/* Card Container */}
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* Menue ontainer */}
        <div className="flex flex-col items items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* Menue items */}
          <div className="group">
            <Link to="/">Vector</Link>
            {/* border will show only on group hover. otherwise opacity = 0 */}
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link to="#">Illustrations</Link>
            {/* border will show only on group hover. otherwise opacity = 0 */}
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link to="#">Images</Link>
            {/* border will show only on group hover. otherwise opacity = 0 */}
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
          <div className="group">
            <Link to="#">Icons</Link>
            {/* border will show only on group hover. otherwise opacity = 0 */}
            <div className="mx-2 mt-2 duration-500 border-b-2 opacity-0 border-black group-hover:opacity-100"></div>
          </div>
        </div>
        {/* Search Container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* Input & SVG Container */}
          <div className="flex justify-between border-b">
            <input
              type="text"
              className="ml-6 bordernone md:w-80 placeholder:font-thin focus:outline-none"
              placeholder="Search"
            />
            <button>
              <FaSearch className="w-8 text-gray-300 duration-200 hover:scale-110" />
            </button>
          </div>
          {/* Upload Button */}
          <button className="py-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl durtion-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>
        {/* Gallery Container */}

        <div className="grid gap-4 md:grid-cols-3">
          {/* Image 1 */}
          <div className="relative group">
            <img src={image1} alt="" className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract Painting</p>
                  <p className="text-xs">245 likes -35 shares</p>
                </div>
                <div className="flex items-center">
                  <img src={bookmark} alt="bookmark" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
