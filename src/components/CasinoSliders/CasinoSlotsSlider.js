import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useOutletContext } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Grid, Navigation, Pagination, A11y } from "swiper";

function CasinoSlotsSlider(props) {
	// const { casinoData } = useOutletContext();

	const [swiperRef, setSwiperRef] = useState(null);
	const navigationPrevRef6 = React.useRef(null);
	const navigationNextRef6 = React.useRef(null);
	const handleClick = () => {
		// 👇️ replace set to true
		// navigate("casino-live/popular", { replace: true });
		window.location.replace("/casino/slots");
	};
	return (
		<div>
			<div className=' relative bg-white w-full overflow-x-hidden py-5 px-5 space-y-5'>
				<div className='flex justify-between'>
					<div>Live 3D slots</div>
					<div className='flex space-x-3'>
						<div className='space-x-2'>
							<button
								id='custom_next'
								className='py-1 px-1 bg-gray-200 rounded-full '
								ref={navigationNextRef6}
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
										d='M15.75 19.5L8.25 12l7.5-7.5'
									/>
								</svg>
							</button>
							<button
								id='custom_prev'
								className='py-1 px-1 bg-gray-200 rounded-full '
								ref={navigationPrevRef6}
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
						<div>
							<button className='text-xs text-green-500' onClick={handleClick}>
								show all
							</button>
						</div>
					</div>
				</div>
				<Swiper
					id='swiper2'
					onSwiper={setSwiperRef}
					slidesPerView={4}
					grid={{
						rows: 2,
					}}
					navigation={{
						prevEl: navigationNextRef6.current,
						nextEl: navigationPrevRef6.current,
					}}
					spaceBetween={10}
					pagination={{
						type: "fraction",
					}}
					modules={[Grid, Pagination, Navigation, A11y]}
					className=' h-small2   w-full'
				>
					{props.casinoData.map((v) => {
						return (
							<SwiperSlide className='w-40 !h-40  text-black'>
								{true ? (
									<div className='w-full  h-full bg-slate-200 animate-pulse'>
										<div>{v.id}</div>
									</div>
								) : null}
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</div>
	);
}

export default CasinoSlotsSlider;
