import { deleteBlog } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";

//   return blogs.slice(0, 3).map((blog: Blog) => ({
//     blogId: blog.id,
//   }));
// };

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
  const blog = await res.json();

  //   console.log(blog);

  return (
    <section className="my-10">
      <div className="my-4">
        <h1 className="text-4xl font-semibold text-center">{blog.title}</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="w-2/3 shadow-lg rounded-lg mx-auto p-6">
        <div className="flex justify-between mb-5">
          <div className="flex items-center py-2 rounded-lg gap-2">
            <Image src="https://cdn-icons-png.flaticon.com/512/219/219986.png" width={30} height={30} alt="author image" />
            <span className="text-lg font-medium">{blog.author_name}</span>
          </div>
        </div>
        <figure className="mb-5">
          <Image src={blog.blog_image} width={600} height={0} alt="blog image" className="rounded-lg w-2/3 object-cover" />
        </figure>
        <div className="text-lg leading-relaxed">
          <p className="text-justify">{blog.description}</p>
        </div>
        <div className="flex justify-between items-center my-5">
          <div className="flex items-center text-xl">
            <AiFillLike className="text-teal-500 mr-2" />
            <span className="mr-1">{blog.total_likes}</span>
            Likes
          </div>
        </div>

        {session?.user ? (
          <form
            action={async () => {
              "use server";
              await deleteBlog(blogId);
            }}
          >
            <Button type="submit">Delete</Button>
          </form>
        ) : undefined}
      </div>
    </section>
  );
};

export default BlogDetailsPage;
