import React from "react";
import LiveSideBar from "../../../components/sidebars/LiveSideBar";
import LiveContainer from "../../../container/LiveContainer/LiveContainer";

function LivePage() {
	return (
		<div className='w-full flex h-[45rem]'>
			{/* the sidebar is generally specific to the page for example the livepage also has its sidebar with data
			displayed with respect to that page
			*/}
			<div className='hidden md:flex '>
				<LiveSideBar />
			</div>
			{/* the liveContainer component contain the table for the livepage. live Container also has one. */}
			<div className='w-full  px-2 h-[45rem]  overflow-y-scroll overflow-x-scroll '>
				<LiveContainer />
			</div>
		</div>
	);
}

export default LivePage;
