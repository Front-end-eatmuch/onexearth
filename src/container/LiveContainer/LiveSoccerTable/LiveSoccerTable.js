import React from "react";
import { useOutletContext } from "react-router-dom";
import LiveSoccerSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerSubTables ";
import LiveSportSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerSubTables ";
import LiveSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerSubTables ";
// import Livetables from "../../components/SubTables/SportSubTables";

function LiveSoccerTable() {
	// console.log(props.tableaus);
	const { liveTableaus } = useOutletContext();
	return (
		<div>
			<div>
				{liveTableaus.map((t) => {
					return (
						<div>
							<LiveSoccerSubTables livetable={t} key={t.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default LiveSoccerTable;
