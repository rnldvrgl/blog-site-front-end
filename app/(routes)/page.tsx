import Blogs from '@/components/Blogs'
import Categories from '@/components/Categories'
import Image from 'next/image'

const options = {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
  }
}
async function fetchCategories() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/categories`, options);

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}

async function fetchBlogs() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/blogs?populate=`, options);

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
  }
}
export default async function Home() {
  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  return (
    <div className='container grid gap-4 pb-6 mt-6 place-items-center md:place-items-start'>
      <Categories categories={categories} />
      <Blogs blogs={blogs} />
    </div>
  )
}
