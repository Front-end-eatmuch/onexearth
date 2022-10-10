import React from "react";
import { Link } from "react-router-dom";

function SportSubTables(props) {
	// console.log(props.sporttable.Data);
	return (
		<div className=' lg:w-full  px-4 '>
			<div className='w-full bg-slate-500 '>
				<div class='w-full  relative shadow-md  '>
					<table class=' w-full text-sm text-left text-gray-800'>
						<thead class=' text-start   text-xs text-gray-500 uppercase bg-gray-200  '>
							<tr className=' bg-gray-200  '>
								{props.sporttable.DataTitle.map((v, i) => {
									return (
										<th
											scope='col '
											class='text-start  w-48 lg:w-1/4 py-2 '
											key={i}
										>
											<div className=' w-full whitespace-normal  '>{v}</div>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{props.sporttable.Data.map((v, i) => {
								return (
									<tr
										class=' border-b bg-white  hover:bg-gray-200 font-semibold '
										key={i}
									>
										<th
											scope='row'
											class=' border-r-2  w-48 lg:w-1/4 py-2    font-medium text-gray-900 whitespace-nowrap dark:text-white'
										>
											<div className=' whitespace-normal  '>
												<Link to='#'>{v.name}</Link>
											</div>
										</th>
										<td class='w-48 lg:w-1/4  border-r-2 '>{v.color}</td>
										<td class='w-48 lg:w-1/4 border-r-2'>{v.category}</td>
										<td class='w-48 lg:w-1/4 border-r-2'>{v.price}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}

export default SportSubTables;
