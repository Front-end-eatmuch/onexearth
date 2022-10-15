import React, { useState } from "react";

function PromotionAll() {
	const [promoAll, setPromoAll] = useState([
		{
			id: 1,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
		{
			id: 2,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
		{
			id: 3,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
		{
			id: 4,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
		{
			id: 5,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
		{
			id: 6,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
		{
			id: 7,
			Image:
				"https://cdn.pixabay.com/photo/2018/10/19/05/12/naruto-3757871_1280.jpg",
			Title: "First Deposit",
			Detail: "100% up  to  $100 Get up to $100",
			Catname: "",
			CatImage: "",
		},
	]);
	return (
		<div className='w-screen'>
			<div className='w-full flex justify-center items-center '>
				<div className='grid grid-cols-3 gap-5 py-5'>
					{promoAll.map((v, i) => {
						return (
							<div className=' flex flex-col px-2 py-2  bg-slate-200'>
								<div className='h-56 w-96 '>
									<img src={v.Image} className='w-full  h-full' alt='' />
								</div>
								<div className='px-1 relative  '>
									<div className=' py-10 flex flex-col items-center w-full bg-white shadow-lg -translate-y-5 z-20 space-y-5   '>
										<div className='absolute -top-4 p-2 rounded-full bg-slate-400'>
											<i class='fa-sharp fa-solid fa-futbol text-5xl'></i>
										</div>
										<div className='flex  flex-col items-center justify-center'>
											<div>{v.Title}</div>
											<div>{v.Detail}</div>
										</div>
										<div className='flex space-x-2'>
											<div>
												<button className='px-4 py-2  bg-green-400 rounded-2xl'>
													Get Bonus
												</button>
											</div>
											<div>
												<button className='px-4 py-2  bg-gray-400  rounded-2xl'>
													find out more
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default PromotionAll;
