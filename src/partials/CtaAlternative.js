import React from 'react'

function CtaAlternative() {
	return (
		<section>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 pt-24'>
				<div className='pb-12 md:pb-20'>
					{/* CTA box */}
					<div
						className='bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12'
						data-aos='zoom-y-out'
					>
						<div className='flex flex-col lg:flex-row justify-between items-center'>
							{/* CTA content */}
							<div className='mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left lg:w-1/2'>
								<h2 className='h4 text-white'>
									Let's build the Metaverse together
								</h2>
							</div>

							{/* CTA button */}
							<div>
								<a
									href='https://us13.list-manage.com/contact-form?u=de3b7468d46b98fc48453220a&form_id=ffc6eabbe23cfb0762a4808b4417de2d'
									className='btn text-black text-sm bg-white hover:bg-gray-100'
								>
									Get In Touch
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CtaAlternative
