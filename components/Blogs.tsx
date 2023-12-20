"use client"

import React, { useContext } from 'react'
import BlogCard from './BlogCard'
import { CategoryContext } from '@/context/CategoryContext';

const Blogs = ({ blogs }: {
	blogs: any
}) => {
	const { category } = useContext(CategoryContext);
	const filteredBlogs = blogs.data.filter((blog: any) => {
		return blog.attributes.categories.data.some((cat: any) => cat.attributes.title === category)
	})

	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{filteredBlogs.length > 0 ? filteredBlogs?.map((blog: any) => (
				<BlogCard key={blog.id} blog={blog} />
			)) : <h1 className='text-2xl font-semibold text-center'>No blogs found</h1>}
		</div>
	)
}

export default Blogs