import React, { useContext, useState } from "react";
import "./Nav.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "../Utilities/Button";
import swal from "sweetalert";
import { AuthContext } from "../../Context/Context";

const NewNavBar = () => {
  const { user, logOut } = useContext(AuthContext)
  const navigate = useNavigate()
  

  const handleLogout = () => {
    logOut()
      .then(() => {
        user.email ? swal("Log out successful") : swal("Please Sign in");
        navigate('/')
      })
      .catch((error) => {

      })

  }


  const links = [
    { name: "Home", link: "/home" },
    { name: "Courses", link: "/courses" },
    { name: "Blog", link: "/blog" },
    { name: "FAQs", link: "/faqs" },
  ];
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={
        nav
          ? "newNav active  w-full fixed  left-0"
          : "newNav w-full fixed  left-0"
      }
    >
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <Link to='/'>
          <span className="text-3xl text-orange-600 mr-1 pt-2">
          <ion-icon name="school"></ion-icon>
          </span>
          <span className="mx-2 text-orange-400">PC </span> Academy</Link>
        </div>
        
        <div
          onClick={() => setOpen(!open)}
          className="text-4xl absolute right-8 top-3 cursor-pointer md:hidden text-orange-500"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`md:flex items-center md:items-center md:pb-0 pb-6 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:bg-transparent bg-orange-100 md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-500px]"
            } `}
        >
          {links.map((link) => {
            return (
              <li
                key={link.name}
                className="md:ml-8 md:my-0 my-4 text-xl font-semibold "
              >
                <NavLink
                  to={link.link}
                  className="text-gray-800 hover:text-gray-400 duration-500"
                >
                  {link.name}
                </NavLink>
              </li>
            );
          })}
          <div className="md:flex items-center justify-center">
            <div className="mx-3 text-2xl pt-1 ">
              {
                user ? <img
                  src={user?.photoURL}
                  className="profile-image md:ml-3 ml-0 md:mb-0 mb-3"
                  alt="" title={user?.displayName} /> : <ion-icon name="person-sharp" title=""></ion-icon>
                  
              }
            </div>
            <div>
              {
                user ? <Link onClick={handleLogout} ><Button>Log out</Button></Link> :
                  <Link to='/login'><Button>Sign in</Button></Link>
              }


            </div>
            <div className="md:ml-2 ml-0 md:mt-0 mt-3">
              <label for="Toggle1" className="inline-flex items-center cursor-pointer dark:text-orange-900">
                <span><ion-icon name="sunny-outline"></ion-icon></span>
                <span className="relative">
                  <input id="Toggle1" type="checkbox" className="hidden peer" />
                  <div className="w-10 h-6 rounded-full shadow-inner dark:bg-gray-300 peer-checked:dark:bg-gray-700"></div>
                  <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-orange-500"></div>
                </span>
                <span className="text-gray-900"><ion-icon  name="moon"></ion-icon></span>
              </label>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NewNavBar;
