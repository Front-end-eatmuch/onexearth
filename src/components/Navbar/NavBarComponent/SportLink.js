import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "@headlessui/react";

function SportLink() {
	let location = useLocation();
	const [open, setOpen] = useState(false);
	return (
		<div
			className={`  py-1 flex text-white items-center relative space-x-2 ${
				location.pathname.substr(0, 13) === "/sport/sports"
					? " text-neutral-400 "
					: null
			} `}
			onMouseEnter={() => setOpen(!open)}
			onMouseLeave={() => setOpen(!open)}
		>
			<div className='flex items-center space-x-1'>
				<Link
					to='/sport/sports/sporttables/soccer'
					className={`z-20 font-bold `}
				>
					<div className='text-md font-semibold     '>Sport</div>
				</Link>
				<div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						stroke-width='1.5'
						stroke='currentColor'
						class={`w-4 h-4 ${open ? "rotate-180 duration-300" : null}`}
					>
						<path
							stroke-linecap='round'
							stroke-linejoin='round'
							d='M19.5 8.25l-7.5 7.5-7.5-7.5'
						/>
					</svg>
				</div>
			</div>

			<div
				className={`absolute top-8 right-0 -translate-x-1 px-4 py-4 bg-white text-black ${
					open ? "block" : "hidden"
				}`}
			>
				<div>itemone</div>
				<div>itemone</div>
				<div>itemone</div>
				<div>itemone</div>
			</div>
		</div>
	);
}

export default SportLink;
