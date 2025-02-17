"use client";

import { createBlog } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
import { toast } from "sonner";

const DashboardBlogPage = () => {
  const handleSubmit = async (formData: FormData) => {
    const data = Object.fromEntries(formData.entries());
    console.log("🚀 ~ handleSubmit ~ data:", data);
    try {
      await createBlog(formData);
      toast.success("Message sent successfully! 🎉");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-center">Create Blog</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="w-2/3">
        <Form action={handleSubmit} className="space-y-8 px-10 mx-auto py-10">
          <div>
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              //   {...register("title")}
              type="title"
              placeholder="Enter title"
              id="title"
              name="title"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Write description"
              name="description"
            ></Textarea>
          </div>

          <div>
            <label htmlFor="authorName" className="text-sm font-medium">
              Author Name
            </label>
            <Input
              //   {...register("authorName")}
              type="authorName"
              placeholder="Enter author name"
              id="authorName"
              name="authorName"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="blogImage" className="text-sm font-medium">
              Blog Image Link
            </label>
            <Input
              //   {...register("blogImage")}
              type="blogImage"
              placeholder="Enter blog image"
              id="blogImage"
              name="blogImage"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="xl:col-span-2">
            <Button type="submit">Create Blog</Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DashboardBlogPage;
