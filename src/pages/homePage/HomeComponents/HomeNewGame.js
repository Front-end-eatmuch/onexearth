import React, { useState } from "react";

function HomeNewGame(props) {
	const [open, setOpen] = useState(true);

	const [topGames, setTopGames] = useState([
		{
			image:
				"https://images.unsplash.com/photo-1518895312237-a9e23508077d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2384&q=80",
		},
		{
			image:
				"https://64.media.tumblr.com/bdde5f436de69e1fdce7a3f1f3cdac39/92e2de49bc0fc1a3-6b/s1280x1920/d7ece2ee8a8298fec00c45253159179629496bdb.jpg",
		},
		{
			image:
				"https://images.unsplash.com/photo-1518133227682-c0e3e34de21b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=947&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1600081728723-c8aa2ee3236a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
		},
		{
			image:
				"https://images.unsplash.com/photo-1600081729801-fd151cba450f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
		},
		{
			image:
				"https://i.pinimg.com/736x/3d/ec/c5/3decc50d13ec171956221881d17cfb77--fantasy-clothes-the-witcher.jpg",
		},
		{ image: "https://img-9gag-fun.9cache.com/photo/aZpyzxn_460s.jpg" },
		{ image: "https://img-9gag-fun.9cache.com/photo/aZpyzxn_460s.jpg" },

		{
			image:
				"https://p4.wallpaperbetter.com/wallpaper/754/268/990/castle-games-minecraft-video-wallpaper-preview.jpg",
		},
		{
			image:
				"https://as01.epimg.net/meristation/imagenes/2021/02/12/noticias/1613163053_000198_1613163115_portada_normal.jpg",
		},
		{
			image:
				"https://asset.vg247.com/chivalry_medieval_warfare.png/BROK/thumbnail/1200x1200/quality/100/chivalry_medieval_warfare.png",
		},
	]);
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
					{topGames.map((f) => {
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

export default HomeNewGame;
