"use client";

import { createBlog } from "@/actions/blog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";

const DashboardBlogPage = () => {
  const handleSubmit = async (formData: FormData) => {
    //  Object.fromEntries(formData.entries());
    await createBlog(formData);
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">Create Blog</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">
        <Form action={handleSubmit} className="space-y-5 sm:px-10 py-10 rounded-lg">
          <div>
            <label htmlFor="title" className="text-sm sm:text-base font-medium">
              Title
            </label>
            <Input
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="description" className="text-sm sm:text-base font-medium">
              Write Blog
            </label>
            <Textarea
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write blog"
              name="description"
              required
            ></Textarea>
          </div>

          <div>
            <label htmlFor="authorName" className="text-sm sm:text-base font-medium">
              Author Name
            </label>
            <Input
              type="text"
              placeholder="Enter author name"
              id="authorName"
              name="authorName"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="blogImage" className="text-sm sm:text-base font-medium">
              Blog Image Link
            </label>
            <Input
              type="text"
              placeholder="Enter blog image"
              id="blogImage"
              name="blogImage"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <Button type="submit" className="w-full sm:w-auto py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600">
              Create Blog
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DashboardBlogPage;
