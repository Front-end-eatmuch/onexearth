import React, { useState } from "react";
import Betslip from "../../components/Betslip";
import Swipperslide from "../../components/Swipperslide";
import Livetables from "../../components/SubTables/SportSubTable/SportLigueSubTables/SoccerSubTables";
import AdsNlogin from "../../container/AdsNlogin";
import Livecontainer from "../../container/LiveContainer/LiveContainer";
import Livesession from "../../container/LiveContainer/LiveSoccerTable/LiveSoccerTable";
import Footer from "../../components/Footer";
import SportContainer from "../../container/SportContainer/SportContainer";

function HomePage() {
	const [open, setOpen] = useState(true);
	const [redder, setRedder] = useState(false);
	const handler = () => {
		setRedder(!redder);
	};
	return (
		<div className=' '>
			<div className='w-screen '>
				<AdsNlogin />
			</div>
			<div className='flex w-full'>
				<div className='w-full overflow-x-scroll space-y-10'>
					<Livecontainer />
					<SportContainer />
					<Footer />
				</div>
				<div className=' max-h-full'>
					<div
						className={` absolute  z-20 md:hidden duration-200   ${
							open ? "translate-x-0" : "-translate-x-full"
						}`}
					>
						<div className='relative'>
							<Betslip />
							<div
								className='absolute cursor-pointer top-0 z-40 -left-4  '
								onClick={() => {
									setOpen(!open);
								}}
							>
								<i class='fa-solid fa-square-caret-left font-extrabold text-xl text-rose-600'></i>
							</div>
						</div>
					</div>
					<div className='hidden md:flex  '>
						<Betslip />
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
