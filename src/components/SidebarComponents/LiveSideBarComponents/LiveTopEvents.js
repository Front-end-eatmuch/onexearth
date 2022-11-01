import React, { useState } from "react";

function LiveTopEvents(props) {
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
							<div className=' '>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									stroke-width='1.5'
									stroke='currentColor'
									class='w-6 h-6 text-red-600'
								>
									<path
										stroke-linecap='round'
										stroke-linejoin='round'
										d='M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
									/>
								</svg>
							</div>
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

export default LiveTopEvents;
