import React from "react";
import SportSideBar from "../../../components/sidebars/SportSideBar";
import SportContainer from "../../../container/SportContainer/SportContainer";

function SportPage() {
	return (
		<div className='w-full flex h-[45rem]'>
			{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
			<div className='hidden md:flex '>
				<SportSideBar />
			</div>
			{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
			<div className='w-full  px-2 h-[45rem]  overflow-y-scroll overflow-x-scroll '>
				<SportContainer />
			</div>
		</div>
	);
}
export default SportPage;
