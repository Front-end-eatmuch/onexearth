import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import LiveSoccerSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import LiveSportSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import LiveSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
// import Livetables from "../../components/SubTables/SportSubTables";
import {
	ColumnDirective,
	ColumnsDirective,
	GridComponent,
} from "@syncfusion/ej2-react-grids";
import LiveFaCupSubtable from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveFaCupSubtable";
import LivePremiereLigue from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LivePremiereLigue";
import MoscowChampionship from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveMoscowChampionship";
import LiveBigLigue from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveBigLigue";
import LiveMoscowChampionship from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveMoscowChampionship";
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
