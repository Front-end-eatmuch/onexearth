import React, { useState } from "react";
import { Link } from "react-router-dom";

function SportPopularSports(props) {
	const [show2, setShow2] = useState(true);
	return (
		<div>
			<div className='p-4   w-full bg-gray-500 '>
				<button
					className=' w-full flex  justify-between'
					onClick={() => {
						setShow2(!show2);
					}}
				>
					<div className='text-xs font-bold uppercase'>
						<button>LiveSport</button>
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

export default SportPopularSports;
