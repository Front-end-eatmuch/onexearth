import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CasinoSideBar from "../../components/CasinoSideBar/CasinoSideBar";

function Casino() {
	const [open, setOpen] = useState(true);
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
	]);
	return (
		<div className=' w-screen  overflow-x-scroll'>
			<div className='w-screen py-2 flex items-center justify-between h-small2 bg-rose-700 bg-[url("https://cdn.pixabay.com/photo/2014/07/04/19/15/man-384178_1280.jpg")]'>
				<div className='ml-10 h-full space-y-4 bg-transparent bg-opacity-50 items-center  w-small2 flex flex-col justify-center  bg-indigo-600 rounded-xl'>
					<h1 className='text-lg text-white font-bold'>WELCOME BONUS</h1>
					<h1 className='text-4xl font-bold text-lime-300'>
						100% <span className='text-green-500'> UP TO</span> €120
					</h1>
					<h1 className='text-lg text-white'>PLUS 120 FREE SPINS</h1>
					<div>
						<button className='py-2 px-10 bg-orange-500 text-white rounded-2xl font-bold'>
							signup
						</button>
					</div>
					<div className='text-base font-bold text-white'>
						already have an account login
					</div>
				</div>
				<div className='hidden md:block h-full w-80 rounded-lg bg-opacity-60 bg-gray-300 mr-10 py-4 overflow-y-hidden '>
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
			<div className='flex  w-screen bg-gray-200  '>
				<div
					className={` absolute  z-20 md:hidden duration-200   ${
						open ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					<div className='relative'>
						<CasinoSideBar />
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
				<div className='hidden md:flex mt-4  '>
					<CasinoSideBar />
				</div>

				<div className=' overflow-x-scroll w-full'>
					<Outlet context={{ casinoData: casinoData }} />
				</div>
			</div>
		</div>
	);
}

export default Casino;
