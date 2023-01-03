import React, { useState } from "react";
import MoscowChampionship from "../../../components/SubTables/MixedSubTable/SportLigueSubTables/MoscowChampionship";
import PremiereLigue from "../../../components/SubTables/MixedSubTable/SportLigueSubTables/PremiereLigue";
import SoccerSubTables from "../../../components/SubTables/MixedSubTable/SportLigueSubTables/SoccerSubTables";
import SportTitleBar from "../../sport/sportPage/MixedTable/SportTitleBar/SportTitleBar";

function HomeSoccerTable() {
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
	return (
		<div>
			<div className='w-full flex flex-col'>
				<div>
					{" "}
					<div className='px-4 py-2 flex space-x-2 bg-[#4B88B9]  text-white w-full'>
						<div>Sport Bets</div>
					</div>
					<div>
						<SportTitleBar />
					</div>
				</div>
				<div className='w-full'>
					<SoccerSubTables sporttable={sportTableaus} />
					<PremiereLigue sporttable={sportTableaus} />
					<MoscowChampionship sporttable={sportTableaus} />
				</div>
			</div>
		</div>
	);
}

export default HomeSoccerTable;
