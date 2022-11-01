import React from "react";

function HomeGames(props) {
	return (
		<div className='w-full '>
			<div className='w-full flex justify-center items-center'>
				<div
					className='w-full xl:w-fit xl:gap-x-10 grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  gap-y-4'
					s
				>
					<div className='w-full col-span-full flex justify-between font-light text-3xl py-5 text-white pr-5'>
						<div>Top Games</div>
						<div className='cursor-pointer'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								class='icon icon-tabler icon-tabler-grid-dots w-4 h-4'
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
								<circle cx='5' cy='5' r='1'></circle>
								<circle cx='12' cy='5' r='1'></circle>
								<circle cx='19' cy='5' r='1'></circle>
								<circle cx='5' cy='12' r='1'></circle>
								<circle cx='12' cy='12' r='1'></circle>
								<circle cx='19' cy='12' r='1'></circle>
								<circle cx='5' cy='19' r='1'></circle>
								<circle cx='12' cy='19' r='1'></circle>
								<circle cx='19' cy='19' r='1'></circle>
							</svg>
						</div>
					</div>
					{props.topGames.map((f) => {
						return (
							<div className='w-36 h-40 rounded-lg overflow-hidden'>
								<img src={f.image} alt='' className='w-full h-full' />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default HomeGames;
