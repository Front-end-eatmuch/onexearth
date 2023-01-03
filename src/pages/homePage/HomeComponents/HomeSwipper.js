import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

function HomeSwipper() {
	const [butter, setButter] = useState(false);
	const [highlight, setHighlight] = useState([
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
		{
			Teamone: "realmadrid",
			TeamoneScore: 1,
			TeamTwo: "Arsenal",
			TeamtwoScore: 5,
		},
	]);
	const [swiperRef, setSwiperRef] = useState(null);
	const navigationPrevRef9 = React.useRef(null);
	const navigationNextRef9 = React.useRef(null);

	return (
		<div
			className={`w-full h-full  relative hover  `}
			onMouseEnter={() => setButter(!butter)}
			onMouseLeave={() => setButter(!butter)}
		>
			<div className='w-full flex justify-between z-30 absolute px-5 top-14'>
				<button
					id='custom_next'
					className={`py-1 px-1 bg-gray-200  rounded-full transform duration-500 ${
						butter ? "flex duration-500" : "hidden"
					}`}
					ref={navigationNextRef9}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class={`w-4 h-4 `}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
				</button>
				<button
					id='custom_prev'
					className={`py-1 px-1 bg-gray-200 rounded-full transform duration-500 ${
						butter ? "flex duration-500" : "hidden"
					}`}
					ref={navigationPrevRef9}
				>
					{" "}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-4 h-4'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</button>
			</div>
			<Swiper
				slidesPerView={1}
				spaceBetween={5}
				pagination={{
					clickable: true,
				}}
				navigation={{
					prevEl: navigationNextRef9.current,
					nextEl: navigationPrevRef9.current,
				}}
				modules={[Pagination, Navigation, A11y, Autoplay]}
				autoplay={{
					delay: 2500,
					disableOnInteraction: false,
				}}
				className={` h-full   w-full `}
			>
				{highlight.map((f) => {
					return (
						<SwiperSlide className='w-96 h-full bg-[#225B8E] px-2 py-5 rounded-lg'>
							<div className='w-full flex flex-col justify-center h-full space-y-4'>
								<div className='flex w-full justify-between text-white'>
									<div>
										<div className='text-start'>
											<i class='fa-solid fa-volleyball text-xl'></i>
										</div>
										<div className='font-light  text-xs'>{f.Teamone}</div>
									</div>
									<div>
										<div className='text-end'>
											<i class='fa-solid fa-volleyball text-xl'></i>
										</div>
										<div className='font-light  text-xs'>{f.TeamTwo}</div>
									</div>
								</div>
								<div className='w-full flex  justify-between space-x-1'>
									<button className='px-5 py-1 text-start bg-white text-white w-full rounded-lg bg-opacity-50'>
										{f.TeamoneScore}
									</button>
									<button className='px-5 py-1 w-full  text-end bg-white text-white rounded-lg bg-opacity-50'>
										{f.TeamoneScore}
									</button>
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
}

export default HomeSwipper;
