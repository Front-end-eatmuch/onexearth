import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className=''>
			<div className='flex space-x-5 h-14 items-center bg-rose-900 w-screen'>
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
					<div className='  py-1 '>
						<Link
							to='/sport/sports'
							className='text-xs font-bold text-neutral-400  '
						>
							Sport
						</Link>
					</div>
					<div className='  py-1 '>
						<Link
							to='/sport/live'
							className='text-xs font-bold text-neutral-400  '
						>
							Live
						</Link>
					</div>
					<div className='  py-1 '>
						<Link
							to='/invoices'
							className='text-xs font-bold text-neutral-400  '
						>
							Cricket
						</Link>
					</div>
					<div className='  py-1 '>
						<Link
							to='/invoices'
							className='text-xs font-bold text-neutral-400  '
						>
							Promo
						</Link>
					</div>
					<div className='  py-1 '>
						<Link
							to='/casino/all'
							className='text-xs font-bold text-neutral-400  '
						>
							Casino
						</Link>
					</div>
					<div className='  py-1 '>
						<Link
							to='/casino-live/all'
							className='text-xs font-bold text-neutral-400  '
						>
							Live Casino
						</Link>
					</div>
					<div className='  py-1 '>
						<Link
							to='/invoices'
							className='text-xs font-bold text-neutral-400  '
						>
							Esport
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
			</div>
		</div>
	);
}

export default Navbar;
