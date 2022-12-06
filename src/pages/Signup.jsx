import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'

import image from '../images/image.jpg'
import { FaArrowRight } from 'react-icons/fa'
// import Facebook from '../images/Facebook.svg'
import close from '../images/close.svg'
import facebook from '../images/facebook.png'
import google from '../images/google.png'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(email, password)
    signup(email, password)
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
            Sign up
          </h2>
          <p className="max-w-sm mb-5 font-sans font-light text-gray-600">
            Open a new account.
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
              sign up
            </button>

            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
