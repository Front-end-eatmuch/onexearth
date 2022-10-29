import React, { useContext } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { matchRoutes, useLocation } from "react-router";
import { Context } from "../context/Context";
function Navbar() {
	let location = useLocation();
	const { signupOpenHandler } = useContext(Context);

	// let newlocation = location.pathname.substr(0, 13);
	console.log(location.pathname.slice(0, 5));
	console.log();
	// console.log(location.pathname);
	return (
		<div className=''>
			<div className='flex   items-center bg-indigo-900 w-screen justify-between'>
				<div className='px-5'>
					<Link
						to='/live/livetables/home'
						className='text-xl font-bold text-white  '
					>
						OneXearth
					</Link>
				</div>
				<div className='flex  items-center justify-end'>
					<div className=' space-x-3 hidden lg:flex py-3'>
						<div className='bg-rose-700 px-2 py-1 rounded-lg '>
							<Link to='/sports' className='text-xs font-bold text-white  '>
								Mobile App
							</Link>
						</div>
						<Link
							to='/sports/sporttables/soccer'
							className={` font-bold text-neutral-400`}
						>
							<div
								className={`  py-1 flex  items-center  space-x-2 ${
									location.pathname.substr(0, 7) === "/sports"
										? "border-b-orange-500 border-b-2 text-white "
										: null
								} `}
							>
								<div>
									<i
										class={`fa-regular fa-futbol     text-neutral-400 ${
											location.pathname.substr(0, 7) === "/sports"
												? "text-orange-500"
												: null
										}`}
									></i>
								</div>
								<div className='text-xs'>Sport</div>
							</div>
						</Link>
						<Link
							to='/live/livetables/soccer'
							className=' font-bold text-neutral-400  '
						>
							<div
								className={`  py-1 flex items-center space-x-2  ${
									location.pathname.substr(0, 5) === "/live"
										? "border-b-orange-500 border-b-2 text-white "
										: null
								} `}
							>
								<div>
									<i
										class={`fa-sharp fa-solid fa-microphone-lines text-neutral-400 ${
											location.pathname.substr(0, 5) === "/live"
												? "text-orange-500  "
												: null
										}`}
									></i>
								</div>
								<div className='text-xs'>Live</div>
							</div>
						</Link>
						<Link to='/casino/all' className='font-bold text-neutral-400  '>
							<div
								className={`  py-1 flex items-center  space-x-2 ${
									location.pathname.slice(0, 8) === "/casino/"
										? "border-b-orange-500 border-b-2 text-white "
										: null
								} `}
							>
								<div>
									<i
										class={`fa-brands fa-bitcoin   text-neutral-400 ${
											location.pathname.slice(0, 8) === "/casino/"
												? "text-orange-500  "
												: null
										} `}
									></i>
								</div>
								<div className='text-xs '>Casino</div>
							</div>
						</Link>
						<Link
							to='/casino-live/all'
							className=' font-bold text-neutral-400  '
						>
							<div
								className={`  py-1 flex items-center  space-x-2 ${
									location.pathname.slice(0, 12) === "/casino-live"
										? "border-b-orange-500 border-b-2 text-white "
										: null
								} `}
							>
								<div>
									<i
										class={`fa-sharp fa-solid fa-heart-circle-bolt  text-neutral-400 ${
											location.pathname.slice(0, 12) === "/casino-live"
												? "text-orange-500  "
												: null
										}`}
									></i>
								</div>
								<div className='text-xs'>Live Casino</div>
							</div>
						</Link>
						<Link
							to='/promotion/all'
							className='text-xs font-bold text-neutral-400  '
						>
							<div
								className={`  py-1 flex items-center  space-x-2 ${
									location.pathname.slice(0, 10) === "/promotion"
										? "border-b-orange-500 border-b-2 text-white "
										: null
								} `}
							>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										class={`w-6 h-6 text-neutral-400 ${
											location.pathname.slice(0, 10) === "/promotion"
												? "text-orange-500  "
												: null
										}`}
									>
										<path d='M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z' />
									</svg>
								</div>
								<div className='text-xs'>Promo</div>
							</div>
						</Link>
					</div>

					<div className=' lg:hidden py-1 '>
						<div className='flex'>
							<div className='relative'>
								<Menu>
									<Menu.Button className='rounded-xl px-3 py-1  text-neutral-400'>
										<div className='flex items-center '>
											{/* <div>more</div> */}
											<div className='h-full py-1'>
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 24 24'
													fill='currentColor'
													class='w-8 h-8 font-bold'
												>
													<path
														fill-rule='evenodd'
														d='M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z'
														clip-rule='evenodd'
													/>
												</svg>
											</div>
										</div>
									</Menu.Button>
									<div className='absolute -right-48 w-72   md:w-96  '>
										<Menu.Items className='grid grid-cols-2 gap-3 text-xs font-bold py-2 px-4 bg-blue-800 rounded-lg'>
											<Menu.Item>
												{({ active }) => (
													<div
														className={`flex py-1 rounded-xl px-2   ${
															active && "bg-blue-500 text-white "
														}`}
													>
														<Link
															to='/sports/sporttables/soccer'
															className={` font-bold text-neutral-400 w-full`}
														>
															<div
																className={`  py-1 flex  items-center  space-x-2 ${
																	location.pathname.substr(0, 13) === "/sports"
																		? "border-b-orange-500 border-b-2 text-white "
																		: null
																} `}
															>
																<div>
																	<i
																		class={`fa-regular fa-futbol     text-neutral-400 ${
																			location.pathname.substr(0, 13) ===
																			"/sports"
																				? "text-orange-500"
																				: null
																		}`}
																	></i>
																</div>
																<div className='text-xs'>Sport</div>
															</div>
														</Link>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div
														className={`flex py-1 rounded-xl px-2    ${
															active && "bg-blue-500 text-white "
														}`}
													>
														<Link
															to='/live/livetables/soccer'
															className=' font-bold text-neutral-400 w-full  '
														>
															<div
																className={`  py-1 flex items-center space-x-2  ${
																	location.pathname.substr(0, 11) === "/live"
																		? "border-b-orange-500 border-b-2 text-white "
																		: null
																} `}
															>
																<div>
																	<i
																		class={`fa-sharp fa-solid fa-microphone-lines text-neutral-400 ${
																			location.pathname.substr(0, 11) ===
																			"/live"
																				? "text-orange-500  "
																				: null
																		}`}
																	></i>
																</div>
																<div className='text-xs'>Live</div>
															</div>
														</Link>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div
														className={`flex py-1 rounded-xl px-2    ${
															active && "bg-blue-500 text-white "
														}`}
													>
														<Link
															to='/casino/all'
															className='font-bold text-neutral-400 w-full '
														>
															<div
																className={`  py-1 flex items-center  space-x-2 ${
																	location.pathname.slice(0, 8) === "/casino/"
																		? "border-b-orange-500 border-b-2 text-white "
																		: null
																} `}
															>
																<div>
																	<i
																		class={`fa-brands fa-bitcoin   text-neutral-400 ${
																			location.pathname.slice(0, 8) ===
																			"/casino/"
																				? "text-orange-500  "
																				: null
																		} `}
																	></i>
																</div>
																<div className='text-xs '>Casino</div>
															</div>
														</Link>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div
														className={`flex py-1 rounded-xl px-2    ${
															active && "bg-blue-500 text-white "
														}`}
													>
														<Link
															to='/casino-live/all'
															className=' font-bold text-neutral-400  w-full  '
														>
															<div
																className={`  py-1 flex items-center  space-x-2 ${
																	location.pathname.slice(0, 12) ===
																	"/casino-live"
																		? "border-b-orange-500 border-b-2 text-white "
																		: null
																} `}
															>
																<div>
																	<i
																		class={`fa-sharp fa-solid fa-heart-circle-bolt  text-neutral-400 ${
																			location.pathname.slice(0, 12) ===
																			"/casino-live"
																				? "text-orange-500  "
																				: null
																		}`}
																	></i>
																</div>
																<div className='text-xs'>Live Casino</div>
															</div>
														</Link>
													</div>
												)}
											</Menu.Item>
											<Menu.Item>
												{({ active }) => (
													<div
														className={`flex py-1 rounded-xl px-2    ${
															active && "bg-blue-500 text-white "
														}`}
													>
														<Link
															to='/promotion/all'
															className='text-xs font-bold text-neutral-400 w-full  '
														>
															<div
																className={`  py-1 flex items-center  space-x-2 ${
																	location.pathname.slice(0, 10) ===
																	"/promotion"
																		? "border-b-orange-500 border-b-2 text-white "
																		: null
																} `}
															>
																<div>
																	<svg
																		xmlns='http://www.w3.org/2000/svg'
																		viewBox='0 0 24 24'
																		fill='currentColor'
																		class={`w-6 h-6 text-neutral-400 ${
																			location.pathname.slice(0, 10) ===
																			"/promotion"
																				? "text-orange-500  "
																				: null
																		}`}
																	>
																		<path d='M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z' />
																	</svg>
																</div>
																<div className='text-xs'>Promo</div>
															</div>
														</Link>
													</div>
												)}
											</Menu.Item>
										</Menu.Items>
									</div>
								</Menu>
							</div>
						</div>
					</div>
				</div>
				{false ? (
					<div className='flex space-x-3 text-white px-10'>
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
							<Link to='accountsetting/deposit'>Deposit</Link>
						</div>
					</div>
				) : (
					<div className='flex space-x-2 px-10 text-white font-bold'>
						{/* <div className='py-1 px-3 bg-lime-600  rounded-xl'>
							<Link to='#'>login</Link>
						</div> */}
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
											<div className='h-full '>login</div>
										</div>
									</Menu.Button>
									<div className='absolute  -right-24 w-64 mt-2'>
										<Menu.Items className='w-full  pt-10  pb-5  flex flex-col text-xs font-bold  bg-blue-800 rounded-3xl overflow-hidden'>
											<div className='w-full   '>
												<form className='w-full space-y-16'>
													<div className=' w-full px-4  space-y-5 '>
														{/* <label
															for='email'
															className='font-Yanone_Kaffeesatz font-bold  text-xl text-gray-700'
														>
															Username
														</label> */}
														<div className='flex items-center  overflow-hidden rounded-3xl border-2 border-white '>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-6 h-6'
																>
																	<path
																		fill-rule='evenodd'
																		d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<input
																type='text'
																id='email'
																placeholder='Username'
																className='bg-opacity-20 bg-gray-400  w-full'
																required
															></input>
														</div>
														<div className='flex items-center  overflow-hidden rounded-3xl border-2 border-white '>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-6 h-6'
																>
																	<path
																		fill-rule='evenodd'
																		d='M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z'
																		clip-rule='evenodd'
																	/>
																</svg>
															</div>
															<input
																type='password'
																id='email'
																placeholder='Password'
																className='bg-opacity-20 bg-gray-400  w-full'
																required
															></input>
														</div>
														<div className=''>
															<button className='w-full bg-slate-400  text-white py-3  rounded-3xl'>
																login
															</button>
														</div>
														<div className=''>
															<Link to='#'>forgot your password</Link>
														</div>
													</div>
													<div className='w-full flex justify-center '>
														<Link to='#'>Register</Link>
													</div>
												</form>
											</div>
										</Menu.Items>
									</div>
								</Menu>
							</div>
						</div>
						<div className='py-1 px-3 bg-orange-600 rounded-xl'>
							<button onClick={signupOpenHandler}>Signup</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default Navbar;
