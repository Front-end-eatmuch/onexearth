import React from "react";
import { Link, useLocation } from "react-router-dom";

function SportTitleBar() {
	const location = useLocation();
	const handleClick = () => {
		// 👇️ replace set to true
		// navigate("casino-live/popular", { replace: true });
		window.location.replace("/casino/slots");
	};
	return (
		<div>
			{" "}
			<div className=' flex space-x-10  py-2 w-full px-4'>
				<div className=' '>
					<Link
						to='volleyball'
						className={`text-xs font-bold text-black ${
							location.pathname === "/sport/sports/sporttables/volleyball" &&
							"text-green-500"
						}`}
					>
						VolleyBall
					</Link>
				</div>
				<div>
					<Link
						to='soccer'
						className={`text-xs font-bold text-black ${
							location.pathname === "/sport/sports/sporttables/soccer" &&
							"text-green-500"
						}`}
					>
						Soccer
					</Link>
				</div>
				<div>
					<Link
						to='basketball'
						className={`text-xs font-bold text-black ${
							location.pathname === "/sport/sports/sporttables/basketball" &&
							"text-green-500"
						}`}
					>
						BasketBall
					</Link>
				</div>
				<div>
					<Link
						to='cricket'
						className={`text-xs font-bold text-black ${
							location.pathname === "/sport/sports/sporttables/cricket" &&
							"text-green-500"
						}`}
					>
						cricket
					</Link>
				</div>
				<div>
					<Link
						to='baseball'
						className={`text-xs font-bold text-black ${
							location.pathname === "/sport/sports/sporttables/baseball" &&
							"text-green-500"
						}`}
					>
						Baseball
					</Link>
				</div>
				<div>
					<Link
						to='tennisball'
						className={`text-xs font-bold text-black ${
							location.pathname === "/sport/sports/sporttables/tennisball" &&
							"text-green-500"
						}`}
					>
						Table tennis
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SportTitleBar;
