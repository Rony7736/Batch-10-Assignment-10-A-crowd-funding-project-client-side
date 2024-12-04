import slider from "../assets/slider1.jpg"
import slider2 from "../assets/slider2.jpg"
import slider3 from "../assets/slider3.jpg"
import slider4 from "../assets/slider4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <h2 className="absolute text-[#FFBE46] text-2xl font-bold border-2 rounded-lg bg-slate-700 p-3 bottom-4 left-[500px]">Funding for Apps development</h2>
                <img src={slider} className="w-full lg:h-[650px] rounded-b-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <h2 className="absolute text-[#FFBE46] text-2xl font-bold border-2 rounded-lg bg-slate-600 p-3 bottom-4 left-[500px]">Funding for Medical Equipments</h2>
                <img src={slider2} className="w-full lg:h-[650px] rounded-b-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <h2 className="absolute text-[#FFBE46] text-2xl font-bold border-2 rounded-lg bg-slate-700 p-3 bottom-4 left-[550px]">Funding for donate Poor People</h2>
                <img src={slider3} className="w-full lg:h-[650px] rounded-b-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <h2 className="absolute text-[#FFBE46] text-2xl font-bold border-2 rounded-lg bg-slate-700 p-3 bottom-4 left-[550px]">Funding for Making Movie</h2>
                <img src={slider4} className="w-full lg:h-[650px] rounded-b-xl" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;