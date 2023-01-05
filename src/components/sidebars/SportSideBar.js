import React, { useState } from "react";
import { Link } from "react-router-dom";
import SportPopularSports from "../SidebarComponents/SportSideBarComponens/SportPopularSports";
import SportTopChampionship from "../SidebarComponents/SportSideBarComponens/SportTopChampionship";
import SportTopEvents from "../SidebarComponents/SportSideBarComponens/SportTopEvents";

function SportSideBar() {
	const [topSportEvents, settopSportEvents] = useState([
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
	const [championship, setChampionship] = useState([
		{
			id: 1,
			Title: "Premiere League",
			TitleImage: "",
		},
		{
			id: 2,
			Title: "Laliga",
			TitleImage: "",
		},
		{
			id: 3,
			Title: "Ligue",
			TitleImage: "",
		},
		{
			id: 4,
			Title: "Serie A",
			TitleImage: "",
		},
		{
			id: 5,
			Title: "Bundesliga",
			TitleImage: "",
		},
		{
			id: 6,
			Title: "NHL",
			TitleImage: "",
		},
		{
			id: 7,
			Title: "NBA Proseason",
			TitleImage: "",
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
		<div className='w-full h-screen overflow-y-scroll   px-1 bg-white   '>
			<div className='relative  h-full space-y-4 pb-10 pt-1 '>
				<SportTopChampionship championship={championship} />
				<SportTopEvents topSportEvents={topSportEvents} />
				<SportPopularSports popularSport={popularSport} games={games} />
				<div className='h-96'></div>
			</div>
		</div>
	);
}

export default SportSideBar;
