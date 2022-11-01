import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function CasinoTitleBar() {
	let location = useLocation();
	const [casinoData, setCasinoData] = useState([
		{
			id: 1,
			DataTitle: ["caribean", "color", "category", "price"],
			Data: [
				{
					name: "Apple",
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: "Appb",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 2,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 3,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 4,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 5,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 6,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 7,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 8,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 9,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
	]);
	return (
		<div className='  w-full flex justify-between px-5 '>
			<div className='relative'>
				<Menu>
					<Menu.Button className='rounded-lg px-3 py-2 bg-[#4D668F]  text-neutral-400'>
						<div className='flex items-center space-x-4  '>
							{/* <div>more</div> */}
							<div>Providers</div>
							<div className='h-full '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-2 h-2 font-extrabold text-white'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M4.5 15.75l7.5-7.5 7.5 7.5'
									/>
								</svg>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-2 h-2 font-extrabold text-white'
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
					<div className='absolute  left-8 top-10 z-50 w-80 h-small2 overflow-y-scroll rounded-lg  '>
						<Menu.Items className=' py-10 text-xs w-full  flex justify-center items-center bg-ShaBlue2-300 font-bold  '>
							<div className=' grid gap-2 grid-cols-2'>
								{casinoData.map(() => {
									return <div className='h-32 w-32 bg-slate-400'></div>;
								})}
							</div>
						</Menu.Items>
					</div>
				</Menu>
			</div>
			<div className=' flex justify-center  text-white'>Games</div>
			<div className='  '>
				<div className='flex'>
					<div className='relative'>
						<Menu>
							<Menu.Button className='rounded-lg px-3 py-2 bg-[#4D668F]  text-neutral-400'>
								<div className='flex items-center space-x-4   '>
									{/* <div>more</div> */}
									<div>tags</div>
									<div className='h-full '>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-2 h-2 font-extrabold text-white'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M4.5 15.75l7.5-7.5 7.5 7.5'
											/>
										</svg>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-2 h-2 font-extrabold text-white'
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
							<div className='absolute right-8 z-50 w-64   md:w-80  '>
								<Menu.Items className='grid grid-cols-2 gap-3 text-xs  py-10 bg-ShaBlue2-300 font-bold px-4 bg- rounded-lg'>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='all' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/all"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														All
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='popular' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/popular"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														Promotion
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='slots' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/slots"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														Slots
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='bonusbuy' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/bonusbuy"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														BonusBuy
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='jackpot' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/jackpot"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														Jackpot
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='newgame' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/newgame"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														Newgame
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='other' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/other"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														Other
													</div>
												</Link>
											</div>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<div>
												<Link to='other' className='w-full h-full'>
													<div
														className={` font-bold  w-full h-full py-3 text-center  rounded-md ${
															location.pathname === "/casino/other"
																? "bg-fuchsia-700 text-white "
																: "bg-ShaBlue2-200  text-neutral-400 "
														}`}
													>
														Slots
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
	);
}

export default CasinoTitleBar;
