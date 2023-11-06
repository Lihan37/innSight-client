import banner1 from '../../../assets/banner1.jpg';
import banner2 from '../../../assets/banner2.jpg';

const SpecialOffers = () => {
    return (
        <div>
            <h2 className='text-4xl text-center font-semibold mt-10 mb-5 text-white'>Offers for our beloved customers</h2>

            <div className="carousel w-full h-[700px] relative mb-12">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={banner1} className="w-full h-full rounded-xl" style={{ opacity: 0.6 }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-4xl font-bold">Special Offer 1</h2>
                        <p className="text-xl font-semibold mb-4">Stay 3 nights, get 1 night free</p>
                        <button className="btn">Book Now</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={banner2} className="w-full h-full rounded-xl" style={{ opacity: 0.6 }} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h2 className="text-4xl font-bold">Special Offer 2</h2>
                        <p className="text-xl font-semibold mb-4">20% off on your stay</p>
                        <button className="btn">Get Discount</button>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffers;
