import Navbar from "../../components/Navbar";
import hero_banner  from "../../assets/hero_banner.jpg";
import hero_title  from "../../assets/hero_title.png";
import play_icon  from "../../assets/Play_icon.png";
import info_icon  from "../../assets/info_icon.png";
import TitleCard from "../../components/TitleCard";
import Footer from "../../components/Footer";

const Home  = () => {
    return (
        <div className="home ">
            <Navbar />
            <div className="relative">
                <img className="w-full [mask-image:linear-gradient(to_right,transparent,#000_75%)]" src={hero_banner} />
                <div className="absolute w-full pl-[6%] bottom-0">
                    <img className="w-[90%]  max-w-[420px] mb-[30px] md:w-[50%] " src={hero_title} />
                    <p className="max-w-[700px] text-sm  mb-[20px]">Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest</p>
                    <div className="flex gap-2 mb-12">
                        <button className="inline-flex text-black  items-center py-4 px-5 gap-2 text-sm bg-white rounded-md hover:bg-[#ffffffbf] "><img src={play_icon} className=" w-6 " alt="" />Play</button>
                        <button className="inline-flex text-white  items-center py-4 px-5 gap-2 text-sm bg-[#6d6d6eb3] rounded-md hover:bg-[#6d6d6e66]">
                            <img src={info_icon} alt="" className="w-6" />More Info
                        </button>
                    </div>
                </div>
                
            </div>
            <TitleCard />
            {/* Extra Cards */}
            <div>
                <TitleCard title={"Blockbuster Movies"} category={"top_rated"} />
                <TitleCard title={"Only on Netflix"} category={"popular"}/>
                <TitleCard title={"Upcoming"} category={"upcoming"}/>
                <TitleCard title={"Top Picks for You"} category={"now_playing"} />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
