import image from '../images/image.jpg'

const Profile = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-rose-50">
      {/* Card Container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
        {/* Left Side */}
        <div className="p-6 md:p-20">
          {/* Top Content */}
          <h2 className="font-mono mb-5 text-4xl font-bold">Log In</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600">
            Log in to your account.
          </p>
          <input
            type="text"
            className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email address"
          />
        </div>

        {/* Right Side */}
        <img src={image} alt="" className="w-[430px] hidden md:block" />
      </div>
    </div>
  )
}

export default Profile
