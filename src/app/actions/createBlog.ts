"use server"

export const createBlogs=async(data:any)=>{
    const res=await fetch(`http://localhost:5000/blogs`,{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify(data),
          cache:'no-store'
    })
    const blogs=await res.json()
    return  blogs
}