import React from "react";

function Footer() {
	return (
		<div className='w-full px-4'>
			{" "}
			<div className=' bg-slate-200  flex items-center justify-center'>
				<div className='grid sm:grid-cols-2 lg:grid-cols-5  gap-5  py-20'>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Lumr</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Company</h4>
						<div>
							<h6 className='text-xs font-light'>app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Plans</h6>
							<h6 className='text-xs font-light'>Features</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Support</h4>
						<div>
							<h6 className='text-xs font-light'>Email: xxxxx@gmail.com</h6>
							<h6 className='text-xs font-light'>Mobile: xxxxxx944165</h6>
							<h6 className='text-xs font-light'>Dicord: channel</h6>
							<h6 className='text-xs font-light'>Facebook: xxxxxlumr</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Community</h4>
						<div>
							<h6 className='text-xs font-light'>Discord</h6>
							<h6 className='text-xs font-light'>github</h6>
							<h6 className='text-xs font-light'>facebook</h6>
							<h6 className='text-xs font-light'>instagram</h6>
						</div>
					</div>
					<div className='flex flex-col items-center space-y-4'>
						<h4 className='text-xl font-bold text-black '>Products</h4>
						<div>
							<h6 className='text-xs font-light'>Desktop app</h6>
							<h6 className='text-xs font-light'>Mobile apps</h6>
							<h6 className='text-xs font-light'>Developers as messonaries</h6>
							<h6 className='text-xs font-light'>
								Ai software for bussiness automation
							</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
