import yt_icon from "../assets/youtube_icon.png";
import X_icon from "../assets/twitter_icon.png";
import insta_icon from "../assets/instagram_icon.png";
import fb_icon from "../assets/facebook_icon.png";

const Footer = () => {
    return(
        <div className="py-[30px] px-[4%] max-w-[1000px] my-0 mx-auto">
            {/* Footer Icons */}
            <div className="flex gap-5 my-[40px] mx-0">
                <img className="w-[30px] cursor-pointer" src={fb_icon} alt="" />
                <img className="w-[30px] cursor-pointer" src={insta_icon} alt="" />
                <img className="w-[30px] cursor-pointer" src={X_icon} alt="" />
                <img className="w-[30px] cursor-pointer" src={yt_icon} alt="" />
            </div>
            <ul className="grid md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-3 gap-4 mb-7 list-none  ">
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Git Cards</li>
                <li>Media Centre</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className="text-gray-600 text-sm">&copy; 1997-2024 Netflix, Inc </p>
        </div>
    );

}
export default Footer;