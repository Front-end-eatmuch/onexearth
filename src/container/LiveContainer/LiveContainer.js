import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LiveHomeSlidder from "../../components/LiveHomeSlidder";
import LiveSoccerTable from "./LiveSoccerTable/LiveSoccerTable";
import LiveTable from "./LiveSoccerTable/LiveSoccerTable";
import LiveTitleBar from "./LiveTitleBar/LiveTitleBar";
import SportTitleBar from "./LiveTitleBar/LiveTitleBar";
// import Livesession from "./LiveTable";

function LiveContainer() {
	const [liveTableaus, setLiveTableaus] = useState([
		{
			id: 1,
			DataTitle: ["caribean", "color", "category", "price"],
			Data: [
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 2,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 3,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 3,
			DataTitle: ["Americana", "color", "category", "price"],
			Data: [
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 4,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
	]);
	console.log(liveTableaus);
	let location = useLocation();
	return (
		<div className='px-4'>
			{location.pathname === "/sport/live/livetables/home" && (
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
