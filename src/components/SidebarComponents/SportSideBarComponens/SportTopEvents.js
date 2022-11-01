import React, { useState } from "react";

function SportTopEvents(props) {
	const [show2, setShow2] = useState(true);
	return (
		<div className='w-full'>
			<div className='  '>
				<div className='p-4   w-full  text-white '>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow2(!show2);
						}}
					>
						<div className='flex space-x-2 text-xs font-bold uppercase'>
							<button className='lg:font-bold'>Top Events</button>
						</div>

						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class={`lg:w-4 lg:h-4 w-3 h-3 ${show2 && "rotate-180"}`}
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
				{show2 && (
					<div>
						{props.topSportEvents.map((E) => {
							return (
								<div className=' pt-2 text-xs font-semibold'>
									<div className=' px-4 flex space-x-2 mb-2 font-extrabold'>
										<div>
											<i class='fa-solid fa-futbol'></i>
										</div>
										<div>T</div>
										<div className='text-white'>{E.Title}</div>
									</div>
									<div className='px-4 flex space-x-2'>
										<div>
											<i class='fa-solid fa-shirt text-green-600'></i>
										</div>
										<div className='text-gray-400'>{E.TeamOne}</div>
									</div>
									<div className='px-4 flex space-x-2'>
										<div className=''>
											<i class='fa-solid fa-shirt text-red-600'></i>
										</div>
										<div className='text-gray-400'>{E.TeamTwo}</div>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
}

export default SportTopEvents;
