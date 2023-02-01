import React, { useContext, useState } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
import { matchRoutes, useLocation } from "react-router";
import { Context } from "../../context/Context";
import Betslip from "../Betslip";
import { Sidebar } from "flowbite-react";
import NavSideBar from "../NavSideBar";
import SportLink from "./NavBarComponent/SportLink";
import LiveLink from "./NavBarComponent/LiveLink";
import ResultLink from "./NavBarComponent/ResultLink";
import TotoLink from "./NavBarComponent/TotoLink";
function Navbar() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	const [navSide, setNavSide] = useState(true);
	const { signupOpenHandler } = useContext(Context);

	// let newlocation = location.pathname.substr(0, 13);
	console.log(location.pathname.slice(0, 5));
	console.log();
	// console.log(location.pathname);
	return (
		<div className=''>
			<div className='flex py-1   items-center bg-[#1A5683] w-screen '>
				<div className='flex px-2 '>
					<div className='cursor-pointer relative'>
						<div className='' onClick={() => setNavSide(!navSide)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-tools-kitchen-2-off rotate-90 text-white'
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
								<path d='M14.386 10.409c.53 -2.28 1.766 -4.692 4.614 -7.409v12m-4 0h-1c-.002 -.313 -.002 -.627 .002 -.941'></path>
								<path d='M19 19v2h-1v-3'></path>
								<path d='M8 8v13'></path>
								<path d='M5 5v2a3 3 0 0 0 4.546 2.572m1.454 -2.572v-3'></path>
								<path d='M3 3l18 18'></path>
							</svg>
						</div>
						{
							<div
								className={`absolute transform duration-300 right-7 top-10   ${
									navSide ? "-translate-x-7" : "translate-x-full"
								}`}
							>
								<NavSideBar />
							</div>
						}
					</div>

					<div className='px-2'>
						<Link to='/' className='text-xl font-bold text-white  '>
							OneXearth
						</Link>
					</div>
				</div>

				<div className='w-full flex  items-center justify-center'>
					<div className=' space-x-6 flex '>
						{/* <div className='bg-rose-700 px-2 py-1 rounded-lg '>
							<Link to='/sports' className='text-xs font-bold text-white  '>
								Mobile App
							</Link>
						</div> */}

						<SportLink />

						<LiveLink />
						<TotoLink />
						<ResultLink />

						{/* <Link to='/casino/all' className='font-bold text-white  '>
							<div
								className={`  py-1 flex items-center  space-x-2 ${
									location.pathname.slice(0, 8) === "/casino/"
										? " text-neutral-400 "
										: null
								} `}
							>
								<div className='text-md font-semibold hidden md:flex '>
									Casino
								</div>
							</div>
						</Link> */}
						{/* <Link
							to='/casino-live/all'
							className='font-bold text-white hidden lg:block '
						>
							<div
								className={`  py-1 flex items-center  space-x-2 ${
									location.pathname.slice(0, 13) === "/casino-live/"
										? " text-neutral-400 "
										: null
								} `}
							>
								<div className='text-md font-semibold '>Live Casino</div>
							</div>
						</Link>
						<Link
							to='/promotion/all'
							className='  text-white  hidden lg:block '
						>
							<div
								className={`  py-1 flex items-center  space-x-2 ${
									location.pathname.slice(0, 10) === "/promotion"
										? " text-neutral-400 "
										: null
								} `}
							>
								<div className='text-md font-semibold'>Promotion</div>
							</div>
						</Link> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
