import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

function Promotion() {
	return (
		<div>
			<div className=''>
				<div className='h-80  w-full bg-[url("https://cdn.pixabay.com/photo/2022/06/24/22/57/racket-7282577_1280.jpg")]  bg-center flex flex-col justify-center items-center  space-y-5'>
					<div className='flex flex-col items-center'>
						<h1 className='font-bold text-3xl text-rose-500'>OneXearth</h1>
						<div className='font-bold text-white '>Promotions</div>
					</div>
					<div className='flex  px-4 space-x-2  text-white'>
						<div className='rounded-2xl  border-2 border-white  px-4'>
							<Link to='all'>All</Link>
						</div>
						<div className='rounded-2xl  border-2 border-white  px-4'>
							<Link to='sport'>Sport</Link>
						</div>
						<div className='rounded-2xl border-2 border-white  px-4'>
							<Link to='casino'>Casino</Link>
						</div>
						<div className='rounded-2xl  border-2 border-white  px-4'>
							<Link to='vip'>Vip</Link>
						</div>
					</div>
				</div>
				<div>
					<Outlet />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default Promotion;
