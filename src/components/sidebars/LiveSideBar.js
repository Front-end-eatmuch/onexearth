import React, { useState } from "react";
import LiveSport from "../SidebarComponents/LiveSideBarComponents/LiveSport";
import LiveTopEvents from "../SidebarComponents/LiveSideBarComponents/LiveTopEvents";

function LiveSideBar() {
	const [topLiveEvents, settopLiveEvents] = useState([
		{
			id: 1,
			Title: "Premiere League",
			TitleImage: "",
			TeamOne: "CrystalPalace",
			TeamOneImage: "",
			TeamTwo: "LeadsUnited",
			TeamTwoImage: "",
		},
		{
			id: 2,
			Title: "Series A",
			TitleImage: "",
			TeamOne: "Udinice  Calcio",
			TeamOneImage: "",
			TeamTwo: "Atlanta BC",
			TeamTwoImage: "",
		},
		{
			id: 3,
			Title: "Premiere League",
			TitleImage: "",
			TeamOne: "West Ham United",
			TeamOneImage: "",
			TeamTwo: "Fulman  FC",
			TeamTwoImage: "",
		},
		{
			id: 4,
			Title: "Series A",
			TitleImage: "",
			TeamOne: "Udinice  Calcio",
			TeamOneImage: "",
			TeamTwo: "Atlanta BC",
			TeamTwoImage: "",
		},
	]);

	const [popularSport, setPopularSport] = useState([
		{
			id: 1,
			Title: "Cricket",
			TitleImage: "",
		},
		{
			id: 2,
			Title: "Soccer",
			TitleImage: "",
		},
		{
			id: 3,
			Title: "Tennis",
			TitleImage: "",
		},
		{
			id: 4,
			Title: "BasketBall",
			TitleImage: "",
		},
		{
			id: 5,
			Title: "VolleyBall",
			TitleImage: "",
		},
	]);
	const [games, setGames] = useState([
		{
			id: 1,
			Items: [
				{
					ItemTitle: "BasketBall Premiere League",
					TitleImage: "",
					TitleScore: "2:0",
				},
				{
					ItemTitle: "Test Series Ashes League",
					TitleImage: "",
					TitleScore: "2:0",
				},
			],
		},
		{
			id: 2,
			Items: [
				{
					ItemTitle: "BasketBall Premiere League",
					TitleImage: "",
					TitleScore: "2:0",
				},

				{
					ItemTitle: "Test Series Ashes League",
					TitleImage: "",
					TitleScore: "2:0",
				},
			],
		},
		{
			id: 3,
			Items: [
				{
					ItemTitle: "Wolrd Premiere League",
					TitleImage: "",
					TitleScore: "2:0",
				},
				{
					ItemTitle: "Test Series Ashes League",
					TitleImage: "",
					TitleScore: "2:0",
				},
			],
		},
		{
			id: 4,
			Items: [
				{
					ItemTitle: "English Premiere bon League",
					TitleImage: "",
					TitleScore: "1:0",
				},
				{
					ItemTitle: "Big Bash  Premiere League",
					TitleImage: "",
					TitleScore: "2:0",
				},
			],
		},
		{
			id: 5,
			Items: [
				{
					ItemTitle: "indian Premiere League",
					TitleImage: "",
					TitleScore: "2:1",
				},
				{
					ItemTitle: "Test Series Ashes League",
					TitleImage: "",
					TitleScore: "2:0",
				},
			],
		},
	]);
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	return (
		<div className='w-60'>
			<div className=' h-full space-y-4 px-2 py-2 overflow-y-scroll bg-slate-200  rounded-xl'>
				<LiveTopEvents topSportEvents={topLiveEvents} />
				<LiveSport popularSport={popularSport} games={games} />
			</div>
		</div>
	);
}

export default LiveSideBar;
