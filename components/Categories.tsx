import React from 'react'
import Category from './Category'

type TCategoriesProps = {
	categories: {
		data: {
			id: number;
			attributes: {
				Title: string;
				createdAt: string;
			}
		}[]
	}
}

const Categories = ({ categories }: TCategoriesProps) => {
	return (
		<div className='flex gap-6 mb-8 flex-wrap justify-center'>
			{categories.data.map((category) => (
				<Category key={category.id} category={category} />
			))}
		</div>
	)
}

export default Categories