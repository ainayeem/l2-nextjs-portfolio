import BlogCard from "@/components/blogCard/BlogCard";

export interface TBlog {
  _id: string;
  title: string;
  description: string;
  publish_date: string;
  author_name: string;
  blog_image: string;
  total_likes: string;
}

const BlogsPage = async () => {
  const res = await fetch(`${process.env.Base_Url}/blog`, {
    cache: "no-store",
  });
  const blogs = await res.json();
  //   console.log(projects);
  return (
    <section className="container mx-auto my-10">
      <div>
        <h1 className="text-4xl font-semibold text-center">Blogs</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="gap-10 justify-center my-10 grid grid-cols-1 lg:grid-cols-2">
        {blogs.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
