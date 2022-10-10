import * as React from "react";
import Homepage from "./pages/homePage/HomePage";
import { useRoutes } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import LiveContainer from "./container/LiveContainer/LiveContainer";
import SportContainer from "./container/SportContainer/SportContainer";
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

function Routess() {
	const routes = useRoutes([
		{ path: "/", element: <Homepage /> },
		{
			path: "login",
			element: <Login />,
		},
		{
			path: "sport",
			element: <Sport />,
			children: [
				{
					path: "sports",
					element: <SportPage />,
					children: [
						{
							path: "sporttables",
							element: <SportContainer />,
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
						},
					],
				},
			],
		},
		{
			path: "casino",
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
			path: "casino-live",
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
	]);
	return routes;
}

export default Routess;
