import assets from "../assets/logo.svg"

export default function Navbar() {
  return (
      <div className="absolute top-0 left-0  w-full z-10 ">

          <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
              <img src={assets} alt="" /> 
              <ul className="hidden md:flex gap-7 text-white">
                  <a href="#header" className="cursor-pointer hover:text-gray-500">Home</a>
                  <a href="#header" className="cursor-pointer hover:text-gray-500">About</a>
                  <a href="#header" className="cursor-pointer hover:text-gray-500">Project</a>
                  <a href="#header" className="cursor-pointer hover:text-gray-500">Testimonials</a>
              </ul>
              <button className="hidden md:block bg-white text-black px-8 py-2 rounded-full">Sign Up</button>
          </div>  
          
        </div>
  )
}
