import React from "react";

function AsPersonalDetails() {
	return (
		<div>
			<div className='w-full  '>
				<div className='w-full h-12 bg-indigo-900 text-white  flex items-center'>
					personaldetails
				</div>
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
								date of birth
							</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex space-x-10 '>
							<div className='py-3  w-36 text-xs text-gray-700'>country</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
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
							<div className='py-3  w-36 text-xs text-gray-700'>street</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex space-x-10 '>
							<div className='py-3  w-36 text-xs text-gray-700'>
								post/zip code
							</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex space-x-10 '>
							<div className='py-3  w-36 text-xs text-gray-700'>phone</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex space-x-10 '>
							<div className='py-3  w-36 text-xs text-gray-700'>email</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex space-x-10 '>
							<div className='py-3  w-36 text-xs text-gray-700'>
								main currency
							</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
					<div className=''>
						<div className='flex space-x-10 '>
							<div className='py-3  w-36 text-xs text-gray-700'>
								other currency
							</div>
							<div className='w-96 py-3 px-4 text-xs  flex items-center text-gray-500 rounded-3xl bg-slate-200'>
								punjab
							</div>
						</div>
					</div>
				</div>
				<div className='px-5  py-4'>
					<form>
						<div className='w-96 space-y-4'>
							<div className='text-xs text-gray-500'>password</div>
							<div className='flex space-x-2'>
								<div className='flex items-center  overflow-hidden  '>
									<input
										type='password'
										id='email'
										placeholder='Password'
										className='bg-opacity-20 bg-gray-400 rounded-3xl  w-full'
										required
									></input>
								</div>
								<div className='flex items-center  overflow-hidden  '>
									<input
										type='password'
										id='email'
										placeholder='Password'
										className='bg-opacity-20 bg-gray-400 rounded-3xl  w-full'
										required
									></input>
								</div>
							</div>
							<div>
								<button className='px-4 py-2 rounded-2xl  bg-slate-300'>
									change password
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AsPersonalDetails;
