import { columnSelected } from "@syncfusion/ej2-react-grids";
import React, { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useRowSelect, useTable } from "react-table";
import { Context } from "../../../context/Context";

const IndeterminateCheckbox = React.forwardRef(
	({ indeterminate, ...rest }, ref) => {
		const defaultRef = React.useRef();
		const resolvedRef = ref || defaultRef;

		React.useEffect(() => {
			resolvedRef.current.indeterminate = indeterminate;
		}, [resolvedRef, indeterminate]);

		return (
			<>
				<input type='checkbox' ref={resolvedRef} {...rest} />
			</>
		);
	}
);

function LiveSoccerSubTables(props) {
	const { betHandler } = useContext(Context);
	const [dic, setDic] = useState([{ book: "book" }]);
	const [blue, setBlue] = useState();
	const [bet, setBet] = useState([
		{ name: "sam", age: 40 },
		{ name: "bob", age: 20 },
	]);
	const handleclick = () => {};
	const beet = props.livetable;
	const COLUMN = [
		{
			Header: "laliga",
			accessor: "laliga",
		},
		{
			Header: "1",
			accessor: "rate1",
			// Cell: (row) => {
			// 	const data = row.original;
			// 	const showDesc = (desc) => {
			// 		alert(desc);
			// 	};
			// 	return (
			// 		<div
			// 			onClick={() => {
			// 				showDesc(data.rate1);
			// 			}}
			// 		>
			// 			{(data.rate1)}
			// 		</div>
			// 	);
			// },
		},
		{
			Header: "x",
			accessor: "rate2",
		},
		{
			Header: "2",
			accessor: "rate3",
		},
		{
			Header: "1x",
			accessor: "rate4",
		},
		{
			Header: "12",
			accessor: "rate5",
		},
		{
			Header: "2x",
			accessor: "rate6",
		},
		{
			Header: "1",
			accessor: "rate7",
		},
	];
	const columns = useMemo(() => COLUMN, []);
	const data = useMemo(() => props.livetable, []);

	// const tableInstance = useTable({ columns, data });

	// const {
	// 	getTableProps,
	// 	getTableBodyProps,
	// 	headerGroups,
	// 	rows,
	// 	prepareRow,
	// 	selectedFlatRows,

	// 	state: { selectedRowIds },
	// } = tableInstance;
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		selectedFlatRows,
		state: { selectedRowIds },
	} = useTable(
		{
			columns,
			data,
		},
		useRowSelect

		// (hooks) => {
		// 	hooks.visibleColumns.push((columns) => [
		// 		// Let's make a column for selection
		// 		{
		// 			id: "selection",
		// 			// The header can use the table's getToggleAllRowsSelectedProps method
		// 			// to render a checkbox
		// 			Header: ({ getToggleAllRowsSelectedProps }) => (
		// 				<div>
		// 					<IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
		// 				</div>
		// 			),
		// 			// The cell can use the individual row's getToggleRowSelectedProps method
		// 			// to the render a checkbox
		// 			Cell: ({ row }) => (
		// 				<div>
		// 					<IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
		// 				</div>
		// 			),
		// 		},
		// 		...columns,
		// 	]);
		// }
	);

	return (
		<div className=''>
			<div className='w-full  '>
				<div class='w-full  relative shadow-md  '>
					<table
						{...getTableProps()}
						class=' w-full text-sm text-left text-gray-800 '
					>
						{props.livetable.length !== 0 && (
							<thead class='w-full text-start   text-xs text-gray-500 uppercase bg-gray-200  '>
								{headerGroups?.map((headerGroup) => (
									<tr
										{...headerGroup.getHeaderGroupProps()}
										className='w-full bg-gray-100  '
									>
										{headerGroup.headers?.map((column) => (
											<th
												{...column.getHeaderProps()}
												scope='col '
												class='text-start   py-2 '
											>
												<div className=' w-full whitespace-normal text-center  '>
													{column.render("Header")}
												</div>
											</th>
										))}
									</tr>
								))}
							</thead>
						)}
						<tbody {...getTableBodyProps()}>
							{rows?.map((row) => {
								prepareRow(row);
								return (
									<tr
										{...row.getRowProps()}
										class=' border-b bg-white  hover:bg-slate-200 font-semibold  '
										// onClick={() => {
										// 	console.log(row);
										// }}
									>
										{row.cells?.map((cell) => {
											return (
												<td
													{...cell.getCellProps()}
													onClick={
														// console.log(row.cells.indexOf(cell))
														row.cells.indexOf(cell) == 0
															? null
															: () =>
																	betHandler(
																		cell.value,
																		row.cells.at(0).value,
																		row.id
																	)
													}
													class={` border-r-2 w-1/12 hover:bg-slate-100 ${
														cell.value == blue && row.id ? null : null
													}`}
												>
													<div className='w-full h-full whitespace-normal'>
														{cell.render("Cell")}
													</div>
												</td>
											);
										})}
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

export default LiveSoccerSubTables;
