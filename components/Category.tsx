"use client"
import React, { useContext } from 'react'
import { Card, CardHeader } from './ui/card';
import { CategoryContext } from '@/context/CategoryContext';
import { cn } from '@/lib/utils';

interface ICategory {
	id: number;
	attributes: {
		title: string;
		createdAt: string;
	}
}

type TCategoryProps = {
	cat: ICategory;
}

const Category = ({ cat }: TCategoryProps) => {
	const { category, changeCategory } = useContext(CategoryContext);
	return (
		<Card className={cn(`transition-all cursor-pointer hover:bg-primary hover:text-primary-foreground`, category === cat.attributes.title && 'bg-primary text-primary-foreground')
		}
			onClick={() => changeCategory(cat.attributes.title)}
		>
			<CardHeader className='px-3 py-2 text-sm'>
				{cat.attributes.title}
			</CardHeader>
		</Card >
	)
}

export default Category