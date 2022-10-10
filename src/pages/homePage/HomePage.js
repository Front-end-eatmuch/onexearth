import React, { useState } from "react";
import Betslip from "../../components/Betslip";
import Swipperslide from "../../components/Swipperslide";
import Livetables from "../../components/SubTables/SportSubTables";
import AdsNlogin from "../../container/AdsNlogin";
import Livecontainer from "../../container/LiveContainer/LiveContainer";
import Livesession from "../../container/LiveContainer/LiveTable";
import Footer from "../../components/Footer";
import SportContainer from "../../container/SportContainer/SportContainer";

function HomePage() {
	const [redder, setRedder] = useState(false);
	const handler = () => {
		setRedder(!redder);
	};
	return (
		<div className=' '>
			<div className='w-screen '>
				<AdsNlogin />
			</div>
			<div className='grid grid-cols-12 w-full'>
				<div className='col-span-10  overflow-x-scroll space-y-5'>
					<Livecontainer />
					<SportContainer />
					<Footer />
				</div>
				<div className='col-span-2'>
					<Betslip />
				</div>
			</div>
		</div>
	);
}

export default HomePage;
