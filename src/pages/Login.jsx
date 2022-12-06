import { useLogin } from '../hooks/useLogin'
import { useState } from 'react'

import image from '../images/image.jpg'
import { FaArrowRight } from 'react-icons/fa'
// import Facebook from '../images/Facebook.svg'
import close from '../images/close.svg'
import facebook from '../images/facebook.png'
import google from '../images/google.png'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    login(email, password)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      <div className="relative flex flex-col justify-between m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left Side */}
        <div className="p-6 md:p-20">
          {/* Top Content */}
          <h2
            className="mb-5 
        text-4xl font-bold"
          >
            Log In
          </h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account.
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="w-full p-6 
              mb-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your email address"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <input
              className="w-full p-6 mb-2 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
              placeholder="Enter your password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <button className='"w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150'>
              log in
            </button>

            {error && <p>{error}</p>}
          </form>

          {/* Middle Content */}

          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
            <div className="font-thin text-cyan-700 mr-3">Forgot Password</div>
            <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg border transition hover:-translate-y-0.5 duration-150">
              <span>Next</span>
              <FaArrowRight />
            </button>
            {/* Border */}
          </div>
          {/* Border */}
          <div className="mt-12 border-b border-b-gray-300"></div>
          {/* Bottom Content */}
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or log in with
          </p>
          {/* Bottom Buttons Container */}
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-1 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src={facebook} alt="" className="w-6" />
              <span className="font-thin">Facebook</span>
            </button>
            <button className="flex items-center justify-center py-2 space-x-1 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <img src={google} alt="" className="w-5" />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>
        {/* Right Side */}
        <img src={image} alt="" className="w-[430px] hidden md:block" />
        {/* Close Button */}
        <div className="group absolute -top-5 right-4 flex items-center justify-center w-7 h-7 bg-gray-200 rounded-full md:bg-white md:top-4 hover:cursor-pointer hover:-translate-y-0.5 transition duration-150">
          <img src={close} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Login
