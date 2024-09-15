import LatestBlogs from "@/components/latest-blogs/page";

const HomePage = async () => {
  const res=await fetch("http://localhost:5000/blogs",
    {next:{
      revalidate:30
    }}
  )
  const data=await res.json()
  

  return (
    <>
       <LatestBlogs blogs={data}/>
    </>
  );
};

export default HomePage;
