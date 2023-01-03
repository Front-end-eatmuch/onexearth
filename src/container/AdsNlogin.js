// import { Footer } from "flowbite-react";
import React from "react";
import Swipperslide from "../components/Swipperslide";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import HomeLogin from "../pages/homePage/HomeLogin";
import HomeLiveSwipper from "../pages/homePage/HomeComponents/HomeLiveSwipper";
import HomeSwipper from "../pages/homePage/HomeComponents/HomeSwipper";

function AdsNlogin() {
	return (
		<div className='w-full py-5'>
			<div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2 justify-center px-5 '>
				<div className='hidden lg:grid  h-small2 w-full  lg:grid-cols-3 gap-x-2'>
					<div className='flex flex-col h-full w-full space-y-2'>
						<div className='h-full   border-2 border-sky-300 w-full'>
							<HomeLiveSwipper />
						</div>
						<div className='h-full  border-2 border-sky-300 w-full'>
							<HomeSwipper />
						</div>
					</div>

					<HomeLogin />
					<div className='flex flex-col h-full w-full space-y-2'>
						<div className='h-full  border-2 border-sky-300 w-full'></div>
						<div className='h-full  border-2 border-sky-300 w-full'></div>
					</div>
				</div>
				<div className='col-span-full lg:col-span-1'>
					<Swipperslide />
				</div>
			</div>
		</div>
	);
}

export default AdsNlogin;
