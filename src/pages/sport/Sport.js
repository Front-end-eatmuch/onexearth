import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Betslip from "../../components/Betslip";

function Sport() {
	const [open, setOpen] = useState(true);
	return (
		<div className='h-full w-screen  bg-[#092A42] relative'>
			<div className='grid grid-flow-col grid-cols-12 w-full   '>
				{/* the outlet is a grid which contains a subroute to a subpage
				it is initial full in width then shares width with betslip when
				the large  screeen is met . after which it take col-span-10
				2.outlet are subpages eg: sportpage and
				*/}
				<div className='h-full col-span-full xl:col-span-10 mt-2   '>
					<Outlet />
				</div>
				{/* betslip is hidden initially then appear when lg screen is met */}
				{/* <div
					className={` absolute  z-20 lg:hidden duration-200 right-0  ${
						open ? "translate-x-0" : "translate-x-full"
					}`}
				>
					<div className='relative'>
						<Betslip />
						<div
							className='absolute cursor-pointer top-0 z-50 -left-5  '
							onClick={() => {
								setOpen(!open);
							}}
						>
							<i class='fa-solid fa-square-caret-left font-extrabold text-xl text-rose-600'></i>
						</div>
					</div>
				</div>
				<div className=' h-full hidden lg:col-span-2 lg:flex mt-2 w-full '>
					<Betslip />
				</div> */}

				<div className='mt-2 hidden xl:block xl:col-span-2 h-full overflow-y-scroll  '>
					<Betslip />
				</div>
			</div>
		</div>
	);
}

export default Sport;
