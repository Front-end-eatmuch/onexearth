import React, { useState } from "react";
import SeriesASubTable from "../../../../../components/SubTables/LeagueSubTable/SeriesASubTable";

function SeriesATable() {
	const [laligaTableaus, setLaligaTableaus] = useState([
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
	return (
		<div>
			<div className='px-4 py-2 flex justify-between bg-indigo-900 text-white'>
				<div>SerieATable</div>
			</div>
			<SeriesASubTable laligaTableaus={laligaTableaus} />
		</div>
	);
}

export default SeriesATable;
