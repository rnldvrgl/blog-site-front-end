import React from 'react'
import Category from './Category'

type TCategoriesProps = {
	categories: {
		data: {
			id: number;
			attributes: {
				title: string;
				createdAt: string;
			}
		}[]
	}
}

const Categories = ({ categories }: TCategoriesProps) => {
	return (
		<div className='flex flex-wrap justify-center gap-3 mb-8 md:justify-start'>
			{categories.data.map((category) => (
				<Category key={category.id} category={category} />
			))}
		</div>
	)
}

export default Categories