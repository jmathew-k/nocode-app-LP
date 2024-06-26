import React from 'react'
import DemoHeader from '../partials/DemoHeader'

function Demo() {
	return (
		<div className='flex flex-col min-h-screen overflow-hidden'>
			{/*  Site header */}
			<DemoHeader />

			{/*  Page content */}
			<main className='flex-grow'>
				<section>
					<div className='max-w-6xl mx-auto px-4 sm:px-6'>
						<div className='pt-32 pb-12 md:pt-40 md:pb-20'>
							{/* Section header */}
							<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
								<h2 className='h1'>Get in touch with the Tesseract team</h2>
							</div>

							{/* Contact form */}
							<form
								method='POST'
								data-netlify='true'
								name='contact'
								className='max-w-xl mx-auto'
								onSubmit='submit'
							>
								<input type='hidden' name='form-name' value='contact' />
								<div className='flex flex-wrap -mx-3 mb-4'>
									<div className='w-full md:w-1/2 px-3 mb-4 md:mb-0'>
										<label
											className='block text-gray-800 text-sm font-medium mb-1'
											htmlFor='first-name'
										>
											First Name <span className='text-red-600'>*</span>
										</label>
										<input
											id='first-name'
											type='text'
											className='form-input w-full text-gray-800'
											placeholder='Enter your first name'
											required
										/>
									</div>
									<div className='w-full md:w-1/2 px-3'>
										<label
											className='block text-gray-800 text-sm font-medium mb-1'
											htmlFor='last-name'
										>
											Last Name <span className='text-red-600'>*</span>
										</label>
										<input
											id='last-name'
											type='text'
											className='form-input w-full text-gray-800'
											placeholder='Enter your last name'
											required
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 mb-4'>
									<div className='w-full px-3'>
										<label
											className='block text-gray-800 text-sm font-medium mb-1'
											htmlFor='email'
										>
											Work Email <span className='text-red-600'>*</span>
										</label>
										<input
											id='email'
											type='email'
											className='form-input w-full text-gray-800'
											placeholder='Enter your email address'
											required
										/>
									</div>
								</div>
								<div className='flex flex-wrap -mx-3 mb-4'>
									<div className='w-full px-3'>
										<label
											className='block text-gray-800 text-sm font-medium mb-1'
											htmlFor='subject'
										>
											Company Name <span className='text-red-600'>*</span>
										</label>
										<input
											id='subject'
											type='text'
											className='form-input w-full text-gray-800'
											placeholder='Enter your company name'
											required
										/>
									</div>
								</div>
								
								<div className='flex flex-wrap -mx-3 mt-4'>
									<div className='w-full px-3'>
										<button
											type='submit'
											className='btn text-white bg-teal-911 hover:bg-teal-400 w-full'
										>
											Submit
										</button>
									</div>
								</div>
								<div className='text-xs text-gray-600 mt-4'>
									By submitting this form, you consent to allow Tesseract to
									store and process the personal information submitted above and
									agree to our{' '}
									<a className='underline' href='#0'>
										terms and conditions
									</a>{' '}
									as well as our{' '}
									<a className='underline' href='#0'>
										Privacy Policy
									</a>
									.
								</div>
							</form>
						</div>
					</div>
				</section>
			</main>
		</div>
	)
}

export default Demo
