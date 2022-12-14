import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../../components/Footer";
import SportSideBar from "../../../components/sidebars/SportSideBar";
import SportContainer from "./MixedTable/SportContainer";

function SportPage() {
	const [open, setOpen] = useState(true);
	return (
		<div className='w-full h-screen'>
			<div className='w-full grid grid-cols-10 gap-0  relative  h-full'>
				{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
				<div
					className={` absolute  z-40 md:hidden duration-200   ${
						open ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className='relative'>
						<div className='w-64'>
							<SportSideBar />
						</div>

						<div
							className='absolute cursor-pointer top-0 z-30 -right-4  '
							onClick={() => {
								setOpen(!open);
							}}
						>
							<i class='fa-solid fa-square-caret-left font-extrabold text-xl text-rose-600'></i>
						</div>
					</div>
				</div>
				<div className=' hidden md:block md:col-span-2 h-full overflow-y-scroll  '>
					<SportSideBar />
				</div>

				{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
				<div className='col-span-full md:col-span-8 w-full    h-full  overflow-y-scroll overflow-x-scroll '>
					<div className=''>
						<Outlet />
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}
export default SportPage;
