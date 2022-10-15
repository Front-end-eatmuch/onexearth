import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import SoccerSubTables from "../../components/SubTables/SportSubTable/SoccerSubTables";
import LiveSoccerTable from "../LiveContainer/LiveSoccerTable/LiveSoccerTable";

import SportTable from "./SoccerTable/SoccerTable";
import SportTitleBar from "./SportTitleBar/SportTitleBar";
import SoccerTable from "./SoccerTable/SoccerTable";

function SportContainer() {
	const [sportTableaus, setSportTableaus] = useState([
		{
			id: 1,
			DataTitle: ["Premiere League", "1", "x", "2"],
			Data: [
				{
					id: "_11",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					id: "_12",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 2,
			DataTitle: ["A League", "1", "x", "2"],
			Data: [
				{
					id: "_21",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 3,
			DataTitle: ["Bondes Liga", "1", "x", "2"],
			Data: [
				{
					id: "_31",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					id: "_32",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 4,
			DataTitle: ["1st Division one", "1", "x", "2"],
			Data: [
				{
					id: "_41",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					id: "_42",
					name: { teamone: "realmaadrid", teamtwo: "bacelona" },
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
	]);
	let location = useLocation();
	return (
		<div className='px-4'>
			<div></div>
			<div className='px-4 py-2 flex justify-between bg-indigo-900 text-white'>
				<div>Sportbets</div>
				<div>search</div>
			</div>
			{
				<div>
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
