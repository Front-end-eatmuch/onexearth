import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SportTopChampionship(props) {
	const [show, setShow] = useState(true);
	const location = useLocation();

	return (
		<div>
			<div className='  bg-slate-100 shadow-xl '>
				<div className='p-4   w-full bg-indigo-900 text-white '>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow(!show);
						}}
					>
						<div className='text-xs font-bold uppercase'>
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
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link
										to='/sports/laliga'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/laliga" && "text-green-500"
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
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link
										to='/sports/premiereleague'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/premiereleague" &&
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
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link
										to='/sports/seriesa'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/seriesa" &&
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
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link
										to='/sports/ligue1'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/ligue1" && "text-green-500"
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
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link
										to='/sports/premieraleague'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/premieraleague" &&
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

								<div>
									<Link
										to='/sports/bundesliga'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/bundesliga" &&
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
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link
										to='/sports/eredevisie'
										className={`text-xs font-bold text-black ${
											location.pathname === "/sports/eredevisie" &&
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
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link to='#'>NHL</Link>
								</div>
							</div>
						</div>
						<div className=' pt-2 text-xs font-semibold'>
							<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
								<div>
									<i class='fa-solid fa-futbol'></i>
								</div>

								<div>
									<Link to='#'>MLB</Link>
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
