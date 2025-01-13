import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";
import { useEffect, useRef, useState } from "react";
import { logout } from "../firebase";

const dropDownItems = [
    {label: "Sign Out of Netflix", href: "#"},
];

const Navbar = () => {

    const navRef = useRef();
    useEffect(()=>{
        window.addEventListener('scroll', (handleScroll) => {
            if(window.scrollY >= 80) {
                navRef.current.classList.add('bg-black');
            }else {
                navRef.current.classList.remove('bg-black');
            }
        },[]);
    });

    const [hover,setHover] = useState(false);
    const hoverOn = () => {
        setHover(!hover);
    }
    return (
        <nav ref={navRef} className=" w-full pr-[6%]  m-0 pl-2 py-[20px] pt-4 flex justify-between fixed text-sm text-white bg-gradient-to-b from-black to-transparent bg-opacity-[0.7]  z-[1] ">
            <div className="flex items-center gap-12">
                <img className="w-[90px]" src={logo} alt="" />
                <ul className="list-none gap-5 lg:flex md:flex hidden ">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">TV Shows</li>
                    <li className="cursor-pointer">Movies</li>
                    <li className="cursor-pointer">New & Popular</li>
                    <li className="cursor-pointer">My List</li>
                    <li className="cursor-pointer">Browse by Languages</li>
                </ul>
            </div>
            <div className="flex gap-5 items-center pr-0 ">
                <img  className="w-5 cursor-pointer"  src={search_icon} alt="" />
                <p className="text-sm cursor-pointer">Children</p>
                <img className="w-5  cursor-pointer" src={bell_icon} alt="" />
                <div className="flex gap-5 items-center">
                    <img className="flex items-center gap-2 cursor-pointer " onMouseEnter={hoverOn} onMouseLeave={() => {
                        setHover(false);
                      }}  src={profile_img} alt="" />
                    <img className="cursor-pointer" src={caret_icon}  onMouseEnter={hoverOn}  alt="" />
                    {hover &&  (
                        <div className="absolute top-full right-10 w-max py-4  px-5 bg-neutral-800 rounded-sm underline z-[1]">
                        {dropDownItems.map((items) => (
                            <ul key={items.id}>
                                <li className="cursor-pointer" onClick={()=>{logout()}} key={items.id}>{items.label}</li>
                            </ul>
                        ))}
                    </div>
                    )}
                </div>
            </div>
            
        </nav>
    );
}

export default Navbar;