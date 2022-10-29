import React from "react";
import { useOutletContext } from "react-router-dom";
import LiveSideBar from "../../../../../components/sidebars/LiveSideBar";
import LiveHomeSubTables from "../../../../../components/SubTables/LiveMixedSubtables/LiveHomeSubTables";
import LiveSoccerSubTables from "../../../../../components/SubTables/LiveMixedSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import LiveSoccerTable from "../LiveSoccerTable/LiveSoccerTable";

function LiveHome() {
	const { liveTableaus } = useOutletContext();
	return (
		<div>
			<LiveSoccerTable />
		</div>
	);
}

export default LiveHome;
