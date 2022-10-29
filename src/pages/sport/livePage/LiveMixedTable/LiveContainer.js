import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LiveHomeSlidder from "../../../../components/LiveHomeSlidder";
import LiveSoccerTable from "./LiveSoccerTable/LiveSoccerTable";
import LiveTable from "./LiveSoccerTable/LiveSoccerTable";
import LiveTitleBar from "./LiveTitleBar/LiveTitleBar";
import SportTitleBar from "./LiveTitleBar/LiveTitleBar";
// import Livesession from "./LiveTable";

function LiveContainer() {
	const [liveTableaus, setLiveTableaus] = useState([
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
	console.log(liveTableaus);
	let location = useLocation();
	return (
		<div className='px-4'>
			{location.pathname === "/live/livetables/home" && (
				<div className='mb-4'>
					<LiveHomeSlidder />
				</div>
			)}
			<div className='px-4 py-2 flex justify-between bg-indigo-900 text-white'>
				<div>livebets</div>
				<div>search</div>
			</div>
			<div>
				<LiveTitleBar />
			</div>

			<div>
				{/* <LiveSoccerTable liveTableaus={liveTableaus}></LiveSoccerTable> */}
				<Outlet context={{ liveTableaus: liveTableaus }} />
			</div>
		</div>
	);
}

export default LiveContainer;
