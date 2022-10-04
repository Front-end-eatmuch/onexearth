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
				},
				{ path: "live", element: <LivePage /> },
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
	]);
	return routes;
}

export default Routess;
