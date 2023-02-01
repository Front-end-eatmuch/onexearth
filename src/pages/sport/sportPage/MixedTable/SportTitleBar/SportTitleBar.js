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
		<div className='w-full overflow-x-scroll bg-[#1A5683]'>
			<div className=' flex space-x-2   py-2 w-full px-4'>
				<Link
					to='volleyball'
					className={`text-xs font-medium  text-gray-400 border border-gray-700 px-2   ${
						location.pathname === "/sport/sports/sporttables/volleyball" && ""
					}`}
				>
					<div
						className={`flex items-center space-x-2 ${
							location.pathname === "/sport/sports/sporttables/volleyball" &&
							"text-gray-300 border-gray-300 "
						} `}
					>
						<div>
							<i class='fa-solid fa-volleyball text-lg'></i>
						</div>
						<div>volleyball</div>
					</div>
				</Link>

				<Link
					to='soccer'
					className={`text-xs font-medium  text-gray-400 border border-gray-700 px-2    ${
						location.pathname === "/sports/sporttables/soccer" && ""
					}`}
				>
					<div
						className={`flex items-center space-x-2 ${
							location.pathname === "/sport/sports/sporttables/soccer" &&
							"text-gray-300 border-gray-300 "
						} `}
					>
						<div>
							<i class='fa-sharp fa-solid fa-basketball text-xl'></i>
						</div>
						<div>soccer</div>
					</div>
				</Link>

				<Link
					to='basketball'
					className={`text-xs font-medium  text-gray-400 border border-gray-700 px-2    ${
						location.pathname === "/sports/sporttables/basketball" && ""
					}`}
				>
					<div
						className={`flex items-center space-x-2 ${
							location.pathname === "/sport/sports/sporttables/basketball" &&
							"text-gray-300 border-gray-300 "
						} `}
					>
						<div>
							<i class='fa-sharp fa-solid fa-basketball text-xl'></i>
						</div>
						<div>Basketball</div>
					</div>
				</Link>

				<Link
					to='cricket'
					className={`text-xs font-medium  text-gray-400 border border-gray-700 px-2    ${
						location.pathname === "/sports/sporttables/cricket" && ""
					}`}
				>
					<div
						className={`flex items-center space-x-2 ${
							location.pathname === "/sport/sports/sporttables/cricket" &&
							"text-gray-300 border-gray-300 "
						} `}
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-cricket  '
								width='24'
								height='24'
								viewBox='0 0 24 24'
								stroke-width='2'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M11.105 18.79l-1.006 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617'></path>
								<path d='M10.5 7.5l6 6'></path>
								<circle cx='14' cy='18' r='3'></circle>
							</svg>
						</div>
						<div className=''>cricket</div>
					</div>
				</Link>

				<Link
					to='baseball'
					className={`text-xs font-medium space-x-2 text-gray-400 border border-gray-700 px-2   flex items-center ${
						location.pathname === "/sports/sporttables/baseball" &&
						"text-green-500"
					}`}
				>
					<div
						className={`flex items-center space-x-2 ${
							location.pathname === "/sport/sports/sporttables/baseball" &&
							"text-gray-300 border-gray-300 "
						} `}
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-cricket  '
								width='24'
								height='24'
								viewBox='0 0 24 24'
								stroke-width='2'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M11.105 18.79l-1.006 .992a4.159 4.159 0 0 1 -6.038 -5.715l.157 -.166l8.282 -8.401l1.5 1.5l3.45 -3.391a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-3.391 3.45l1.5 1.5l-3.668 3.617'></path>
								<path d='M10.5 7.5l6 6'></path>
								<circle cx='14' cy='18' r='3'></circle>
							</svg>
						</div>
						<div className=''>Baseball</div>
					</div>
				</Link>

				<Link
					to='tennisball'
					className={`text-xs font-medium space-x-2 text-gray-400 border border-gray-700 px-2   flex items-center ${
						location.pathname === "/sports/sporttables/tennisball" &&
						"text-green-500"
					}`}
				>
					<div
						className={`flex items-center space-x-2 ${
							location.pathname === "/sport/sports/sporttables/tennisball" &&
							"text-gray-300 border-gray-300 "
						} `}
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-ping-pong rotate-90'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								stroke-width='2'
								stroke='currentColor'
								fill='none'
								stroke-linecap='round'
								stroke-linejoin='round'
							>
								<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
								<path d='M12.718 20.713a7.64 7.64 0 0 1 -7.48 -12.755l.72 -.72a7.643 7.643 0 0 1 9.105 -1.283l2.387 -2.345a2.08 2.08 0 0 1 3.057 2.815l-.116 .126l-2.346 2.387a7.644 7.644 0 0 1 -1.052 8.864'></path>
								<circle cx='14' cy='18' r='3'></circle>
								<path d='M9.3 5.3l9.4 9.4'></path>
							</svg>
						</div>
						<div className=''>Tennisball</div>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default SportTitleBar;
