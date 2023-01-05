import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
	Autoplay,
	EffectCube,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination,
} from "swiper";

function CasinoHomeCarousel() {
	const [adviews, setAdviews] = useState([
		{
			id: 1,
			topic: "House of Barca",
			AdImage: "https://i.ytimg.com/vi/NgpQcGqMPX8/maxresdefault.jpg",
			AdInfo: "Bet on a big bash and win amazing prizes",
		},
		{
			id: 2,
			topic: "first deposit mega bonus",
			AdImage:
				"https://v2l.traincdn.com/default/img/bonusnew/Welcome-bonus-india_945x370.jpg",
			AdInfo: "welcome package upto $100",
		},
		{
			id: 3,
			topic: "amazing offer",
			AdImage:
				"https://v2l.traincdn.com/genfiles/cms/1/desktop/bonus/rules/1st/1st-in-slider.jpg",
			AdInfo: "dont wait , take action",
		},
		{
			id: 4,
			topic: "first deposit mega bonus",
			AdImage:
				"https://in.1xbet.com/genfiles/cms/1-285/desktop/ourPartners/partner/barcelona/barcelona-team2x.webp",
			AdInfo: "Bet on a big bash and win amazing prizes",
		},
		{
			id: 5,
			topic: "amazing offer",
			AdImage:
				"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
			AdInfo: "welcome package upto $100",
		},
	]);
	return (
		<div className=''>
			{/* {console.log()} */}
			<div className='sm:w-full md:w-full h-full   relative  '>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					longSwipes={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
					className=' !w-full !h-small2   '
				>
					{adviews.map((v, i) => {
						return (
							<SwiperSlide className=' !h-small2 !w-full '>
								<div className={` !w-full !h-full relative`}>
									<img src={v.AdImage} alt='' className='!w-full !h-full' />
									<div className='absolute top-0 right-0 left-0 bottom-0'>
										<div className='w-full h-full flex flex-col pl-14 justify-center space-y-4 text-white'>
											<div className='font-extrabold text-4xl capitalize'>
												{v.topic}
											</div>
											<div>{v.AdInfo}</div>
											<div>
												<button className='px-3 py-1 bg-lime-500'>
													Take action
												</button>
											</div>
										</div>
									</div>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default CasinoHomeCarousel;
