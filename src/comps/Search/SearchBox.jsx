import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(keyword)
    if (keyword.trim()) {
      // navigate(`/search/${keyword}`)
      navigate(`/search?keyword=${keyword}`)
      e.target.reset()
      setKeyword('')
    } else {
      navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <div className="p-2 mb-5 mt-5"></div>
      <input
        className="w-40 text-black border border-gray-300 rounded-l-md placeholder:font-sans placeholder:font-light"
        placeholder="Search..."
        required
        type="text"
        onChange={(e) => setKeyword(e.target.value)}
        value={keyword}
      />
      <button
        className=" 
        btn btn-ghost btn-sm rounded-btn mx-0 px-1"
      >
        <FaSearch className="ml-1" />
      </button>
    </form>
  )
}

// Button:

// btn btn-ghost btn-sm rounded-btn mx-0 px-1

// items-center justify-center rounded-r-md  bg-neutral font-bold text-white"

export default SearchBox

// w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150

{
  /* <form onSubmit={handleSubmit} className="flex mb-8 mt-8">
<input
  className="w-auto p-2 mb-8 mt-8 border border-gray-300 rounded-l-md placeholder:font-sans placeholder:font-light"
  placeholder="Search"
  required
  type="text"
  onChange={(e) => setKeyword(e.target.value)}
  value={keyword}
/>
<button
  className="relative w-auto mb-8 mt-8 p-6 
       items-center justify-center rounded-r-md  bg-cyan-700 font-bold text-white"
>
  Search
</button>
</form> */
}
