import React, { useState } from "react";
import { Link } from "react-router-dom";

function SportPopularSports(props) {
	const [show2, setShow2] = useState(true);
	const [cricketShow, setCricketShow] = useState(false);
	const [soccerShow, setSoccerShow] = useState(false);
	const [volleyShow, setVolleyShow] = useState(false);
	const [raceShow, setRaceShow] = useState(false);
	return (
		<div>
			<div className='p-4 bg-[#2C6CA7]   w-full  text-white '>
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
					<div>
						<div className='p-4   w-full  '>
							<button
								className=' w-full flex  justify-between'
								onClick={() => {
									setCricketShow(!cricketShow);
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
										class={`w-4 h-4 ${cricketShow && "rotate-180"}`}
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
						{cricketShow && (
							<div className='px-2 py-2 space-y-2 bg-white'>
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>Australia</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>india</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>America</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>south africa</button>
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
					<div>
						<div className='p-4   w-full  '>
							<button
								className=' w-full flex  justify-between'
								onClick={() => {
									setSoccerShow(!soccerShow);
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
										class={`w-4 h-4 ${soccerShow && "rotate-180"}`}
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
						{soccerShow && (
							<div className='px-2 py-2 space-y-2 bg-white'>
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>Australia</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>india</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>America</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>south africa</button>
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
					<div>
						<div className='p-4   w-full  '>
							<button
								className=' w-full flex  justify-between'
								onClick={() => {
									setVolleyShow(!volleyShow);
								}}
							>
								<div className='text-xs font-bold uppercase'>
									<button>Volley</button>
								</div>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										stroke-width='1.5'
										stroke='currentColor'
										class={`w-4 h-4 ${volleyShow && "rotate-180"}`}
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
						{volleyShow && (
							<div className='px-2 py-2 space-y-2 bg-white'>
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>Australia</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>india</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>America</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>south africa</button>
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
					<div>
						<div className='p-4   w-full  '>
							<button
								className=' w-full flex  justify-between'
								onClick={() => {
									setRaceShow(!raceShow);
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
										class={`w-4 h-4 ${raceShow && "rotate-180"}`}
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
						{raceShow && (
							<div className='px-2 py-2 space-y-2 bg-white'>
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>Australia</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>india</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>America</button>
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
								<div className='p-4   w-full '>
									<button
										className=' w-full flex  justify-between'
										onClick={() => {}}
									>
										<div className='text-xs font-bold uppercase  space-x-2'>
											<i class='fa-sharp fa-solid fa-flag-checkered'></i>
											<button>south africa</button>
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
				</div>
			)}
		</div>
	);
}

export default SportPopularSports;
