import React from "react";
import { Outlet } from "react-router-dom";
import Betslip from "../../components/Betslip";

function Sport() {
	return (
		<div className=' w-screen'>
			<div className='grid grid-flow-col grid-cols-12 w-full  '>
				{/* the outlet is a grid which contains a subroute to a subpage
				it is initial full in width then shares width with betslip when
				the large  screeen is met . after which it take col-span-10
				2.outlet are subpages eg: sportpage and livepage
				*/}
				<div className='col-span-full lg:col-span-10   '>
					<Outlet />
				</div>
				{/* betslip is hidden initially then appear when lg screen is met */}
				<div className='hidden lg:flex'>
					<Betslip />
				</div>
			</div>
		</div>
	);
}

export default Sport;
