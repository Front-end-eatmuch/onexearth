import React, { useState } from "react";

function CasinoLivePopular() {
	const [homeLiveCasino, setHomeLiveCasino] = useState([
		{
			image:
				"https://thumbnails.pcgamingwiki.com/f/f0/Medieval_Engineers_Cover.jpg/300px-Medieval_Engineers_Cover.jpg",
		},
		{
			image:
				"https://rare-gallery.com/thumbs/1091579-Guts-Berserk-mythology-ART-screenshot-ancient-history-modern-art-middle-ages.jpg",
		},
		{ image: "https://m.media-amazon.com/images/I/61K0oBs5jkL.jpg" },
		{
			image:
				"https://mobimg.b-cdn.net/v2/fetch/33/33246b70b91ee51275c77bb2be8a900e.jpeg",
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
				"https://mobimg.b-cdn.net/v2/fetch/33/33246b70b91ee51275c77bb2be8a900e.jpeg",
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
			<div className=' font-light text-3xl py-5 text-white'>Live Casino</div>
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

export default CasinoLivePopular;
