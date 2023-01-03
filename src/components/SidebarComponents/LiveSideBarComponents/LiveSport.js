import React, { useState } from "react";

function LiveSport() {
	const [show2, setShow2] = useState(true);
	const [cricketShow, setCricketShow] = useState(false);
	const [soccerShow, setSoccerShow] = useState(false);
	const [volleyShow, setVolleyShow] = useState(false);
	const [raceShow, setRaceShow] = useState(false);
	return (
		<div>
			<div className='p-4   w-full  bg-[#2C6CA7] '>
				<button
					className=' w-full flex  justify-between'
					onClick={() => {
						setShow2(!show2);
					}}
				>
					<div className='text-xs text-white space-x-2  font-bold flex uppercase'>
						<button>LiveSport</button>
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
							class={`w-4 h-4 text-white ${show2 && "rotate-180"}`}
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
						<div className='p-4   '>
							<button
								className=' w-full flex  justify-between text-sky-500'
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
							<div className='px-2 py-2 space-y-2 '>
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
								className=' w-full flex  justify-between text-sky-500'
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
							<div className='px-2 py-2 space-y-2 '>
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
								className=' w-full flex  justify-between text-sky-500'
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
							<div className='px-2 py-2 space-y-2 '>
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
										className=' w-full flex  justify-between text-sky-500'
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
								className=' w-full flex  justify-between text-sky-500'
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
							<div className='px-2 py-2 space-y-2 '>
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
										className=' w-full flex  justify-between '
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

export default LiveSport;
