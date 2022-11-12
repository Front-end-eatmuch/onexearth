import React, { useContext } from "react";
import {
	BrowserRouter,
	Router,
	RouterProvider,
	Routes,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { Context } from "../context/Context";
// import routes from "../Routes";
import Routess from "../Routes";

function Mainlayout() {
	const { signupOpen, signupOpenHandler } = useContext(Context);

	return (
		<div className='  '>
			<BrowserRouter>
				<div className='relative  '>
					<div className='fixed top-0 z-40'>
						<Navbar />
					</div>
					<div className='mt-14'>
						<Routess />
					</div>
					{signupOpen && (
						<div className='-mt-14 absolute top-0 right-0 bottom-0 left-0  bg-neutral-500 bg-opacity-70  z-50 scol'>
							<div className=' w-full h-full flex justify-center pt-36'>
								<div className='bg-white  h-fit py-10 w-10/12 lg:w-8/12 px-10 flex flex-col justify-center relative'>
									<div className='w-full text-center py-4 text-xl font-bold text-blue-500'>
										Register
									</div>
									<div
										className='absolute -right-7 -top-7 cursor-pointer'
										onClick={signupOpenHandler}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
											stroke-width='1.5'
											stroke='currentColor'
											class='w-8 h-8 text-white hover:rotate-90 duration-500'
										>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</div>
									<div className='w-full px-10 space-y-4'>
										<div className='w-full h-44 bg-[url("https://images.unsplash.com/photo-1613125479732-14543c793349?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80")] bg-contain'></div>
										<div className='w-full h-8 bg-blue-200'></div>
										<form className='w-full space-y-5'>
											<div className='flex w-full space-x-4 '>
												<div className='w-full'>
													<input
														type='text'
														id='email'
														placeholder='Firstname'
														className='bg-opacity-20 bg-gray-200 w-full text-sm border-blue-500'
														required
														onChange={(e) => {}}
													></input>
												</div>
												<div className='w-full'>
													<input
														type='text'
														id='email'
														placeholder='Lastname'
														className='bg-opacity-20 bg-gray-200 w-full text-sm border-blue-500'
														required
														onChange={(e) => {}}
													></input>
												</div>
											</div>
											<div>
												<div className=' '>
													<select className='w-full  text-sm border-blue-500'>
														<option value='' selected>
															Select a currency
														</option>
														<option value='blue'>Blue</option>
														<option value='green'>Green</option>
														<option value='red'>Red</option>
														<option value='yellow'>Yellow</option>
													</select>
												</div>
											</div>
											<div className='w-full flex space-x-4'>
												<div className='w-full '>
													<select className='w-full  text-sm border-blue-500 text-gray-600'>
														<option value='' selected className=''>
															Select a country
														</option>
														<option value='blue'>Blue</option>
														<option value='green'>Green</option>
														<option value='red'>Red</option>
														<option value='yellow'>Yellow</option>
													</select>
												</div>
												<div className='w-full '>
													<select className='w-full text-sm border-blue-500 text-gray-600'>
														<option value='' selected>
															Select a city
														</option>
														<option value='blue'>Blue</option>
														<option value='green'>Green</option>
														<option value='red'>Red</option>
														<option value='yellow'>Yellow</option>
													</select>
												</div>
											</div>
											<div className='flex w-full space-x-4 '>
												<div className='w-full'>
													<input
														type='text'
														id='email'
														placeholder='Email'
														className='bg-opacity-20 bg-gray-200 w-full text-sm border-blue-500'
														required
														onChange={(e) => {}}
													></input>
												</div>
												<div className='w-full'>
													<input
														type='text'
														id='email'
														placeholder='Phone_number'
														className='bg-opacity-20 bg-gray-200 w-full text-sm border-blue-500'
														required
														onChange={(e) => {}}
													></input>
												</div>
											</div>

											<div className='flex  w-full space-x-4 '>
												<input
													type='password'
													id='password'
													placeholder='password'
													className='bg-opacity-20 bg-gray-200  text-gray-600 w-full text-sm border-blue-500'
													required
													onChange={(e) => {}}
												></input>
												<input
													type='password'
													id='password'
													placeholder='re-enter  your password'
													className='bg-opacity-20 bg-gray-200  text-gray-600 w-full text-sm border-blue-500'
													required
													onChange={(e) => {}}
												></input>
											</div>
											<div className='w-full flex space-x-4'>
												<div className='w-full'>
													<input
														type='text'
														id='email'
														placeholder='Promo_code'
														className='bg-opacity-20 bg-gray-200 w-full text-sm border-blue-500'
														onChange={(e) => {}}
													></input>
												</div>
												<div className='w-full'>
													<button className='w-full bg-green-500 h-full text-white'>
														Register
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</BrowserRouter>
		</div>
	);
}

export default Mainlayout;
