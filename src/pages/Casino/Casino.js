import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import CasinoSideBar from "../../components/CasinoSideBar/CasinoSideBar";

function Casino() {
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
			<div className='w-screen flex justify-between h-small2 bg-slate-500 bg-[url("https://cdn.pixabay.com/photo/2014/07/04/19/15/man-384178_1280.jpg")]'>
				<div className='h-full bg-transparent bg-opacity-50 items-center  w-small2 flex flex-col justify-center  bg-zinc-300'>
					<h1>WELCOME BONUS</h1>
					<h1>100% UP TO€120</h1>
					<h1>PLUS 120 FREE SPINS</h1>
					<div>
						<button>signup</button>
					</div>
					<div>already have an account login</div>
				</div>
				<div className='h-96 w-80 rounded-lg bg-lime-200 mr-10 pt-4 overflow-y-hidden'>
					<div className='w-full h-10 text-center bg-slate-100 bg-opacity-50'>
						text
					</div>
					<div className='w-full h-10 text-center bg-slate-100 bg-opacity-50'>
						text
					</div>
					<div className='w-full h-10 text-center bg-slate-100 bg-opacity-50'>
						text
					</div>
					<div className='w-full h-10 text-center bg-slate-100 bg-opacity-50'>
						text
					</div>
				</div>
			</div>
			<div className='grid grid-flow-col grid-cols-12 w-screen bg-gray-600  '>
				<div className='lg:col-span-3 hidden lg:flex justify-center px-2 pt-5'>
					<CasinoSideBar />
				</div>
				<div className='col-span-full  lg:col-span-9 overflow-x-scroll w-full'>
					<Outlet context={{ casinoData: casinoData }} />
				</div>
			</div>
		</div>
	);
}

export default Casino;
