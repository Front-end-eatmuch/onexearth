import React from "react";
import {
	BrowserRouter,
	Router,
	RouterProvider,
	Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar";
// import routes from "../Routes";
import Routess from "../Routes";

function Mainlayout() {
	return (
		<div className='relative overscroll-none  '>
			<BrowserRouter>
				<div className='relative h-screen'>
					<div className='fixed top-0 z-20'>
						<Navbar />
					</div>
					<div className='mt-14'>
						<Routess />
					</div>
				</div>
			</BrowserRouter>
			{/* <RouterProvider router={routes} /> */}
			{/* <div className='absolute top-0 right-0 bottom-0 left-0 bg-slate-300 bg-opacity-70 z-50'></div> */}
		</div>
	);
}

export default Mainlayout;
