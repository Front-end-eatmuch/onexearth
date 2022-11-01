import React, { useState } from "react";

function CasinoOther() {
	const [homeLiveCasino, setHomeLiveCasino] = useState([
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
		{
			image:
				"https://asset.vg247.com/chivalry_medieval_warfare.png/BROK/thumbnail/1200x1200/quality/100/chivalry_medieval_warfare.png",
		},
		{
			image:
				"https://d1lss44hh2trtw.cloudfront.net/assets/article/2021/06/07/chivalry-2-review-highly-honorable-dismemberment_feature.jpg",
		},
		{
			image:
				"https://as01.epimg.net/meristation/imagenes/2021/02/12/noticias/1613163053_000198_1613163115_portada_normal.jpg",
		},
		{
			image:
				"https://asset.vg247.com/chivalry_medieval_warfare.png/BROK/thumbnail/1200x1200/quality/100/chivalry_medieval_warfare.png",
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
				"https://thumbnails.pcgamingwiki.com/f/f0/Medieval_Engineers_Cover.jpg/300px-Medieval_Engineers_Cover.jpg",
		},
		{
			image:
				"https://rare-gallery.com/thumbs/1091579-Guts-Berserk-mythology-ART-screenshot-ancient-history-modern-art-middle-ages.jpg",
		},
		{ image: "https://m.media-amazon.com/images/I/61K0oBs5jkL.jpg" },
	]);
	return (
		<div className='w-full'>
			<div className=' font-light text-3xl py-5 text-white'>Other</div>
			<div
				className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3  gap-y-4'
				s
			>
				{homeLiveCasino.map((f) => {
					return (
						<div className='w-36 h-40 rounded-lg overflow-hidden'>
							<img src={f.image} alt='' className='w-full h-full' />
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default CasinoOther;
