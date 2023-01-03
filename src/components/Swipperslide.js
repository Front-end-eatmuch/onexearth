import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
	EffectCube,
	Keyboard,
	Mousewheel,
	Navigation,
	Pagination,
} from "swiper";

function Swipperslide() {
	const [adviews, setAdviews] = useState([
		{
			id: 1,
			AdImage: "https://i.ytimg.com/vi/NgpQcGqMPX8/maxresdefault.jpg",
			AdInfo: "",
		},
		{
			id: 2,
			AdImage:
				"https://v2l.traincdn.com/default/img/bonusnew/Welcome-bonus-india_945x370.jpg",
			AdInfo: "",
		},
		{
			id: 3,
			AdImage:
				"https://v2l.traincdn.com/genfiles/cms/1/desktop/bonus/rules/1st/1st-in-slider.jpg",
			AdInfo: "",
		},
		{
			id: 4,
			AdImage:
				"https://in.1xbet.com/genfiles/cms/1-285/desktop/ourPartners/partner/barcelona/barcelona-team2x.webp",
			AdInfo: "",
		},
		{
			id: 5,
			AdImage:
				"https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2369&q=80",
			AdInfo: "",
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
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className=' !w-full !h-small2   '
				>
					{adviews.map((v, i) => {
						return (
							<SwiperSlide className=' !h-small2 !w-full lg:!h-small2 lg:!w-big'>
								<div className={` !w-full md:!w-big !h-full`}>
									<img src={v.AdImage} alt='' className='!w-full !h-full' />
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default Swipperslide;
