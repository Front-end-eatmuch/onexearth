import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import LiveSideBar from "../../../components/sidebars/LiveSideBar";
import LiveContainer from "../../../container/LiveContainer/LiveContainer";

function LivePage() {
	const [open, setOpen] = useState(true);
	return (
		<div className='w-full flex h-[45rem]'>
			{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
			<div
				className={` absolute  z-20 md:hidden duration-200   ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className='relative'>
					<LiveSideBar />
					<div
						className='absolute cursor-pointer top-0 z-40 -right-4  '
						onClick={() => {
							setOpen(!open);
						}}
					>
						<i class='fa-solid fa-square-caret-left font-extrabold text-xl text-rose-600'></i>
					</div>
				</div>
			</div>
			<div className='hidden md:flex '>
				<LiveSideBar />
			</div>
			{/* the liveContainer component contain the table for the livepage. live Container also has one. */}
			<div className='w-full  px-2 h-[45rem]  overflow-y-scroll overflow-x-scroll '>
				{/* <LiveContainer /> */}
				<Outlet />
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}

export default LivePage;
