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
		<div className=''>
			<BrowserRouter>
				<div className='relative'>
					<div className='fixed top-0 z-20'>
						<Navbar />
					</div>
					<div className='mt-14'>
						<Routess />
					</div>
				</div>
			</BrowserRouter>
			{/* <RouterProvider router={routes} /> */}
		</div>
	);
}

export default Mainlayout;
