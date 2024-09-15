import React from 'react'
import LatestBlogCard from '../ui/LatestBlogCard'
import BlogCard from '../ui/BlogCard'

type blogsProps = {
  id: string,
  title: string,
  description: string,
  publish_date: string,
  author_name: string,
  blog_image: string,
  total_likes: string
}

function LatestBlogs({blogs}:{blogs:blogsProps[]}) {
  return (
    <div className='mt-6 max-w-7xl mx-auto'>
       <div>
       <h1 className='text-4xl font-bold text-center'>Latest Blogs From <span className='text-accent'>Blogiz</span></h1>
        <p className="text-gray-400 text-center max-w-xl mx-auto">
            <i>
              Dive into the fascinating world of quantum computing, where
              unlocking unprecedented computational power.
            </i>
          </p>
       </div>
       <div className='grid grid-cols-2 gap-5'>
           {blogs?.slice(0,2).map((item)=> (<LatestBlogCard key={item.id} blog={item} />))}
       </div>
       <div className='grid grid-cols-3 mt-5 gap-5'>
           {blogs?.slice(2,5).map((item)=> (<BlogCard key={item.id} blog={item} />))}
       </div>
    </div>
  )
}

export default LatestBlogs