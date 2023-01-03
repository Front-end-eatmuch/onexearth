import React, { useState } from "react";
import LiveBigLigue from "../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveBigLigue";
import LiveFaCupSubtable from "../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveFaCupSubtable";
import LiveMoscowChampionship from "../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveMoscowChampionship";
import LivePremiereLigue from "../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LivePremiereLigue";
import LiveSoccerSubTables from "../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import LiveTitleBar from "../../sport/livePage/LiveMixedTable/LiveTitleBar/LiveTitleBar";
function HomeLiveSoccerTable() {
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
	return (
		<div>
			<div className='w-full flex flex-col'>
				<div>
					{" "}
					<div className='px-4 py-2 flex space-x-2   text-white bg-[#4B88B9] w-full'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class='w-6 h-6 text-red-600 font-bold'
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
								/>
							</svg>
						</div>
						<div>live Matches</div>
					</div>
					<div>
						<LiveTitleBar />
					</div>
				</div>
				<div className='w-full'>
					<LiveSoccerSubTables livetable={liveTableaus} />
					<LiveFaCupSubtable livetable={liveTableaus} />
					<LivePremiereLigue livetable={liveTableaus} />
					<LiveMoscowChampionship livetable={liveTableaus} />
					<LiveBigLigue livetable={liveTableaus} />
				</div>
			</div>
		</div>
	);
}

export default HomeLiveSoccerTable;
