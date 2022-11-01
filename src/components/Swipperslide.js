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
			AdImage:
				"https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
			AdInfo: "",
		},
		{
			id: 2,
			AdImage:
				"https://images.unsplash.com/photo-1667238158829-880e8c3a89c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3264&q=80",
			AdInfo: "",
		},
		{
			id: 3,
			AdImage:
				"https://cdn.pixabay.com/photo/2016/12/31/16/52/dart-1943313_1280.jpg",
			AdInfo: "",
		},
		{
			id: 4,
			AdImage:
				"https://cdn.pixabay.com/photo/2021/02/01/20/16/yachts-5971866_1280.jpg",
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
			<div className='sm:w-small1 md:w-big   relative px-5 '>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					longSwipes={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className=' !w-full !h-96  rounded-3xl '
				>
					{adviews.map((v, i) => {
						return (
							<SwiperSlide className=' !h-96 !w-full lg:!h-96 lg:!w-big'>
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
