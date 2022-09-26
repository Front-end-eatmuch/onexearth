import React from "react";
import SportSubTables from "../../components/SubTables/SportSubTables";

function SportTable(props) {
	return (
		<div>
			{props.sportTableaus.map((t, i) => {
				return <SportSubTables sporttable={t} key={i} />;
			})}
		</div>
	);
}

export default SportTable;
