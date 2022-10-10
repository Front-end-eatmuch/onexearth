import React, { useState } from "react";

function SportTopEvents(props) {
	const [show2, setShow2] = useState(true);
	return (
		<div>
			<div className='w-56  xl:w-[15rem] bg-slate-100  '>
				<div className='p-4   w-full bg-gray-500 '>
					<button
						className=' w-full flex  justify-between'
						onClick={() => {
							setShow2(!show2);
						}}
					>
						<div className='text-xs font-bold uppercase'>
							<button>Top Events</button>
						</div>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								stroke-width='1.5'
								stroke='currentColor'
								class={`w-4 h-4 ${show2 && "rotate-180"}`}
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
										<div>{E.Title}</div>
									</div>
									<div className='px-4 flex space-x-2'>
										<div>
											<i class='fa-solid fa-shirt'></i>
										</div>
										<div>{E.TeamOne}</div>
									</div>
									<div className='px-4 flex space-x-2'>
										<div>
											<i class='fa-solid fa-shirt'></i>
										</div>
										<div>{E.TeamTwo}</div>
									</div>
									<div className='w-full h-8 bg-gray-300'></div>
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
