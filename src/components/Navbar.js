import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";
function Navbar() {
	return (
		<div className=''>
			<div className='flex space-x-5 h-14 items-center bg-stone-200 w-screen'>
				<div className='px-10'>
					<Link to='/' className='text-xs font-bold text-black  '>
						Onexearth
					</Link>
				</div>
				<div className='flex space-x-10'>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Sport
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Live
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Cricket
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Promo
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Casino
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Live Casino
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							Esport
						</Link>
					</div>
					<div>
						<Link to='/invoices' className='text-xs font-bold text-black  '>
							More
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
