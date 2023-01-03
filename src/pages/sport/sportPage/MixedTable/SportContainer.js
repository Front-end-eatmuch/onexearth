import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SoccerSubTables from "../../../../components/SubTables/MixedSubTable/SportLigueSubTables/SoccerSubTables";
import LiveSoccerTable from "../../livePage/LiveMixedTable/LiveSoccerTable/LiveSoccerTable";

import SportTable from "./SoccerTable/SoccerTable";
import SportTitleBar from "./SportTitleBar/SportTitleBar";
import SoccerTable from "./SoccerTable/SoccerTable";
import SportSwipper from "./SportSwipper/SportSwipper";

function SportContainer() {
	const [sportTableaus, setSportTableaus] = useState([
		{
			laliga: ["realmaadrid ", "bacelona"],
			rate1: 1.32,
			rate2: 4.25,
			rate3: 9.5,
			rate4: 0,
			rate5: 1.3,
			rate6: 1.89,
			rate7: 0,
			rate8: 1.97,
		},
		{
			laliga: ["arsena ", "totenham"],
			rate1: 1.32,
			rate2: 4.25,
			rate3: 9.5,
			rate4: 4,
			rate5: 1.3,
			rate6: 1.89,
			rate7: 0,
			rate8: 1.97,
		},
		{
			laliga: ["bayen munich ", "psg"],
			rate1: 1.32,
			rate2: 4.25,
			rate3: 9.5,
			rate4: 0,
			rate5: 1.3,
			rate6: 1.89,
			rate7: 0,
			rate8: 1.97,
		},
		{
			laliga: ["liverpool ", "manchester united"],
			rate1: 1.32,
			rate2: 4.25,
			rate3: 9.5,
			rate4: 0,
			rate5: 1.3,
			rate6: 1.89,
			rate7: 0,
			rate8: 1.97,
		},
	]);
	let location = useLocation();
	return (
		<div className='px-2 h-screen'>
			<div className='w-full mb-2  px-4 py-2 flex justify-between bg-[#2C6CA7]   text-white'>
				<div>Sportbets</div>
			</div>
			<div className='mb-2'>
				<SportSwipper />
			</div>
			{
				<div className='w-full  overflow-x-scroll '>
					<SportTitleBar />
				</div>
			}

			<div>
				<Outlet context={{ sportTableaus: sportTableaus }} />
				{/* <SoccerTable sportTableaus={sportTableaus} /> */}
			</div>
		</div>
	);
}

export default SportContainer;
