import { deleteBlog } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { TBlog } from "../page";

export async function generateMetadata({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  const res = await fetch(`${process.env.Base_Url}/blog/${blogId}`);
  const blog = await res.json();

  return {
    title: blog.title,
    description: blog.description,
  };
}

const BlogDetailsPage = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const session = await getServerSession(authOptions);

  const { blogId } = await params;

  const res = await fetch(`${process.env.Base_Url}/blog/${blogId}`);
  const blog: TBlog = await res.json();
  // console.log("🚀 ~ BlogDetailsPage ~ blog:", blog);

  return (
    <section className="my-10 px-4 sm:px-6 lg:px-8">
      <div className="my-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-semibold">{blog.title}</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block mt-2"></span>
      </div>

      <div className="w-full sm:w-2/3 mx-auto shadow-lg rounded-lg p-6">
        {/* Author and Meta Data */}
        <div className="flex justify-between mb-5 flex-wrap items-center">
          <div className="flex items-center gap-2">
            <Image src="https://cdn-icons-png.flaticon.com/512/219/219986.png" width={30} height={30} alt="author image" className="rounded-full" />
            <span className="text-lg font-medium">{blog.authorName}</span>
          </div>
        </div>

        {/* Blog Image */}
        <figure className="mb-5">
          <Image src={blog.blogImage} width={600} height={400} alt="blog image" className="rounded-lg w-full sm:w-2/3 object-cover mx-auto" />
        </figure>

        {/* Blog Content */}
        <div className="text-lg leading-relaxed">
          <p className="text-justify text-gray-700 dark:text-gray-300">{blog.description}</p>
        </div>

        {/* Admin Actions (Delete Blog) */}
        {session?.user && (
          <form
            action={async () => {
              "use server";
              await deleteBlog(blogId);
            }}
          >
            <Button type="submit" className="w-full sm:w-auto mt-4">
              Delete
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default BlogDetailsPage;
