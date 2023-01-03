import React from "react";
import { Link } from "react-router-dom";

function HomeLogin() {
	return (
		<div>
			{" "}
			<div className='w-full  pt-10  pb-5  flex flex-col text-xs font-bold shadow-2xl  bg-white h-full overflow-hidden'>
				<div className='w-full   '>
					<form className='w-full space-y-16'>
						<div className=' w-full px-4  space-y-5 '>
							{/* <label
															for='email'
															className='font-Yanone_Kaffeesatz font-bold  text-xl text-gray-700'
														>
															Username
														</label> */}
							<div className='flex items-center  overflow-hidden rounded-lg border-2 border-black '>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										class='w-6 h-6  text-black'
									>
										<path
											fill-rule='evenodd'
											d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
											clip-rule='evenodd'
										/>
									</svg>
								</div>
								<input
									type='text'
									id='email'
									placeholder='Username'
									className='bg-opacity-20 text-xs  border-l-0 bg-gray-400  w-full'
									required
								></input>
							</div>
							<div className='flex items-center  overflow-hidden rounded-lg border-2 border-black '>
								<div>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='currentColor'
										class='w-6 h-6  text-black'
									>
										<path
											fill-rule='evenodd'
											d='M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z'
											clip-rule='evenodd'
										/>
									</svg>
								</div>
								<input
									type='password'
									id='email'
									placeholder='Password'
									className='bg-opacity-20 border-l-0 text-xs bg-gray-400  w-full'
									required
								></input>
							</div>
							<div className=''>
								<button className='w-full bg-lime-600  text-white py-3  rounded-lg'>
									login
								</button>
							</div>
							<div className=' text-black'>
								<Link to='#'>forgot your password</Link>
							</div>
						</div>
						<div className='w-full flex justify-center  text-black '>
							<Link to='#'>Register</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default HomeLogin;
