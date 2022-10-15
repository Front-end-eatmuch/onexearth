import React from "react";
import { useOutletContext } from "react-router-dom";
import LiveSoccerSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerSubTables ";
import SoccerSubTables from "../../../components/SubTables/SportSubTable/SoccerSubTables";
import SportTitleBar from "../SportTitleBar/SportTitleBar";

function SoccerTable() {
	const { sportTableaus } = useOutletContext();
	return (
		<div>
			<div>
				{sportTableaus.map((t, i) => {
					return <SoccerSubTables sporttable={t} key={i} />;
				})}
			</div>
		</div>
	);
}

export default SoccerTable;
