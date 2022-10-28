import React, { useState } from "react";

function LiveSport() {
	const [show1, setShow1] = useState(true);
	const [show2, setShow2] = useState(true);
	return (
		<div className='w-full'>
			{" "}
			<div className='p-4   w-full bg-indigo-900 text-white '>
				<button
					className=' w-full flex  justify-between'
					onClick={() => {
						setShow1(!show1);
					}}
				>
					<div className='flex space-x-4 text-xs font-bold uppercase'>
						<button>LiveSport</button>
						<div className=' px-3 bg-red-600 rounded-xl text-center'>live</div>
					</div>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							stroke-width='1.5'
							stroke='currentColor'
							class={`w-4 h-4 ${show1 && "rotate-180"}`}
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
					{" "}
					<div className='p-4   w-full bg-gray-200 '>
						<button
							className=' w-full flex  justify-between'
							onClick={() => {
								setShow2(!show2);
							}}
						>
							<div className='text-xs font-bold uppercase'>
								<button>Cricket</button>
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
					<div className='p-4   w-full bg-gray-200 '>
						<button
							className=' w-full flex  justify-between'
							onClick={() => {
								setShow2(!show2);
							}}
						>
							<div className='text-xs font-bold uppercase'>
								<button>Soccer</button>
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
					<div className='p-4   w-full bg-gray-200 '>
						<button
							className=' w-full flex  justify-between'
							onClick={() => {
								setShow2(!show2);
							}}
						>
							<div className='text-xs font-bold uppercase'>
								<button>Volleball</button>
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
					<div className='p-4   w-full bg-gray-200 '>
						<button
							className=' w-full flex  justify-between'
							onClick={() => {
								setShow2(!show2);
							}}
						>
							<div className='text-xs font-bold uppercase'>
								<button>Race</button>
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
				</div>
			)}
		</div>
	);
}

export default LiveSport;
