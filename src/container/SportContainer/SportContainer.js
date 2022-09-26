import React, { useState } from "react";
import { Link } from "react-router-dom";
import SportTable from "./SportTable";

function SportContainer() {
	const [sportTableaus, setSportTableaus] = useState([
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
			DataTitle: ["samsung", "color", "category", "price"],
			Data: [
				{
					name: "apple",
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: "appleb",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
		{
			id: 4,
			DataTitle: [
				"africa father mother alien ghana",
				"color",
				"category",
				"price",
			],
			Data: [
				{
					name: "Apple",
					color: "silver",
					category: "laptop",
					price: 46,
				},
				{
					name: "Appb samsung father mother alien",
					color: "silver",
					category: "laptop",
					price: 46,
				},
			],
		},
	]);
	return (
		<div className=''>
			<div className=' flex justify-between'>
				<div>Sportbets</div>
				<div>search</div>
			</div>
			<div className=' flex space-x-10'>
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
				<SportTable sportTableaus={sportTableaus}></SportTable>
			</div>
		</div>
	);
}

export default SportContainer;
