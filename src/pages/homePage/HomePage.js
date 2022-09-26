import React, { useState } from "react";
import Betslip from "../../components/Betslip";
import Swipperslide from "../../components/Swipperslide";
import Livetables from "../../components/SubTables/SportSubTables";
import AdsNlogin from "../../container/AdsNlogin";
import Livecontainer from "../../container/LiveContainer/LiveContainer";
import Livesession from "../../container/LiveContainer/LiveTable";

function HomePage() {
	const [redder, setRedder] = useState(false);
	const handler = () => {
		setRedder(!redder);
	};
	return (
		<div className=' h-bigxxx'>
			<div className='w-screen'>
				<AdsNlogin />
			</div>
			<div className='grid grid-cols-12 w-full'>
				<div className='col-span-10  overflow-x-scroll'>
					<Livecontainer />
				</div>
				<div className='col-span-2'>
					<Betslip />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
