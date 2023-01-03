import React, { useState } from "react";
import Betslip from "../../components/Betslip";
import Swipperslide from "../../components/Swipperslide";
import Livetables from "../../components/SubTables/MixedSubTable/SportLigueSubTables/SoccerSubTables";
import AdsNlogin from "../../container/AdsNlogin";
import Livecontainer from "../sport/livePage/LiveMixedTable/LiveContainer";
import Livesession from "../sport/livePage/LiveMixedTable/LiveSoccerTable/LiveSoccerTable";
import Footer from "../../components/Footer";
import SportContainer from "../sport/sportPage/MixedTable/SportContainer";
import Bar1 from "./HomeComponents/Bar1";
import Bar2 from "./HomeComponents/Bar2";
import HomeSwipper from "./HomeComponents/HomeSwipper";
import HomeGames from "./HomeComponents/HomeGames";
import HomeLivecasino from "./HomeComponents/HomeLivecasino";
import HomeNewGame from "./HomeComponents/HomeNewGame";
import HomeDiscount from "./HomeComponents/HomeDiscount";
import HomeLiveSoccerTable from "./HomeLiveSoccerTable/HomeLiveSoccerTable";
import HomeSoccerTable from "./HomeSoccerTable/HomeSoccerTable";

function HomePage() {
	const [open, setOpen] = useState(true);
	const [redder, setRedder] = useState(false);
	const handler = () => {
		setRedder(!redder);
	};
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
		<div className='bg-[#092A42] w-screen '>
			<div className='w-screen '>
				<AdsNlogin />
			</div>
			<div className='grid grid-cols-12 px-4 space-x-2'>
				<div className='col-span-full xl:col-span-10 space-y-4 '>
					<HomeLiveSoccerTable />
					<HomeSoccerTable />
				</div>
				<div className='hidden xl:flex lg:col-span-2'>
					<Betslip />
				</div>
			</div>
			<div className='w-full flex items-center  flex-col py-10'>
				<div className='w-full grid grid-cols-8'>
					{/* <div className='w-full col-span-6 col-start-2 space-y-10 '>
						<Bar1 />
						<div className='space-y-1'>
							<Bar2 />
							<HomeSwipper />
						</div>
					</div>
					<div className='col-span-6 col-start-2 py-10'>
						<HomeGames topGames={topGames} />
						<HomeLivecasino />
						<HomeNewGame />
					</div> */}
					<div className='col-span-8 grid grid-cols-8  py-5'>
						<div className='col-span-6 col-start-2'>
							<HomeDiscount />
						</div>
					</div>
				</div>
			</div>
			{/* <div className='h-small1'></div> */}
			<Footer />
		</div>
	);
}

export default HomePage;
