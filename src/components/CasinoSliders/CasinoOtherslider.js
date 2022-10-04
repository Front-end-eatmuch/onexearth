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

function CasinoOtherSlider(props) {
	// const { casinoData } = useOutletContext();

	const [swiperRef, setSwiperRef] = useState(null);
	const navigationPrevRef4 = React.useRef(null);
	const navigationNextRef4 = React.useRef(null);
	return (
		<div>
			<div className=' relative bg-slate-50 w-full overflow-x-hidden py-5 px-5 space-y-5'>
				<div>Other</div>
				<Swiper
					id='swiper2'
					onSwiper={setSwiperRef}
					slidesPerView={3}
					grid={{
						rows: 2,
					}}
					navigation={{
						prevEl: navigationNextRef4.current,
						nextEl: navigationPrevRef4.current,
					}}
					spaceBetween={20}
					pagination={{
						type: "fraction",
					}}
					modules={[Grid, Pagination, Navigation, A11y]}
					className=' h-small2 bg-orange-300  w-full'
				>
					{props.casinoData.map((v) => {
						return (
							<SwiperSlide className='w-40 !h-40 bg-green-200 text-black'>
								<div>{v.id}</div>
								{console.log(v.name)}
							</SwiperSlide>
						);
					})}
				</Swiper>
				<button
					id='custom_next'
					className='absolute z-20 right-10 top-40'
					ref={navigationNextRef4}
				>
					{" "}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-12 h-12'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M8.25 4.5l7.5 7.5-7.5 7.5'
						/>
					</svg>
				</button>
				<button
					id='custom_prev'
					className='absolute z-20 left-10 top-40'
					ref={navigationPrevRef4}
				>
					{" "}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class='w-12 h-12'
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M15.75 19.5L8.25 12l7.5-7.5'
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default CasinoOtherSlider;
