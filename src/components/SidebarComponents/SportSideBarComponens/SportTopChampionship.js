import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SportTopChampionship(props) {
	const [show, setShow] = useState(true);
	const location = useLocation();

	return (
		<div>
			<div className='  '>
				<div className='p-4 bg-[#2C6CA7]   w-full  text-white '>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow(!show);
						}}
					>
						<div className='text-xs font-bold uppercase text-white'>
							<button>Top Champion</button>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class={`w-4 h-4 ${show && "rotate-180"}`}
							>
								<path
									stroke-linecap='round'
									stroke-linejoin='round'
									d='M19.5 8.25l-7.5 7.5-7.5-7.5'
								/>
							</svg>
						</div>
					</button>
				</div>
				{show && (
					<div>
						{/* {props.championship.map((E) => { */}
						{/* return ( */}
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold '>
								<div>
									<i class='fa-solid fa-futbol text-red-500'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/laliga" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/laliga'
										className={`text-xs font-bold text-sky-600 w-full h-full px-2 ${
											location.pathname === "/sport/sports/laliga" &&
											"text-green-500"
										}`}
									>
										La Liga
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-shirt text-violet-500'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/premiereleague" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/premiereleague'
										className={`text-xs font-bold text-sky-600  px-2 ${
											location.pathname === "/sport/sports/premiereleague" &&
											"text-green-500"
										}`}
									>
										Premiere League
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol text-green-400'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/seriesa" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/seriesa'
										className={`text-xs font-bold text-sky-600  px-2 ${
											location.pathname === "/sport/sports/seriesa" &&
											"text-green-500"
										}`}
									>
										Series A
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol bg-fuchsia-500'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/ligue1" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/ligue1'
										className={`text-xs font-bold text-sky-600  px-2 ${
											location.pathname === "/sport/sports/ligue1" &&
											"text-green-500"
										}`}
									>
										Ligue 1
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol text-rose-500'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/premieraleague" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/premieraleague'
										className={`text-xs font-bold text-sky-600  px-2 ${
											location.pathname === "/sport/sports/premieraleague" &&
											"text-green-500"
										}`}
									>
										Premiera Liga
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/bundesliga" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/bundesliga'
										className={`text-xs font-bold text-sky-600 px-2 ${
											location.pathname === "/sport/sports/bundesliga" &&
											"text-green-500"
										}`}
									>
										BundesLiga
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol text-sky-400'></i>
								</div>

								<div
									className={`${
										location.pathname === "/sport/sports/eredevisie" &&
										"  border border-red-400 -skew-y-6   "
									}`}
								>
									<Link
										to='/sport/sports/eredevisie'
										className={`text-xs font-bold text-sky-600  px-2 ${
											location.pathname === "/sport/sports/eredevisie" &&
											"text-green-500"
										}`}
									>
										Eridivisie
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol text-teal-500'></i>
								</div>

								<div>
									<Link to='#' className='text-sky-600'>
										NHL
									</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol text-violet-500'></i>
								</div>

								<div>
									<Link to='#' className='text-sky-600'>
										MLB
									</Link>
								</div>
							</div>
						</div>
						{/* ); */}
						{/* })} */}
					</div>
				)}
			</div>
		</div>
	);
}

export default SportTopChampionship;
