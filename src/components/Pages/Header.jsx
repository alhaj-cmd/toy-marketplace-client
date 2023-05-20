import education from '../../assets/edu1.avif';
import slide1 from '../../assets/slide-1.avif';
import slide2 from '../../assets/slide-2.avif';
import slide3 from '../../assets/slide-3.avif';
import About from './About';
import AboutUs from './AboutUs';
import Gellary from './Gellary';
import Progress from './Progress';
import Tabex from './Tabex';


const Header = () => {
    return (
        <div className='px-2'>
            <div className="carousel my-6 w-full">
                <div id="slide1" className="carousel-item  relative w-full">
                    <img src={education} className=" w-full" />
                    <div className="absolute flex justify-between sm:mt-4 transform -translate-y-1/3 left-5 right-5 top-1/2">

                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <div className='text-gray-300 bg-opacity-70  font-bold'>
                            <h1 className="mb-4 ">Hello <span className='text-4xl text-orange-500'>Science Kits</span></h1>
                            <p>Find Every Think for your Educational and Learning Toys</p>
                            <button></button>
                        </div>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <div className='text-gray-300 bg-opacity-60 font-bold'>
                            <h1 className=" text-2xl ">Hello <span className='text-4xl text-orange-500'>math learning toys</span></h1>
                            <p>Find Every Think for your Educational and Learning Toys</p>
                            <button></button>
                        </div>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <div className='text-gray-300 bg-opacity-60 font-bold'>
                            <h1 className=" text-2xl ">Hello <span className='text-4xl text-orange-500'>engineering kits</span></h1>
                            <p>Find Every Think for your Educational and Learning Toys</p>
                            <button></button>
                        </div>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/3 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <div className='text-gray-300 bg-opacity-60 font-bold'>
                            <h1 className=" text-2xl ">Hello <span className='text-4xl text-orange-500'>math learning toys</span></h1>
                            <p>Find Every Think for your Educational and Learning Toys</p>
                            <button></button>
                        </div>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
          
            <div>
                <Gellary></Gellary>
            </div>
            <div>
                <Tabex></Tabex>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <Progress></Progress>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
        </div>
    );
};

export default Header;