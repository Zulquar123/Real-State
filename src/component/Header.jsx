import Navbar from "./Navbar";
import headerImg from "../assets/header_img.png"


export default function Header() {
  return (
    <div
      className=" min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: `url(${headerImg})` }}
      id="Header"
    >
          <Navbar />
          
          <div>
              <h2>Explore homes that fit your dreams</h2>
          </div>
    </div>
  );
}
