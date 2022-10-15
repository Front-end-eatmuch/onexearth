import React from "react";
import { Link } from "react-router-dom";

function CasinoSideBar() {
	return (
		<div className=' w-64 rounded-2xl p-2 bg-white '>
			<div className='w-full pt-10   bg-white rounded-2xl'>
				<div className=' w-full text-center  '>CasinoSideBar</div>
				<div className='w-full px-6 pt-10'>
					<div className='grid grid-cols-2'>
						<div>
							<Link
								to='all'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								All
							</Link>
						</div>
						<div>
							<Link
								to='popular'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Popular
							</Link>
						</div>
						<div>
							<Link
								to='newgame'
								className='text-xs font-bold text-gray-400 hover:text-gray-100   '
							>
								Newgame
							</Link>
						</div>
						<div>
							<Link
								to='slots'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Slot
							</Link>
						</div>
						<div>
							<Link
								to='bonusbuy'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Bonusbuy
							</Link>
						</div>
						<div>
							<Link
								to='jackpot'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								jackpot
							</Link>
						</div>
						<div>
							<Link
								to='other'
								className='text-xs font-bold text-gray-400 hover:text-gray-100   '
							>
								Other
							</Link>
						</div>
						<div>
							<Link
								to='#'
								className='text-xs font-bold text-gray-400 hover:text-gray-100   '
							>
								null
							</Link>
						</div>
						<div>
							<Link
								to='/invoices'
								className='text-xs font-bold text-gray-400 hover:text-gray-100   '
							>
								null
							</Link>
						</div>
						<div>
							<Link
								to='/invoices'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Cricket
							</Link>
						</div>
						<div>
							<Link
								to='/invoices'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Cricket
							</Link>
						</div>
						<div>
							<Link
								to='/invoices'
								className='text-xs font-bold text-gray-400 hover:text-gray-100 '
							>
								Cricket
							</Link>
						</div>
						<div>
							<Link
								to='/invoices'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Cricket
							</Link>
						</div>
						<div>
							<Link
								to='/invoices'
								className='text-xs font-bold text-gray-400 hover:text-gray-100  '
							>
								Cricket
							</Link>
						</div>
					</div>
				</div>
				<div className='w-full text-center mt-5 space-y-4 px-4'>
					<div className='text-center py-2 bg-gray-300 rounded-2xl '>
						providers
					</div>
					<div className='grid grid-cols-2 gap-y-2 h-small1 overflow-y-scroll'>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
						<div className='w-32 h-32 bg-slate-400'></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CasinoSideBar;
