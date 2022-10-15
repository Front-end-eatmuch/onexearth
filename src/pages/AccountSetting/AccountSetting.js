// import { Footer } from "flowbite-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import AccountSettingSidebar from "../../components/AccountSettingSidebar/AccountSettingSidebar";
import Footer from "../../components/Footer";

function AccountSetting() {
	const [open, setOpen] = useState(true);
	return (
		// <div className='h-[45rem] overflow-y-scroll'>
		// 	<div className='grid  p-2'>
		// 		<div className='  w-full'>
		// 			<AccountSettingSidebar />
		// 		</div>
		// 		<div className=''>
		// 			<Outlet />
		// 		</div>
		// 	</div>
		// </div>
		<div className='w-full relative flex h-[45rem] '>
			{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
			<div
				className={` absolute  z-20 md:hidden duration-200   ${
					open ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className='relative'>
					<AccountSettingSidebar />
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
			<div className='hidden md:flex h-full mt-2 '>
				<AccountSettingSidebar />
			</div>

			{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
			<div className='w-full relative px-2 h-[45rem]  overflow-y-scroll overflow-x-scroll mt-2 '>
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

export default AccountSetting;
