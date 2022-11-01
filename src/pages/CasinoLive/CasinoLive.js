import { Menu } from "@headlessui/react";
import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import CasinoLiveSideBar from "../../components/CasinoLiveSideBar/CasinoLiveSideBar";
import CasinoSideBar from "../../components/CasinoSideBar/CasinoSideBar";
import Footer from "../../components/Footer";
import CasinoLiveTitleBar from "./CasinoLiveComponents/CasinoLiveTitleBar";

function CasinoLive() {
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
		<div className='flex justify-center items-center w-screen h-full'>
			<div className='grid  grid-cols-12'>
				<div className='col-span-full lg:col-span-10 lg:col-start-2  bg-[#021A3A] overflow-x-scroll  py-10 space-y-5'>
					<CasinoLiveTitleBar />
					<div className=' col-span-full  w-full '>
						<Outlet context={{ casinoData: casinoData }} />
						<div className='w-'>
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CasinoLive;
