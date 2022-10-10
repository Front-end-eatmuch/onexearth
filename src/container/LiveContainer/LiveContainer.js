import React, { useState } from "react";
import { Link } from "react-router-dom";
import LiveTable from "./LiveTable";
// import Livesession from "./LiveTable";

function LiveContainer() {
	const [liveTableaus, setLiveTableaus] = useState([
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
			id: 3,
			DataTitle: ["Americana", "color", "category", "price"],
			Data: [
				{
					name: "Samsung",
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: "Apple",
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: "Apple",
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
				{
					name: "Apple",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
	]);
	console.log(liveTableaus);
	return (
		<div className=''>
			<div className='px-4 flex justify-between'>
				<div>livebets</div>
				<div>search</div>
			</div>
			<div className=' flex space-x-10 px-4'>
				<div className='w-52 bg-slate-500'>
					<Link to='/' className='text-xs font-bold text-black  '>
						Sport
					</Link>
				</div>
				<div>
					<Link to='/invoices' className='text-xs font-bold text-black  '>
						Sport
					</Link>
				</div>
				<div>
					<Link to='/invoices' className='text-xs font-bold text-black  '>
						Sport
					</Link>
				</div>
				<div>
					<Link to='/invoices' className='text-xs font-bold text-black  '>
						Sport
					</Link>
				</div>
				<div>
					<Link to='/invoices' className='text-xs font-bold text-black  '>
						Sport
					</Link>
				</div>
				<div>
					<Link to='/invoices' className='text-xs font-bold text-black  '>
						Sport
					</Link>
				</div>
			</div>
			<div>
				<LiveTable liveTableaus={liveTableaus}></LiveTable>
			</div>
		</div>
	);
}

export default LiveContainer;
