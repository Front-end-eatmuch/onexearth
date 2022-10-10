import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { matchRoutes, useLocation } from "react-router";
function Navbar() {
	const location = useLocation();
	console.log(location.pathname);
	return (
		<div className=''>
			<div className='flex space-x-5 h-14 items-center bg-rose-900 w-screen justify-between'>
				<div className='px-10'>
					<Link to='/' className='text-xl font-bold text-white  '>
						OneXearth
					</Link>
				</div>
				<div className='flex space-x-5'>
					<div className='bg-rose-700 px-4 py-1 rounded-lg '>
						<Link to='/sport/sports' className='text-xs font-bold text-white  '>
							Mobile App
						</Link>
					</div>
					<div
						className={`  py-1 flex  items-center  space-x-2 ${
							location.pathname === "/sport/sports/sporttables"
								? "border-b-gray-200 border-b-2 "
								: null
						} `}
					>
						<div>
							<i class='fa-regular fa-futbol     text-neutral-400 '></i>
						</div>
						<Link
							to='/sport/sports/sporttables'
							className={`text-xs font-bold text-neutral-400`}
						>
							Sport
						</Link>
					</div>
					<div
						className={`  py-1 flex items-center space-x-2  ${
							location.pathname === "/sport/live/livetables"
								? "border-b-gray-200 border-b-2 "
								: null
						} `}
					>
						<div>
							<i class='fa-sharp fa-solid fa-microphone-lines text-neutral-400'></i>
						</div>
						<Link
							to='/sport/live/livetables'
							className='text-xs font-bold text-neutral-400  '
						>
							Live
						</Link>
					</div>

					<div
						className={`  py-1 flex items-center  space-x-2 ${
							location.pathname === "/casino/all"
								? "border-b-gray-200 border-b-2 "
								: null
						} `}
					>
						<div>
							<i class='fa-brands fa-bitcoin   text-neutral-400'></i>
						</div>
						<Link
							to='/casino/all'
							className='text-xs font-bold text-neutral-400  '
						>
							Casino
						</Link>
					</div>
					<div
						className={`  py-1 flex items-center  space-x-2 ${
							location.pathname === "/casino-live/all"
								? "border-b-gray-200 border-b-2 "
								: null
						} `}
					>
						<div>
							<i class='fa-sharp fa-solid fa-heart-circle-bolt  text-neutral-400'></i>
						</div>
						<Link
							to='/casino-live/all'
							className='text-xs font-bold text-neutral-400  '
						>
							Live Casino
						</Link>
					</div>
					<div className='  py-1 flex items-center  space-x-2'>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-6 h-6 text-neutral-400'
							>
								<path d='M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z' />
							</svg>
						</div>
						<Link
							to='/invoices'
							className='text-xs font-bold text-neutral-400  '
						>
							Promo
						</Link>
					</div>

					<div className='  py-1 '>
						<Link
							to='/invoices'
							className='text-xs font-bold text-neutral-400  '
						>
							More
						</Link>
					</div>
				</div>
				{false ? (
					<div className='flex space-x-3 text-white px-10'>
						<div className='px-3 py-1 bg-blue-800 rounded-xl'>EN</div>
						<div className='px-3 py-1 bg-blue-800 rounded-xl'>$0</div>
						<div className='flex'>
							<div className='relative'>
								<Menu>
									<Menu.Button className='rounded-xl px-3 py-1 bg-blue-800 text-white'>
										<div className='flex'>
											<div className='h-full py-1 font-extrabold'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													class='w-4 h-4'
												>
													<path
														fill-rule='evenodd'
														d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
														clip-rule='evenodd'
													/>
												</svg>
											</div>
											<div className='h-full py-1'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													fill='none'
													viewBox='0 0 24 24'
													stroke-width='1.5'
													stroke='currentColor'
													class='w-4 h-4'
												>
													<path
														stroke-linecap='round'
														stroke-linejoin='round'
														d='M19.5 8.25l-7.5 7.5-7.5-7.5'
													/>
												</svg>
											</div>
										</div>
									</Menu.Button>
									<div className='absolute  right-0 w-36 '>
										<Menu.Items className='flex flex-col text-xs font-bold py-2 bg-blue-800 rounded-lg'>
											<Menu.Item>
												{({ active }) => (
													<div className='text-gray-300 '>
														<div
															className={`flex py-1   ${
																active && "bg-blue-500 text-white "
															}`}
														>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-4 h-4'
																>
																	<path
																		fill-rule='evenodd'
																		d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<div>
																<Link
																	className={`px-3 py-1  `}
																	href='/account-settings'
																	to='setting/profile'
																>
																	Deposit
																</Link>
															</div>
														</div>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div className='text-gray-300 '>
														<div
															className={`flex py-1   ${
																active && "bg-blue-500 text-white "
															}`}
														>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-4 h-4'
																>
																	<path
																		fill-rule='evenodd'
																		d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<div>
																<Link
																	className={`px-3 py-1  `}
																	href='/account-settings'
																	to='setting/profile'
																>
																	Bonuses
																</Link>
															</div>
														</div>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div className='text-gray-300 '>
														<div
															className={`flex py-1   ${
																active && "bg-blue-500 text-white "
															}`}
														>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-4 h-4'
																>
																	<path
																		fill-rule='evenodd'
																		d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<div>
																<Link
																	className={`px-3 py-1  `}
																	href='/account-settings'
																	to='setting/profile'
																>
																	Coins
																</Link>
															</div>
														</div>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div className='text-gray-300 '>
														<div
															className={`flex py-1   ${
																active && "bg-blue-500 text-white "
															}`}
														>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-4 h-4'
																>
																	<path
																		fill-rule='evenodd'
																		d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<div>
																<Link
																	className={`px-3 py-1  `}
																	href='/account-settings'
																	to='setting/profile'
																>
																	Personal details
																</Link>
															</div>
														</div>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div className='text-gray-300 '>
														<div
															className={`flex py-1   ${
																active && "bg-blue-500 text-white "
															}`}
														>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-4 h-4'
																>
																	<path
																		fill-rule='evenodd'
																		d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.902 7.098a3.75 3.75 0 013.903-.884.75.75 0 10.498-1.415A5.25 5.25 0 008.005 9.75H7.5a.75.75 0 000 1.5h.054a5.281 5.281 0 000 1.5H7.5a.75.75 0 000 1.5h.505a5.25 5.25 0 006.494 2.701.75.75 0 00-.498-1.415 3.75 3.75 0 01-4.252-1.286h3.001a.75.75 0 000-1.5H9.075a3.77 3.77 0 010-1.5h3.675a.75.75 0 000-1.5h-3c.105-.14.221-.274.348-.402z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<div>
																<Link
																	className={`px-3 py-1  `}
																	href='/account-settings'
																	to='setting/profile'
																>
																	Mybet
																</Link>
															</div>
														</div>
													</div>
												)}
											</Menu.Item>
										</Menu.Items>
									</div>
								</Menu>
							</div>
						</div>
						<div className='bg-orange-500 px-3 py-1 rounded-3xl'>
							<Link to='#'>Deposit</Link>
						</div>
					</div>
				) : (
					<div className='flex space-x-2 px-10 text-white font-bold'>
						<div className='py-1 px-3 bg-lime-600  rounded-xl'>
							<Link to='#'>login</Link>
						</div>
						<div className='py-1 px-3 bg-orange-600 rounded-xl'>
							<Link to='#'>Signup</Link>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
