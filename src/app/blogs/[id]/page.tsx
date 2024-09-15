import BlogDetails from '@/components/ui/BlogDetails'
import React from 'react'


type BlogProps ={
    params:{
        id:string
    }
}

export async function generateStaticParams() {
    const res = await fetch('http://localhost:5000/blogs')
    const blogs=await res.json()
   
    return blogs.slice(0,3).map((blog:any) => ({
      id:blog.id
    }))
  }


async function DetailsPage({params}:BlogProps) {
    const res=await fetch(`http://localhost:5000/blogs/${params.id}`,{
        cache:'no-store'
    })
    const data=await res.json()

   
  return (
    <div>
        <BlogDetails blog ={data}/>
    </div>
  )
}

export default DetailsPage