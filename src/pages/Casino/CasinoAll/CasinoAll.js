import React, { useState } from "react";
import Sutama from "../../../images/sutama.jpg";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { useOutletContext } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Grid, Navigation, Pagination, A11y } from "swiper";
import CasinoPopularSlider from "../../../components/CasinoSliders/CasinoPopularSlider";
import CasinoNewgameSlider from "../../../components/CasinoSliders/CasinoNewgameSlider";
import CasinoSlotsSlider from "../../../components/CasinoSliders/CasinoSlotsSlider";
import CasinoJackpotSlider from "../../../components/CasinoSliders/CasinoJackpotSlider";
import CasinoBonusbuySlider from "../../../components/CasinoSliders/CasinoBonusbuySlider";

function CasinoAll() {
	const { casinoData } = useOutletContext();

	return (
		<div className=' w-full space-y-10 px-5 py-5 bg-gray-600'>
			<CasinoPopularSlider casinoData={casinoData} />
			<CasinoNewgameSlider casinoData={casinoData} />
			<CasinoSlotsSlider casinoData={casinoData} />
			<CasinoJackpotSlider casinoData={casinoData} />
			<CasinoBonusbuySlider casinoData={casinoData} />
		</div>
	);
}

export default CasinoAll;
