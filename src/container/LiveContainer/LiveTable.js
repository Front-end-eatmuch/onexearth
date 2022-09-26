import React from "react";
import LiveSubTables from "../../components/SubTables/LiveSubTables copy";
// import Livetables from "../../components/SubTables/SportSubTables";

function LiveTable(props) {
	// console.log(props.tableaus);
	return (
		<div>
			<div>
				{props.liveTableaus.map((t) => {
					return (
						<div>
							<LiveSubTables livetable={t} key={t.id} />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default LiveTable;
