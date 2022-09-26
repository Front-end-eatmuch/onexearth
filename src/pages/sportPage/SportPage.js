import React from "react";
import SportSideBar from "../../components/sidebars/SportSideBar";
import SportContainer from "../../container/SportContainer/SportContainer";

function SportPage() {
	return (
		<div className='w-full flex h-[45rem]'>
			<div className='hidden md:flex '>
				<SportSideBar />
			</div>
			<div className='w-full  px-2 h-[45rem]  overflow-y-scroll overflow-x-scroll '>
				<SportContainer />
			</div>
			{/* <div className='w-small1 h-56 bg-zinc-500'></div> */}
		</div>
	);
}
export default SportPage;
