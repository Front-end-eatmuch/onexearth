import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "../../components/Footer";

function Promotion() {
	const location = useLocation();
	return (
		<div className='flex justify-center items-center w-screen h-full'>
			<div className='grid  grid-cols-10'>
				<div className='col-span-full xl:col-span-8 xl:col-start-2  bg-[#021A3A] overflow-x-scroll  py-10 space-y-5'>
					<div className='w-full justify-center flex  px-4 space-x-2  '>
						<Link
							to='all'
							className={` px-6  py-2 rounded-lg text-gray-300 ${
								location.pathname === "/promotion/all"
									? "text-white bg-fuchsia-700"
									: "bg-ShaBlue2-300"
							}`}
						>
							All
						</Link>

						<Link
							to='sport'
							className={` px-6  py-2 rounded-lg text-gray-300 ${
								location.pathname === "/promotion/sport"
									? "text-white bg-fuchsia-700"
									: "bg-ShaBlue2-300"
							}`}
						>
							Sport
						</Link>

						<Link
							to='casino'
							className={` px-6  py-2 rounded-lg text-gray-300 ${
								location.pathname === "/promotion/casino"
									? "text-white bg-fuchsia-700"
									: "bg-ShaBlue2-300"
							}`}
						>
							Casino
						</Link>

						<Link
							to='vip'
							className={` px-6  py-2 rounded-lg text-gray-300 ${
								location.pathname === "/promotion/vip"
									? "text-white bg-fuchsia-700"
									: "bg-ShaBlue2-300"
							}`}
						>
							Vip
						</Link>
					</div>
					<div className=' col-span-full  w-full '>
						<Outlet />

						<div>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Promotion;
