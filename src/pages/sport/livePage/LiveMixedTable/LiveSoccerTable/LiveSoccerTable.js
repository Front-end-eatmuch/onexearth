import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LiveSoccerSubTables from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import LiveSportSubTables from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import LiveSubTables from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
// import Livetables from "../../components/SubTables/SportSubTables";
import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
} from "@syncfusion/ej2-react-grids";
import LiveFaCupSubtable from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveFaCupSubtable";
import LivePremiereLigue from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LivePremiereLigue";
import MoscowChampionship from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveMoscowChampionship";
import LiveBigLigue from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveBigLigue";
import LiveMoscowChampionship from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveMoscowChampionship";
function LiveSoccerTable() {
	// console.log(props.tableaus);
	const { liveTableaus } = useOutletContext();
	const [bua, setBua] = useState([]);
	return (
		<div className='w-full'>
			{/* {liveTableaus.map((t) => {
					return ( */}
			<div className='w-full'>
				<LiveSoccerSubTables livetable={liveTableaus} />
				<LiveFaCupSubtable livetable={liveTableaus} />
				<LivePremiereLigue livetable={liveTableaus} />
				<LiveMoscowChampionship livetable={liveTableaus} />
				<LiveBigLigue livetable={liveTableaus} />
			</div>
			{/* );
				})} */}
		</div>
	);
}

export default LiveSoccerTable;
