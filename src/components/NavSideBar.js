import React from "react";
import { Link } from "react-router-dom";

function NavSideBar() {
	return (
		<div className='w-64 h-screen bg-ShaBlue2-700 py-10 space-y-5'>
			<div className='w-full space-y-5 px-3 pb-10'>
				<Link className='w-full flex space-x-4 items-center ' to=''>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6 text-sky-200'
						>
							<path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
							<path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Home</div>
				</Link>

				<Link className='w-full flex space-x-4' to='/casino/all'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='icon icon-tabler icon-tabler-cherry   text-sky-200'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							stroke-width='2'
							stroke='currentColor'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
							<circle cx='7.5' cy='16.5' r='3.5'></circle>
							<circle cx='17' cy='18' r='3'></circle>
							<path d='M9 13c.366 -2.006 1.866 -3.873 4.5 -5.6'></path>
							<path d='M17 15c-1.333 -2.333 -2.333 -5.333 -1 -9'></path>
							<path d='M5 6c3.667 -2.667 7.333 -2.667 11 0c-3.667 2.667 -7.333 2.667 -11 0'></path>
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Games</div>
				</Link>
				<Link
					className='w-full flex space-x-4 items-center '
					to='/sport/sports/sporttables/soccer'
				>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='icon icon-tabler icon-tabler-shoe w-6 h-6 text-green-200'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							stroke-width='2'
							stroke='currentColor'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
							<path d='M4 6h5.426a1 1 0 0 1 .863 .496l1.064 1.823a3 3 0 0 0 1.896 1.407l4.677 1.114a4 4 0 0 1 3.074 3.89v2.27a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1z'></path>
							<path d='M14 13l1 -2'></path>
							<path d='M8 18v-1a4 4 0 0 0 -4 -4h-1'></path>
							<path d='M10 12l1.5 -3'></path>
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Sport</div>
				</Link>
				<Link
					className='w-full flex space-x-4 items-center '
					to='/sport/live/livetables/soccer'
				>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6 text-red-600'
						>
							<path
								fill-rule='evenodd'
								d='M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Live</div>
				</Link>
				<Link className='w-full flex space-x-4' to='/casino-live/all'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							class='icon icon-tabler icon-tabler-cards text-sky-200'
							width='24'
							height='24'
							viewBox='0 0 24 24'
							stroke-width='2'
							stroke='currentColor'
							fill='none'
							stroke-linecap='round'
							stroke-linejoin='round'
						>
							<path stroke='none' d='M0 0h24v24H0z' fill='none'></path>
							<path d='M3.604 7.197l7.138 -3.109a0.96 .96 0 0 1 1.27 .527l4.924 11.902a1.004 1.004 0 0 1 -.514 1.304l-7.137 3.109a0.96 .96 0 0 1 -1.271 -.527l-4.924 -11.903a1.005 1.005 0 0 1 .514 -1.304z'></path>
							<path d='M15 4h1a1 1 0 0 1 1 1v3.5'></path>
							<path d='M20 6c.264 .112 .52 .217 .768 .315a1 1 0 0 1 .53 1.311l-2.298 5.374'></path>
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Live Casino</div>
				</Link>
				<Link className='w-full flex space-x-4' to='/promotion/all'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6 text-sky-200'
						>
							<path d='M9.375 3a1.875 1.875 0 000 3.75h1.875v4.5H3.375A1.875 1.875 0 011.5 9.375v-.75c0-1.036.84-1.875 1.875-1.875h3.193A3.375 3.375 0 0112 2.753a3.375 3.375 0 015.432 3.997h3.943c1.035 0 1.875.84 1.875 1.875v.75c0 1.036-.84 1.875-1.875 1.875H12.75v-4.5h1.875a1.875 1.875 0 10-1.875-1.875V6.75h-1.5V4.875C11.25 3.839 10.41 3 9.375 3zM11.25 12.75H3v6.75a2.25 2.25 0 002.25 2.25h6v-9zM12.75 12.75v9h6.75a2.25 2.25 0 002.25-2.25v-6.75h-9z' />
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Promotion</div>
				</Link>
				<Link className='w-full flex space-x-4' to='/promotion/vip'>
					<div>
						<i class='fa-solid fa-medal text-xl text-sky-200'></i>
					</div>
					<div className='font-normal text-md text-gray-300'>Vip</div>
				</Link>
				<Link className='w-full flex space-x-4'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 24 24'
							fill='currentColor'
							class='w-6 h-6 text-sky-200'
						>
							<path
								fill-rule='evenodd'
								d='M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z'
								clip-rule='evenodd'
							/>
						</svg>
					</div>
					<div className='font-normal text-md text-gray-300'>Tournaments</div>
				</Link>
			</div>
			<div className='w-full flex space-x-2 text-white px-1'>
				<button className='w-full py-2 font-light text-center bg-fuchsia-700 rounded-lg'>
					help Center
				</button>
				<button className='w-full py-2 font-light text-center bg-blue-700 rounded-lg'>
					Live Support
				</button>
			</div>
			<div>
				<button className='w-full  text-md py-2 font-light text-center bg-blue-900  text-white rounded-lg'>
					Mobile App
				</button>
			</div>
		</div>
	);
}

export default NavSideBar;
