import React from 'react'
import Category from './Category'

const Categories = () => {
	return (
		<div className='flex gap-6 mb-8'>
			<div>
				<Category />
			</div>
			<div>
				<Category />
			</div>
			<div>
				<Category />
			</div>
		</div>
	)
}

export default Categories