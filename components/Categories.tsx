"use client"

import React, { useContext, useLayoutEffect } from 'react'
import Category from './Category'
import { CategoryContext } from '@/context/CategoryContext';

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
	const { changeCategory } = useContext(CategoryContext);

	useLayoutEffect(() => {
		changeCategory(categories.data[0].attributes.title);
	}, [])

	return (
		<div className='flex flex-wrap justify-center gap-3 mb-8 md:justify-start'>
			{categories.data.map((category) => (
				<Category key={category.id} cat={category} />
			))}
		</div>
	)
}

export default Categories