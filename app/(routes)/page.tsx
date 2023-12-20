import Blogs from '@/components/Blogs'
import Categories from '@/components/Categories'
import Image from 'next/image'

async function fetchCategories() {
  const options = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
    }
  }

  try {
    const res = await fetch("http://127.0.0.1:1337/api/categories", options);

    const response = await res.json();

    return response;
  } catch (error) {
    console.log(error);
  }

}

export default async function Home() {
  const categories = await fetchCategories();

  return (
    <div className='grid gap-4 p-4 mt-6 place-items-center'>
      <Categories categories={categories} />
      <Blogs />
    </div>
  )
}
