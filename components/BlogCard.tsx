import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogCard = () => {
	return (
		<div className='rounded-lg shadow-md p-4 mb-4 overflow-hidden border border-gray-600 cursor-pointer'>
			<Link href={"/blog/23"}>
				<div>
					<Image className='rounded-t-lg' fill objectFit='cover' src={""} alt={""} width={300} height={200} />
				</div>
				<div className='p-2'>
					<h2 className='text-xl font-semibold mb-2 overflow-ellipsis'>
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