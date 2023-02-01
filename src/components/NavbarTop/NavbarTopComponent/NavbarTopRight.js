import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../../context/Context";
import { Menu } from "@headlessui/react";
import Betslip from "../../Betslip";

function NavbarTopRight() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	const [navSide, setNavSide] = useState(true);
	const { signupOpenHandler } = useContext(Context);
	return (
		<div className='h-full pr-10'>
			<div className='flex h-full'>
				{false ? (
					<div className='flex space-x-3 text-white px-2'>
						<div className='flex'>
							<div className='relative'>
								<Menu>
									<Menu.Button className='rounded-xl px-3 py-2 bg-blue-800 text-white'>
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
						<div className='bg-orange-500 px-3 py-2 rounded-xl'>
							<Link to='accountsetting/personaldetails'>Deposit</Link>
						</div>
					</div>
				) : (
					<div className='flex space-x-2 px-2 h-full text-white font-bold'>
						{/* <div className='py-1 px-3 bg-lime-600  rounded-xl'>
							<Link to='#'>login</Link>
						</div> */}
						<div className='flex'>
							<div className='relative'>
								<Menu>
									<Menu.Button className=' px-3 h-full  text-white'>
										<div className='flex'>
											<div className='h-full font-normal '>login</div>
										</div>
									</Menu.Button>
									<div className='absolute  -right-24 w-64 mt-2'>
										<Menu.Items className='w-full  pt-10  pb-5  flex flex-col text-xs font-bold shadow-2xl  bg-white rounded-xl overflow-hidden'>
											<div className='w-full   '>
												<form className='w-full space-y-16'>
													<div className=' w-full px-4  space-y-5 '>
														{/* <label
															for='email'
															className='font-Yanone_Kaffeesatz font-bold  text-xl text-gray-700'
														>
															Username
														</label> */}
														<div className='flex items-center  overflow-hidden rounded-lg border-2 border-black '>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-6 h-6  text-black'
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
																className='bg-opacity-20 text-xs  border-l-0 bg-gray-400  w-full'
																required
															></input>
														</div>
														<div className='flex items-center  overflow-hidden rounded-lg border-2 border-black '>
															<div>
																<svg
																	xmlns='http://www.w3.org/2000/svg'
																	viewBox='0 0 24 24'
																	fill='currentColor'
																	class='w-6 h-6  text-black'
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
																className='bg-opacity-20 border-l-0 text-xs bg-gray-400  w-full'
																required
															></input>
														</div>
														<div className=''>
															<button className='w-full bg-ShaBlue2-700  text-white py-3  rounded-lg'>
																login
															</button>
														</div>
														<div className=' text-black'>
															<Link to='#'>forgot your password</Link>
														</div>
													</div>
													<div className='w-full flex justify-center  text-black '>
														<Link to='#'>Register</Link>
													</div>
												</form>
											</div>
										</Menu.Items>
									</div>
								</Menu>
							</div>
						</div>
						<div className=' px-2 bg-green-600  flex items-center font-normal'>
							<button onClick={signupOpenHandler}>Registration</button>
						</div>
					</div>
				)}
				<div>
					<div
						className=' cursor-pointer relative xl:hidden  '
						onClick={() => {
							setOpen(!open);
						}}
					>
						<i class='fa-solid fa-square-caret-left font-extrabold text-3xl text-ShaBlue2-100'></i>
					</div>

					<div
						className={` absolute w-64  z-50  lg:hidden duration-200 right-0 top-16    ${
							open ? "translate-x-0" : "translate-x-full "
						}`}
					>
						<div className='  '>
							<div className=''>
								<Betslip />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavbarTopRight;
