import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, CardContent } from './ui/card'
import { AspectRatio } from './ui/aspect-ratio'
import { Badge } from './ui/badge'

const BlogCard = ({ blog }: {
	blog: any
}) => {
	const truncateBlogDesc = blog.attributes.description.length > 80 ? blog.attributes.description.substring(0, 80) + "..." : blog.attributes.description;

	const imageUrl = blog?.attributes.image?.data?.attributes?.url;

	return (
		<Card className='overflow-hidden cursor-pointer group'>
			<CardContent className='px-4 py-5'>
				<Link href={`/blog/${blog.id}`}>
					<AspectRatio ratio={4 / 3} className='relative w-full overflow-hidden border rounded-sm '>
						<Image fill objectFit="cover" src={blog?.attributes?.image?.data ? imageUrl : "/no-image.jpg"} alt={""} className="transition-all duration-500 ease-in-out group-hover:scale-110" />
					</AspectRatio>
					<div className='p-2 mt-2'>
						<div className='flex flex-wrap gap-3 my-2'>
							{blog.attributes.categories.data.map((category: any) => (
								<Badge key={category.id}>
									{category.attributes.title}
								</Badge>
							))}
						</div>
						<h2 className='mb-2 text-xl font-semibold overflow-ellipsis'>
							{blog.attributes.title}
						</h2>
						<p className='opacity-75'>
							{truncateBlogDesc}
						</p>
					</div>
				</Link>
			</CardContent>
		</Card>
	)
}

export default BlogCard