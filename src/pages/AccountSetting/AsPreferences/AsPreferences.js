import React from "react";

function AsPreferences() {
	return (
		<div>
			<div className='w-full  '>
				<div className='w-full h-12 bg-indigo-900 text-white   flex items-center'>
					prefernces
				</div>
				<div>
					<form>
						<div className='px-5 py-5 space-y-5'>
							<div className=''>
								<div className='flex space-x-10 '>
									<div className='py-3  w-36 text-xs text-gray-700'>city</div>
									<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
										punjab
									</div>
								</div>
							</div>
							<div className=''>
								<div className='flex space-x-10 '>
									<div className='py-3  w-36 text-xs text-gray-700'>
										odds display format
									</div>
									<div className='w-96 '>
										<select className='w-full rounded-3xl'>
											<option value='' selected>
												Select a Color
											</option>
											<option value='blue'>Blue</option>
											<option value='green'>Green</option>
											<option value='red'>Red</option>
											<option value='yellow'>Yellow</option>
										</select>
									</div>
								</div>
							</div>
							<div className=''>
								<div className='flex space-x-10 '>
									<div className='py-3  w-36 text-xs text-gray-700'>
										time format
									</div>
									<div className='w-96 '>
										<select className='w-full rounded-3xl'>
											<option value='' selected>
												Select a Color
											</option>
											<option value='blue'>Blue</option>
											<option value='green'>Green</option>
											<option value='red'>Red</option>
											<option value='yellow'>Yellow</option>
										</select>
									</div>
								</div>
							</div>
							<div className=''>
								<div className='flex space-x-10 '>
									<div className='py-3  w-36 text-xs text-gray-700'>city</div>
									<div className='w-96 '>
										<select className='w-full rounded-3xl'>
											<option value='' selected>
												default timezone
											</option>
											<option value='blue'>Blue</option>
											<option value='green'>Green</option>
											<option value='red'>Red</option>
											<option value='yellow'>Yellow</option>
										</select>
									</div>
								</div>
							</div>
							<div className=''>
								<div className='flex space-x-10 '>
									<div className='py-3  w-36 text-xs text-gray-700'>
										odds change indication
									</div>
									<div className='w-96 '>
										<select className='w-full rounded-3xl ring-gray-200 ring-2'>
											<option value='' selected>
												default timezone
											</option>
											<option value='blue'>Blue</option>
											<option value='green'>Green</option>
											<option value='red'>Red</option>
											<option value='yellow'>Yellow</option>
										</select>
									</div>
								</div>
							</div>
							<div className='space-x-20'>
								<label for='vehicle1'> show balance</label>
								<input
									type='checkbox'
									id='vehicle1'
									name='vehicle1'
									value='Bike'
									className='bg-gray-200 p-3 rounded-md'
								/>
							</div>
							<div className='space-y-5'>
								<div>betting setting</div>
								<div className='space-x-5'>
									<input
										type='radio'
										id='javascript'
										name='fav_language'
										value='JavaScript'
										className='p-3 bg-slate-200'
									/>
									<label for='javascript'>Accept any odds</label>
								</div>
								<div className='space-x-5'>
									<input
										type='radio'
										id='javascript'
										name='fav_language'
										value='JavaScript'
										className='p-3 bg-slate-200'
									/>
									<label for='javascript'>dont accept changed odds</label>
								</div>
								<div className='space-x-5'>
									<input
										type='radio'
										id='javascript'
										name='fav_language'
										value='JavaScript'
										className='p-3 bg-slate-200'
									/>
									<label for='javascript'> accept higher oods</label>
								</div>
							</div>
						</div>
					</form>
				</div>
				<div className='px-5  py-4'>
					<form>
						<div className='w-96 space-y-4'>
							<div className='text-xs text-gray-500'>password</div>
							<div className=' flex space-x-4'>
								<div className='flex space-x-2 items-center  overflow-hidden  '>
									<input
										type='checkbox'
										id='vehicle1'
										name='vehicle1'
										value='Bike'
										className='bg-gray-200 p-3 rounded-md'
									/>
									<label for='vehicle1'> Email</label>
								</div>
								<div className='flex space-x-2 items-center  overflow-hidden  '>
									<input
										type='checkbox'
										id='vehicle1'
										name='vehicle1'
										value='Bike'
										className='bg-gray-200 p-3 rounded-md'
									/>
									<label for='vehicle1'> Phone</label>
								</div>
							</div>
							<div>
								<button className='px-4 py-2 rounded-2xl  bg-slate-300'>
									save
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AsPreferences;
