import React from 'react'
import BlogCard from './BlogCard'

const Blogs = ({ blogs }: {
	blogs: any
}) => {
	return (
		<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
			{blogs.data.map((blog: any) => (
				<BlogCard key={blog.id} blog={blog} />
			))}
		</div>
	)
}

export default Blogs