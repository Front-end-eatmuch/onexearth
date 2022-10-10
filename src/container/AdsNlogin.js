// import { Footer } from "flowbite-react";
import React from "react";
import Swipperslide from "../components/Swipperslide";
import Footer from "../components/Footer";

function AdsNlogin() {
	return (
		<div className=' py-10'>
			<div className='grid grid-cols-6'>
				<div className='col-span-2 flex justify-center'>
					<div className='h-96 w-80 rounded-lg bg-opacity-60 bg-gray-300 mr-10 py-4 overflow-y-hidden '>
						<div className='w-full h-20 text-center bg-gray-100 bg-opacity-50 border-t-2 border-b-2 border-gray-50'>
							text
						</div>
						<div className='w-full h-20 text-center bg-gray-100 bg-opacity-50 border-t-2 border-b-2 border-gray-50'>
							text
						</div>
						<div className='w-full h-20 text-center bg-gray-100 bg-opacity-50 border-t-2 border-b-2 border-gray-50'>
							text
						</div>
						<div className='w-full h-20 text-center bg-gray-100 bg-opacity-50 border-t-2 border-b-2 border-gray-50'>
							text
						</div>
					</div>
				</div>
				<div className='col-span-4 flex justify-center px-5'>
					<Swipperslide />
				</div>
			</div>
		</div>
	);
}

export default AdsNlogin;
