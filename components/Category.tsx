"use client"
import React from 'react'
import { Card, CardHeader } from './ui/card';

interface ICategory {
	id: number;
	attributes: {
		Title: string;
		createdAt: string;
	}
}

type TCategoryProps = {
	category: ICategory;
}

const Category = ({ category }: TCategoryProps) => {
	return (
		<Card>
			<CardHeader>
				{category.attributes.Title}
			</CardHeader>
		</Card>
	)
}

export default Category