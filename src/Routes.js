import * as React from "react";
import Homepage from "./pages/homePage/HomePage";
import { useRoutes } from "react-router-dom";
import Login from "./pages/loginPage/Login";
import LiveContainer from "./container/LiveContainer/LiveContainer";
import SportContainer from "./container/SportContainer/SportContainer";
import Sport from "./pages/sport/Sport";
import SportPage from "./pages/sportPage/SportPage";
import LivePage from "./pages/livePage/LivePage";
import CasinoPage from "./pages/CasinoPage/CasinoPage";

function Routess() {
	const routes = useRoutes([
		{ path: "/", element: <Homepage /> },
		{
			path: "invoices",
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
		{ path: "casino", element: <CasinoPage /> },
	]);
	return routes;
}

export default Routess;
