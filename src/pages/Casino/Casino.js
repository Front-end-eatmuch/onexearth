import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CasinoHomeCarousel from "../../components/CasinoHomeCarousel/CasinoHomeCarousel";
import CasinoSideBar from "../../components/CasinoSideBar/CasinoSideBar";
import Footer from "../../components/Footer";
import CasinoTitleBar from "./CasinoComponents/CasinoTitleBar";

function Casino() {
	const [open, setOpen] = useState(true);
	let location = useLocation();
	const [casinoData, setCasinoData] = useState([
		{
			id: 1,
			DataTitle: ["caribean", "color", "category", "price"],
			Data: [
				{
					name: "Apple",
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: "Appb",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 2,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 3,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 4,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 5,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 6,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 7,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 8,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 9,
			DataTitle: ["indian", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
	]);
	return (
		// <div className='flex justify-center items-center w-screen h-full'>
		// 	<div className='grid  grid-cols-12'>
		// 		<div className='col-span-full lg:col-span-10 lg:col-start-2   overflow-x-scroll  py-10 space-y-5'>
		// 			<CasinoTitleBar />
		// 			<div className=' col-span-full  w-full '>
		// 				<Outlet context={{ casinoData: casinoData }} />
		// 				<div className='w-'>
		// 					<Footer />
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
		<div className='w-full h-screen'>
			<div className='w-full py-5'>
				<CasinoHomeCarousel />
			</div>
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
							<CasinoSideBar />
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
					<CasinoSideBar />
				</div>

				{/* the sportContainer component contain the table for the sporpage. live Container also has one. */}
				<div className='col-span-full md:col-span-8 w-full    h-full  '>
					<div className=''>
						<Outlet context={{ casinoData: casinoData }} />
					</div>
					<div>
						<Footer />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Casino;
