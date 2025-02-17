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
  return (
    <section className="container mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="text-center my-6">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white">Blogs</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block mt-2"></span>
      </div>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {blogs.map((blog: TBlog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogsPage;
