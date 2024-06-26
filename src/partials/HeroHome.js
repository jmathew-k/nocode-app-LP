import React from 'react'
// import { Link } from 'react-router-dom'



function HeroHome() {
	return (
		<section className='relative'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6'>
				{/* Hero content */}
				<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
					{/* Section header */}
					<div className='text-center pb-12 md:pb-2'>
						<h1
							className='text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-8'
							data-aos='zoom-y-out'
						>
							Decentralized {' '}
							<span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
							Web 3
							</span>
						</h1>
						<div className='max-w-4xl mx-auto'>
							<p
								className='text-xl text-gray-600 mb-8'
								data-aos='zoom-y-out'
								data-aos-delay='150'
							>
								Tesseract creates software that advances a more open, safe, and collaborative Web
							</p>
							<div
								className='max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center'
								data-aos='zoom-y-out'
								data-aos-delay='300'
							>
								{/* <div>
									<Link
										to='/demo'
										className='btn text-white bg-teal-911 hover:bg-teal-400 w-full mb-4 sm:w-auto sm:mb-0'
									>
										Learn More
									</Link>
								</div> */}
							</div>
							<div className='w-full'>
								<img
									className=''
									src={require('../images/sphere_gradient.png').default}
									alt='sphere'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroHome
