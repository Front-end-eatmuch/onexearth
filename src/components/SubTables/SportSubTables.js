import React from "react";

function SportSubTables(props) {
	return (
		<div className=' lg:w-full bg-purple-400 p-6'>
			<div className='w-full bg-slate-500 '>
				<div class='w-full  relative shadow-md  '>
					<table class=' w-full text-sm text-left text-gray-500 dark:text-gray-400'>
						<thead class=' text-start   text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400'>
							<tr className=' bg-slate-500 '>
								{props.sporttable.DataTitle.map((v, i) => {
									return (
										<th
											scope='col '
											class='text-start  w-48 lg:w-1/4  '
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
										class=' border-b bg-orange-300  dark:bg-gray-900 dark:border-gray-700'
										key={i}
									>
										<th
											scope='row'
											class=' border-r-4  w-48 lg:w-1/4  bg-slate-500  font-medium text-gray-900 whitespace-nowrap dark:text-white'
										>
											<div className=' whitespace-normal  '>{v.name}</div>
										</th>
										<td class='w-48 lg:w-1/4  border-r-4 '>{v.color}</td>
										<td class='w-48 lg:w-1/4 border-r-4'>{v.category}</td>
										<td class='w-48 lg:w-1/4 border-r-4'>{v.price}</td>
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
