import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoChevronBack } from "react-icons/io5";

const options = {
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
	}
}
async function fetchBlog(id: number) {
	try {
		const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/blogs/${id}?populate=*`, options);

		const response = await res.json();

		return response;
	} catch (error) {
		console.log(error);
	}
}

const BlogPage = async ({ params }: any) => {
	const blog = await fetchBlog(params?.id);
	console.log(blog)
	const imageUrl = process.env.NEXT_PUBLIC_BASE_URL + blog?.data?.attributes.image?.data?.attributes?.url;

	console.log(imageUrl)
	return (
		<div className='container'>
			<Link href={"/"} className='flex items-center gap-3 w-fit group'>
				<IoChevronBack className="transition-all duration-300 ease-in-out group-hover:-translate-x-1" />
				Back
			</Link>
			<div className='relative w-full mt-5 overflow-hidden rounded-lg h-96'>
				<Image fill objectFit='cover' src={blog?.data?.attributes?.image?.data ? imageUrl : "/no-image.jpg"} alt={""} />
			</div>
			<div className='mt-4'>
				<div className='flex flex-wrap items-center my-4'>
					{blog?.data?.attributes?.categories.data.map((category: any) => (
						<Badge key={category.id}>
							{category.attributes.title}
						</Badge>
					))}
				</div>
				<h1 className='text-3xl font-semibold'>
					{blog?.data?.attributes?.title}
				</h1>
				<div className='my-2 text-gray-400 '>
					<span className='text-sm'>
						Published on {" "}
						{new Date(blog?.data?.attributes?.createdAt).toLocaleDateString()}
					</span>
				</div>
				<p>
					{blog?.data?.attributes?.description}
				</p>
			</div>
		</div >
	)
}

export default BlogPage;