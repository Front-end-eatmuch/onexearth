import React from "react";
import { useOutletContext } from "react-router-dom";
import LiveHomeSubTables from "../../../components/SubTables/LiveSubtables/LiveHomeSubTables";
import LiveSoccerSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerSubTables ";

function LiveHome() {
	const { liveTableaus } = useOutletContext();
	return (
		<div>
			{liveTableaus.map((t, i) => {
				return <LiveHomeSubTables livetable={t} key={i} />;
			})}
			Livehome
		</div>
	);
}

export default LiveHome;
