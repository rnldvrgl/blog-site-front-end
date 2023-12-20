"use client"
import React from 'react'
import { Card, CardHeader } from './ui/card';

interface ICategory {
	id: number;
	attributes: {
		title: string;
		createdAt: string;
	}
}

type TCategoryProps = {
	category: ICategory;
}

const Category = ({ category }: TCategoryProps) => {
	return (
		<Card className='transition-all cursor-pointer hover:bg-primary hover:text-primary-foreground'>
			<CardHeader className='px-3 py-2 text-sm'>
				{category.attributes.title}
			</CardHeader>
		</Card>
	)
}

export default Category