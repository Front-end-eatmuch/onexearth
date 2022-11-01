import React from "react";
import CasinoLiveBonusbuySlider from "../../../components/CasinoLiveSliders.js/CasinoLiveBonusbuySlider";
import CasinoLiveJackpotSlider from "../../../components/CasinoLiveSliders.js/CasinoLiveJackpotSliders";
import CasinoLiveNewgameSlider from "../../../components/CasinoLiveSliders.js/CasinoLiveNewgameSlider";
import CasinoLivePopularSlider from "../../../components/CasinoLiveSliders.js/CasinoLivePopularSlider";
import CasinoLiveSlotsSlider from "../../../components/CasinoLiveSliders.js/CasinoLiveSlotsSlider";
import { useOutletContext } from "react-router-dom";
function CasinoLiveAll() {
	const { casinoData } = useOutletContext();
	return (
		<div className=' w-full h-full space-y-10 px-5 py-5 '>
			<CasinoLivePopularSlider casinoData={casinoData} />
			<CasinoLiveNewgameSlider casinoData={casinoData} />
			<CasinoLiveSlotsSlider casinoData={casinoData} />
			<CasinoLiveJackpotSlider casinoData={casinoData} />
			<CasinoLiveBonusbuySlider casinoData={casinoData} />
		</div>
	);
}

export default CasinoLiveAll;
