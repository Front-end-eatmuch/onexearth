import React from "react";
import { useOutletContext } from "react-router-dom";
import LiveSoccerSubTables from "../../../components/SubTables/LiveSubtables/LiveSoccerLigueaSubtable/LiveSoccerSubTables ";
import MoscowChampionship from "../../../components/SubTables/SportSubTable/SportLigueSubTables/MoscowChampionship";
import PremiereLigue from "../../../components/SubTables/SportSubTable/SportLigueSubTables/PremiereLigue";
import SoccerSubTables from "../../../components/SubTables/SportSubTable/SportLigueSubTables/SoccerSubTables";
import PremiereLeagueTable from "../Leagues/PremiereLeagueTable/PremiereLeagueTable";
import SportTitleBar from "../SportTitleBar/SportTitleBar";

function SoccerTable() {
	const { sportTableaus } = useOutletContext();
	return (
		<div className='h-screen'>
			<div className='h-full'>
				<SoccerSubTables sporttable={sportTableaus} />
				<PremiereLigue sporttable={sportTableaus} />
				<MoscowChampionship sporttable={sportTableaus} />
			</div>
		</div>
	);
}

export default SoccerTable;
