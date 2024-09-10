import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';

function HeroSection () {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide>
                    <div
                        className="hero min-h-screen mt-6"
                        style={{
                            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-5xl">
                                <div className="mb-5 text-7xl font-bold">Bangladesh Hotel Management & Tourism Training Institute</div>
                                <button className="btn btn-error">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen mt-6"
                        style={{
                            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-5xl">
                                <div className="mb-5 text-7xl font-bold">Bangladesh Hotel Management & Tourism Training Institute</div>
                                <button className="btn btn-error">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div
                        className="hero min-h-screen mt-6"
                        style={{
                            backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                        }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-neutral-content text-center">
                            <div className="max-w-5xl">
                                <div className="mb-5 text-7xl font-bold">Bangladesh Hotel Management & Tourism Training Institute</div>
                                <button className="btn btn-error">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
             </Swiper>
            </>
    )
}

export default HeroSection;