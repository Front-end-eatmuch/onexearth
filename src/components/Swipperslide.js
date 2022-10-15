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
				"https://cdn.pixabay.com/photo/2016/08/13/11/57/stadium-1590576_1280.jpg",
			AdInfo: "",
		},
		{
			id: 2,
			AdImage:
				"https://cdn.pixabay.com/photo/2014/10/22/18/04/man-498473_1280.jpg",
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
				"https://cdn.pixabay.com/photo/2013/03/21/15/52/basketball-95607_1280.jpg",
			AdInfo: "",
		},
	]);
	return (
		<div className=''>
			{/* {console.log()} */}
			<div className='sm:w-small1 md:w-big  bg-white  relative px-5 '>
				<Swiper
					cssMode={true}
					navigation={true}
					pagination={true}
					mousewheel={true}
					keyboard={true}
					modules={[Navigation, Pagination, Mousewheel, Keyboard]}
					className=' !w-full !h-96  rounded-3xl '
				>
					{adviews.map((v, i) => {
						return (
							<SwiperSlide className=' !h-96 !w-full lg:!h-96 lg:!w-big'>
								<div className={` !w-full md:!w-big`}>
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
