"use client"
import BlogCard from '@/components/ui/BlogCard'
import { useGetBlogsQuery } from '@/redux/api/baseApi'
import React from 'react'


type blogsProps = {
  id: string,
  title: string,
  description: string,
  publish_date: string,
  author_name: string,
  blog_image: string,
  total_likes: string
}

function Blogs() {
    // const res=await fetch("http://localhost:5000/blogs",
    //     {cache:"no-store"}
    //   )
    //   const blogs=await res.json()
  const {data,isLoading,isError,error}=useGetBlogsQuery("")
  console.log(data)

  return (
    <div className='mt-6 max-w-7xl mx-auto'>
       <div>
       <h1 className='text-4xl font-bold text-center'>All  Blogs From <span className='text-accent'>Blogiz</span></h1>
        <p className="text-gray-400 text-center max-w-xl mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
       </div>
       
       <div className='grid grid-cols-3 mt-5 gap-5'>
           {data?.map((item:blogsProps)=> (<BlogCard key={item.id} blog={item} />))}
       </div>
    </div>
  )
}

export default Blogs