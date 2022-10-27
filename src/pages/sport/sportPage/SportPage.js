import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import SportSideBar from "../../../components/sidebars/SportSideBar";
import SportContainer from "../../../container/SportContainer/SportContainer";

function SportPage() {
	const [open, setOpen] = useState(true);
	return (
		<div className='w-full relative flex h-screen'>
			{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
			<div
				className={` absolute  z-20 md:hidden duration-200   ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className='relative'>
					<SportSideBar />
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
				<SportSideBar />
			</div>

			{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
			<div className='w-full   relative px-2 h-full  overflow-y-scroll overflow-x-scroll '>
				<div className='h-full'>
					<Outlet />
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</div>
	);
}
export default SportPage;
