import React, { useState } from "react";

function PromtionCasino() {
	const [promoAll, setPromoAll] = useState([
		{
			id: 1,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/Image%20(17)_20220908142421_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100",
			Catname: "",
			CatImage: "",
			color: "bg-blue-500",
		},
		{
			id: 2,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/reward_1_20220825095831_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-pink-500",
		},
		{
			id: 3,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/reward_2_20220825101455_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-purple-500",
		},
		{
			id: 4,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/reward_3_20220825102554_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-green-500",
		},
		{
			id: 5,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/Property%201=tournament-img_20220829134943_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-sky-200",
		},
		{
			id: 6,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/Property%201=tournament-img_20220805121517_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-fuchsia-500",
		},
		{
			id: 7,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/Image%20(13)_20220818134227_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-amber-500",
		},
		{
			id: 6,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/Property%201=tournament-img_20220805121517_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-fuchsia-500",
		},
		{
			id: 7,
			Image:
				"https://cdn.aglty.io/bluechip-prod-v2/Attachments/NewItems/Image%20(13)_20220818134227_0.png",
			Title: "First Deposit",
			Detail: "100% up  to  $100 ",
			Catname: "",
			CatImage: "",
			color: "bg-amber-500",
		},
	]);
	return (
		<div className='w-full'>
			<div className='w-full flex justify-center items-center  '>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5'>
					{promoAll.map((v, i) => {
						return (
							<div
								className={` flex flex-col justify-center px-2 py-2 h-96 w-80   rounded-2xl ${v.color}`}
							>
								<div className=' w-full flex justify-center'>
									<img src={v.Image} className='w-2/5  h-full' alt='' />
								</div>
								<div className='px-1 relative  '>
									<div className='  flex flex-col items-center w-full  shadow-lg  space-y-5   '>
										<div className='flex  flex-col items-center justify-center'>
											<div className='text-3xl font-bold'>{v.Detail}</div>
											<div className=''>{v.Title}</div>
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

export default PromtionCasino;
