import * as React from "react";
import Homepage from "./pages/homePage/HomePage";
import { useRoutes } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import LiveContainer from "./pages/sport/livePage/LiveMixedTable/LiveContainer";
import SportContainer from "./pages/sport/sportPage/MixedTable/SportContainer";
import Sport from "./pages/sport/Sport";
import SportPage from "./pages/sport/sportPage/SportPage";
import LivePage from "./pages/sport/livePage/LivePage";
import CasinoPage from "./pages/Casino/CasinoAll/CasinoAll";
import Casino from "./pages/Casino/Casino";
import CasinoAll from "./pages/Casino/CasinoAll/CasinoAll";
import CasinoPopular from "./pages/Casino/CasinoPopular/CasinoPopular";
import CasinoNewgame from "./pages/Casino/CasinoNewgame/CasinoNewgame";
import CasinoSlots from "./pages/Casino/CasinoSlots/CasinoSlots";
import CasinoBonusbuy from "./pages/Casino/CasinoBonusbuy/CasinoBonusbuy";
import CasinoJackpot from "./pages/Casino/CasinoJackpot/CasinoJackpot";
import CasinoOther from "./pages/Casino/CasinoOther/CasinoOther";
import CasinoLive from "./pages/CasinoLive/CasinoLive";
import CasinoLiveAll from "./pages/CasinoLive/CasinoLiveAll/CasinoLiveAll";
import CasinoLivePopular from "./pages/CasinoLive/CasinoLivePopular/CasinoLivePopular";
import CasinoLiveNewgame from "./pages/CasinoLive/CasinoLiveNewgame/CasinoLiveNewgame";
import CasinoliveSlots from "./pages/CasinoLive/CasinoLiveSlots/CasinoliveSlots";
import CasinoLiveBonusbuy from "./pages/CasinoLive/CasinoLiveBonusbuy/CasinoLiveBonusbuy";
import CasinoLiveJackpot from "./pages/CasinoLive/CasinoLiveJackpot/CasinoLiveJackpot";
import CasinoLiveOther from "./pages/CasinoLive/CasinoLiveOther/CasinoLiveOther";
import Promotion from "./pages/Promotion/Promotion";
import PromotionAll from "./pages/Promotion/PromotionAll/PromotionAll";
import PromotionSport from "./pages/Promotion/PromotionSport/PromotionSport";
import PromotionCasino from "./pages/Promotion/PromotionCasino/PromtionCasino";
import PromotionVip from "./pages/Promotion/PromotionVip/PromotionVip";
import AccountSetting from "./pages/AccountSetting/AccountSetting";
import AsAccountVerificaion from "./pages/AccountSetting/AsAccountVerification/AsAccountVerificaion";
import AsBettingHistory from "./pages/AccountSetting/AsBettingHistory/AsBettingHistory";
import AsBonuses from "./pages/AccountSetting/AsBonuses/AsBonuses";
import AsCasinoHistory from "./pages/AccountSetting/AsCasinoHistory/AsCasinoHistory";
import AsCoins from "./pages/AccountSetting/AsCoins/AsCoins";
import AsDeposit from "./pages/AccountSetting/AsDeposit/AsDeposit";
import AsForecastHistory from "./pages/AccountSetting/AsForecastHistory/AsForecastHistory";
import AsPersonalDetails from "./pages/AccountSetting/AsPersonalDetails/AsPersonalDetails";
import AsPreferences from "./pages/AccountSetting/AsPreferences/AsPreferences";
import AsTransactionHistory from "./pages/AccountSetting/AsTransactionHistory/AsTransactionHistory";
import AsWithdraw from "./pages/AccountSetting/AsWithdraw/AsWithdraw";
import LiveTable from "./pages/sport/livePage/LiveMixedTable/LiveSoccerTable/LiveSoccerTable";
import SoccerTable from "./pages/sport/sportPage/MixedTable/SoccerTable/SoccerTable";
import LiveSoccerTable from "./pages/sport/livePage/LiveMixedTable/LiveSoccerTable/LiveSoccerTable";
import LiveHome from "./pages/sport/livePage/LiveMixedTable/LiveHome/LiveHome";
import LiveVolleyballSubTables from "./components/SubTables/LiveMixedSubtables/LiveVolleyballSubTables";
import LaLigaTable from "./pages/sport/sportPage/LeaguesTable/LaLigaTable/LaLigaTable";
import PremiereLeagueTable from "./pages/sport/sportPage/LeaguesTable/PremiereLeagueTable/PremiereLeagueTable";

import Ligue1Table from "./pages/sport/sportPage/LeaguesTable/Ligue1Table/Ligue1Table";
import BundesligaTable from "./pages/sport/sportPage/LeaguesTable/BundesligaTable/BundesligaTable";
import EredevisieTable from "./pages/sport/sportPage/LeaguesTable/EredevisieTable/EredevisieTable";
import SeriesATable from "./pages/sport/sportPage/LeaguesTable/SeriesATable/SeriesATable";
function Routess() {
	const routes = useRoutes([
		{
			path: "/",
			element: <Homepage />,
			children: [
				{
					path: "soccer",
					element: <SoccerTable />,
				},
				{
					path: "volleyball",
					element: <SoccerTable />,
				},
				{
					path: "basketball",
					element: <SoccerTable />,
				},
				{
					path: "baseball",
					element: <SoccerTable />,
				},
				{
					path: "cricket",
					element: <SoccerTable />,
				},
				{
					path: "tennisball",
					element: <SoccerTable />,
				},
			],
		},
		// {
		// 	path: "login",
		// 	element: <Login />,
		// },
		{
			path: "/sport",

			element: <Sport />,
			children: [
				{
					path: "sports",
					element: <SportPage />,
					children: [
						{
							path: "sporttables",
							element: <SportContainer />,
							children: [
								{
									path: "soccer",
									element: <SoccerTable />,
								},
								{
									path: "volleyball",
									element: <SoccerTable />,
								},
								{
									path: "basketball",
									element: <SoccerTable />,
								},
								{
									path: "baseball",
									element: <SoccerTable />,
								},
								{
									path: "cricket",
									element: <SoccerTable />,
								},
								{
									path: "tennisball",
									element: <SoccerTable />,
								},
							],
						},
						{
							path: "Laliga",
							element: <LaLigaTable />,
						},
						{
							path: "premieraleague",
							element: <PremiereLeagueTable />,
						},
						{
							path: "premiereleague",
							element: <PremiereLeagueTable />,
						},
						{
							path: "seriesa",
							element: <SeriesATable />,
						},
						{
							path: "ligue1",
							element: <Ligue1Table />,
						},
						{
							path: "bundesliga",
							element: <BundesligaTable />,
						},
						{
							path: "eredevisie",
							element: <EredevisieTable />,
						},
					],
				},
				{
					path: "live",
					element: <LivePage />,
					children: [
						{
							path: "livetables",
							element: <LiveContainer />,
							children: [
								{
									path: "home",
									element: <LiveHome />,
								},
								{
									path: "soccer",
									element: <LiveSoccerTable />,
								},
								{
									path: "volleyball",
									element: <LiveVolleyballSubTables />,
								},
								{
									path: "basketball",
									element: <LiveSoccerTable />,
								},
								{
									path: "baseball",
									element: <LiveSoccerTable />,
								},
								{
									path: "cricket",
									element: <LiveSoccerTable />,
								},
								{
									path: "tennisball",
									element: <LiveSoccerTable />,
								},
							],
						},
					],
				},
			],
		},
		{
			path: "/casino",
			element: <Casino />,
			children: [
				{
					path: "all",
					element: <CasinoAll />,
				},
				{ path: "popular", element: <CasinoPopular /> },
				{ path: "newgame", element: <CasinoNewgame /> },
				{ path: "slots", element: <CasinoSlots /> },
				{ path: "bonusbuy", element: <CasinoBonusbuy /> },
				{ path: "jackpot", element: <CasinoJackpot /> },
				{ path: "other", element: <CasinoOther /> },
			],
		},
		{
			path: "/casino-live",
			element: <CasinoLive />,
			children: [
				{
					path: "all",
					element: <CasinoLiveAll />,
				},
				{ path: "popular", element: <CasinoLivePopular /> },
				{ path: "newgame", element: <CasinoLiveNewgame /> },
				{ path: "slots", element: <CasinoliveSlots /> },
				{ path: "bonusbuy", element: <CasinoLiveBonusbuy /> },
				{ path: "jackpot", element: <CasinoLiveJackpot /> },
				{ path: "other", element: <CasinoLiveOther /> },
			],
		},
		{
			path: "/promotion",
			element: <Promotion />,
			children: [
				{
					path: "all",
					element: <PromotionAll />,
				},
				{ path: "sport", element: <PromotionSport /> },
				{ path: "casino", element: <PromotionCasino /> },
				{ path: "vip", element: <PromotionVip /> },
			],
		},
		{
			path: "/accountsetting",
			element: <AccountSetting />,
			children: [
				{
					path: "accountverification",
					element: <AsAccountVerificaion />,
				},
				{ path: "bettinghistory", element: <AsBettingHistory /> },
				{ path: "bonuses", element: <AsBonuses /> },
				{ path: "casinohistory", element: <AsCasinoHistory /> },
				{ path: "coins", element: <AsCoins /> },
				{ path: "deposit", element: <AsDeposit /> },
				{ path: "forecasthistory", element: <AsForecastHistory /> },
				{ path: "personaldetails", element: <AsPersonalDetails /> },
				{ path: "preferences", element: <AsPreferences /> },
				{ path: "transactionhistory", element: <AsTransactionHistory /> },
				{ path: "withdraw", element: <AsWithdraw /> },
			],
		},
	]);
	return routes;
}

export default Routess;
