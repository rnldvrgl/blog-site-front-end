import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
	return (
		<div className='p-4 mb-4 overflow-hidden border-gray-600 rounded-lg shadow-md cursor-pointer borer'>
			<Link href={"/"}>
				<div className='relative w-12 h-12'>
					<Image className='rounded-t-lg' fill src={""} alt={""} width={300} height={200} />
				</div>
				<div className='p-2'>
					<h2 className='mb-2 text-xl font-semibold overflow-ellipsis'>
						Title of Blog
					</h2>
					<p className='text-gray-600'>
						Desription of Blog
					</p>
				</div>
			</Link>
		</div>
	)
}

export default BlogCard