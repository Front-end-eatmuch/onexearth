import React from "react";
import { Link } from "react-router-dom";

function Bar1() {
	return (
		<div className='w-full overflow-x-scroll   py-4'>
			<div className='justify-between flex text-white space-x-4 font-light text-sm'>
				<div>
					<Link
						to='/casino/slots'
						className='flex space-x-2 px-6 py-2 border border-gray-700 rounded-lg'
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-cherry text-yellow-400'
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
						<div>slots</div>
					</Link>
				</div>
				<div>
					<Link
						to='/sport/sports/sporttables/soccer'
						className='flex space-x-2 px-6 py-2 border border-gray-700 rounded-lg'
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-shoe text-orange-700'
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
						<div>Games</div>
					</Link>
				</div>
				<div>
					<Link
						to='/casino-live/bonusbuy'
						className='flex space-x-2 px-6 py-2 border border-gray-700 rounded-lg'
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								class='w-6 h-6 text-pink-600'
							>
								<path d='M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z' />
								<path
									fill-rule='evenodd'
									d='M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z'
									clip-rule='evenodd'
								/>
								<path d='M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z' />
							</svg>
						</div>
						<div>BestBuy</div>
					</Link>
				</div>
				<div>
					<Link
						to='/promotion/vip'
						className='flex space-x-2 px-6 py-2 border border-gray-700 rounded-lg'
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-brand-coinbase text-green-500'
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
								<path d='M12.95 22c-4.503 .001 -8.445 -3.04 -9.61 -7.413c-1.165 -4.373 .737 -8.988 4.638 -11.25a9.906 9.906 0 0 1 12.008 1.598l-3.335 3.367a5.185 5.185 0 0 0 -7.354 .013a5.252 5.252 0 0 0 0 7.393a5.185 5.185 0 0 0 7.354 .013l3.349 3.367a9.887 9.887 0 0 1 -7.05 2.912z'></path>
							</svg>
						</div>
						<div>Vip</div>
					</Link>
				</div>
				<div>
					<Link
						to=''
						className='flex space-x-2 px-6 py-2 border border-gray-700 rounded-lg'
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-clubs text-blue-400'
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
								<path d='M12 3a4 4 0 0 1 3.164 6.447a4 4 0 1 1 -1.164 6.198v1.355l1 4h-6l1 -4l.001 -1.355a4 4 0 1 1 -1.164 -6.199a4 4 0 0 1 3.163 -6.446z'></path>
							</svg>
						</div>
						<div>Providers</div>
					</Link>
				</div>
				<div>
					<Link
						to='/casino-live/jackpot'
						className='flex space-x-2 px-6 py-2 border border-gray-700 rounded-lg'
					>
						<div>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-brand-sharik text-amber-200'
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
								<path d='M4.281 16.606a8.968 8.968 0 0 1 1.363 -10.977a9.033 9.033 0 0 1 11.011 -1.346c-1.584 4.692 -2.415 6.96 -4.655 8.717c-1.584 1.242 -3.836 2.24 -7.719 3.606zm16.335 -7.306c2.113 7.59 -4.892 13.361 -11.302 11.264c1.931 -3.1 3.235 -4.606 4.686 -6.065c1.705 -1.715 3.591 -3.23 6.616 -5.199z'></path>
							</svg>
						</div>
						<div>Jackpot</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Bar1;
