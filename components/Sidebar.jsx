import Image from "next/image";
import Link from "next/link";
import {
  FaTh,
  FaUser,
  FaHeart,
  FaUsers,
  FaNewspaper,
  FaEye,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className="">
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex transform translate-x-0 transition-transform duration-300"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="h-full  bg-white absolute shadow-lg p-6 w-64 transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside sidebar
          >
            <div className="flex flex-col items-center">
              <Image
                src="/Face2.png"
                alt="User Profile"
                className="rounded-full w-20 h-20 mb-3"
                width={500}
                height={500}
              />
              <h2 className="text-lg font-semibold">Temiloluwa</h2>
            </div>

            <nav className="mt-6 text-[12px] text-[#000000] px-4">
              <ul className="space-y-4">
                <Link
                  href="/"
                  className="flex items-center  space-x-3 text-white bg-red-500 px-4 py-2 rounded-lg"
                >
                  <Image
                    src="/Icon1.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>Dashboard</span>
                </Link>
                <Link
                  href="Profile"
                  className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <Image
                    src="/Icon2.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>My Profile</span>
                </Link>
                <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Image
                    src="/Icon3.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>Favorites</span>
                </li>
                <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Image
                    src="/Icon4.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>My Mutuals</span>
                </li>
                <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Image
                    src="/Icon5.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>My Subscribed</span>
                </li>
                <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Image
                    src="/Icon6.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>Interested in me</span>
                </li>
                <li className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Image
                    src="/Icon7.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>Settings</span>
                </li>
                <li className="flex items-center space-x-3 px-4 py-2 text-[#000000] hover:bg-gray-100 rounded-lg cursor-pointer">
                  <Image
                    src="/Icon8.png"
                    className="h-[20px] w-[20px]"
                    height={100}
                    width={100}
                  />
                  <span>Logout</span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
