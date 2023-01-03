import React, { useContext, useState } from "react";
import { Context } from "../context/Context";
import ReactPlayer from "react-player";

function Betslip() {
	const { betslip, deleteBetSlip, deleteAllBetSlip } = useContext(Context);
	const [sure, setSure] = useState(false);
	// console.log(betslip);
	const sureHandler = () => {
		deleteAllBetSlip();
		setSure(false);
	};

	return (
		<div className=' w-full bg-[] h-full overflow-y-scroll   '>
			<div className='h-full   lg:w-full   space-y-4 rounded-2xl'>
				<div className='px-4 flex space-x-2 py-3  text-white bg-[#4B88B9] items-center'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-4 h-4'
						>
							<path
								fill-rule='evenodd'
								d='M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 01-.517.608 7.45 7.45 0 00-.478.198.798.798 0 01-.796-.064l-.453-.324a1.875 1.875 0 00-2.416.2l-.243.243a1.875 1.875 0 00-.2 2.416l.324.453a.798.798 0 01.064.796 7.448 7.448 0 00-.198.478.798.798 0 01-.608.517l-.55.092a1.875 1.875 0 00-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 01-.064.796l-.324.453a1.875 1.875 0 00.2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 01.796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 01.517-.608 7.52 7.52 0 00.478-.198.798.798 0 01.796.064l.453.324a1.875 1.875 0 002.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 01-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 001.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 01-.608-.517 7.507 7.507 0 00-.198-.478.798.798 0 01.064-.796l.324-.453a1.875 1.875 0 00-.2-2.416l-.243-.243a1.875 1.875 0 00-2.416-.2l-.453.324a.798.798 0 01-.796.064 7.462 7.462 0 00-.478-.198.798.798 0 01-.517-.608l-.091-.55a1.875 1.875 0 00-1.85-1.566h-.344zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
					<div className='font-bold text-xs'>
						<button>SETTINGS</button>
					</div>
				</div>
				<div className='relative bg-white    '>
					{sure && (
						<div className='absolute right-0 top-0 bottom-0 left-0 bg-opacity-90 bg-slate-400'>
							<div className='w-full h-full flex  justify-center items-center  '>
								<div className='w-full bg-white space-y-2 py-5 rounded-md '>
									<div className='w-full text-center font-extrabold'>
										Delete all outcomes
									</div>
									<div className='text-xs text-center text-gray-600'>
										do you really want to delete all outcome
									</div>
									<div className='w-full flex justify-between px-5'>
										<button
											className=' px-5 rounded-2xl bg-green-400'
											onClick={sureHandler}
										>
											yes
										</button>
										<button
											className='py-1 px-4 border-2 rounded-2xl border-black'
											onClick={() => {
												setSure(false);
											}}
										>
											no
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
					<div className='px-4 flex space-x-2 py-4  text-sky-600 items-center justify-between'>
						<div className='font-bold text-xs'>
							<button>Bet Slip</button>
						</div>
						<div
							className='cursor-pointer'
							onClick={() => {
								setSure(!sure);
							}}
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-4 h-4'
							>
								<path
									fill-rule='evenodd'
									d='M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z'
									clip-rule='evenodd'
								/>
							</svg>
						</div>
					</div>
					<div
						className={`w-full space-y-1  py-2  ${
							betslip.length === 0 ? "h-40" : "h-full"
						}`}
					>
						{betslip.map((v) => {
							return (
								<div className='cursor-pointer  bg-fuchsia-800 text-gray-600 py-2 px-2'>
									<div
										className='w-full flex justify-end'
										onClick={() => deleteBetSlip(v.name, v.value, v.rowid)}
									>
										<div className=' bg-ShaBlue-700 '>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												viewBox='0 0 24 24'
												fill='currentColor'
												class='w-4 h-4  text-white'
											>
												<path
													fill-rule='evenodd'
													d='M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z'
													clip-rule='evenodd'
												/>
											</svg>
										</div>
									</div>
									<div className='flex px-4 items-center space-x-2 w-full'>
										<div className='flex flex-col text-sm break-all text-gray-300'>
											{v.name}
										</div>
										<div className='text-sm   text-black'>{v.value}</div>
									</div>

									{/* <div className='px-4'>{v.rowid}</div> */}
								</div>
							);
						})}
					</div>
					<div className='w-full h-16 rounded-b-xl font-light text-gray-400'>
						Total
					</div>
				</div>
				<div>
					<div className='!h-32 !w-full'>
						<ReactPlayer
							url='https://youtu.be/Vhn2RkoWTgw'
							className=''
							width='100%'
							height='100%'
							controls='false'
							muted
							playing
							loop
						></ReactPlayer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Betslip;
