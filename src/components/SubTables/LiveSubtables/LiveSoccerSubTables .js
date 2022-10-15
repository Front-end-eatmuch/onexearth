import React, { useState } from "react";
import { Link } from "react-router-dom";

function LiveSoccerSubTables(props) {
	const [dic, setDic] = useState([{ book: "book" }]);
	const handleclick = (item, id) => {
		// const i = id;
		// if (id in dic) {
		// 	// setDic(delete dic.id, { ...dic });
		// 	setDic((dic[id] = item));
		// 	console.log(dic);
		// 	return;
		// }
		let da = {};
		da[id] = item;
		console.log(da);
		setDic(dic.push(da));
		console.log(dic);
	};
	return (
		<div className=' lg:w-full   '>
			<div className='w-full bg-slate-500 '>
				<div class='w-full  relative shadow-md  '>
					<table class=' w-full text-sm text-left text-gray-800'>
						<thead class=' text-start   text-xs text-gray-500 uppercase bg-gray-200  '>
							<tr className=' bg-gray-100  '>
								{props.livetable.DataTitle.map((v, i) => {
									return (
										<th
											scope='col '
											class='text-start  w-48 lg:w-1/4 py-2 '
											key={i}
										>
											<div className=' w-full whitespace-normal text-center  '>
												{v}
											</div>
										</th>
									);
								})}
							</tr>
						</thead>
						<tbody>
							{props.livetable.Data.map((v, i) => {
								return (
									<tr
										class=' border-b bg-white  hover:bg-slate-200 font-semibold '
										key={i}
									>
										<th
											scope='row'
											class=' border-r-2  w-48 lg:w-1/4 py-2    font-medium text-gray-900 whitespace-nowrap dark:text-white'
										>
											<div className=' whitespace-normal  '>
												<div>
													<Link to='#'>{v.name.teamone}</Link>
												</div>
												<div>
													<Link to='#'>{v.name.teamtwo}</Link>
												</div>
											</div>
										</th>
										<td class='w-48 lg:w-1/4  border-r-2 hover:bg-slate-100 '>
											<button
												className='w-full h-full'
												onClick={() => handleclick(v.color, v.id)}
											>
												{v.color}
											</button>
										</td>
										<td class='w-48 lg:w-1/4 border-r-2 hover:bg-slate-100'>
											<button
												className='w-full h-full'
												onClick={() => handleclick(v.category, v.id)}
											>
												{v.category}
											</button>
										</td>
										<td class='w-48 lg:w-1/4 border-r-2 hover:bg-slate-100'>
											<button
												className='w-full h-full'
												onClick={() => handleclick(v.price, v.id)}
											>
												{v.price}
											</button>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
			{/* <div>
				{dic.map((v) => {
					return <div>shit</div>;
				})}
			</div> */}
		</div>
	);
}

export default LiveSoccerSubTables;
