"use client";

import { createProject } from "@/actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";
import { toast } from "sonner";

const DashboardProjectPage = () => {
  const handleSubmit = async (formData: FormData) => {
    try {
      await createProject(formData);
      toast.success("Project Created");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error("Failed. Please try again.");
    }
  };

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold text-center">Create Project</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>
      <div className="w-2/3">
        <Form action={handleSubmit} className="space-y-8 px-10 mx-auto py-10">
          <div>
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              type="text"
              placeholder="Enter title"
              id="title"
              name="title"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="tools" className="text-sm font-medium">
              Tools
            </label>
            <Input
              type="text"
              placeholder="Enter tools (comma separated)"
              id="tools"
              name="tools"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="details" className="text-sm font-medium">
              Description
            </label>
            <Textarea
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-primaryColor"
              placeholder="Write description"
              name="details"
            />
          </div>

          <div>
            <label htmlFor="image" className="text-sm font-medium">
              Blog Image Link
            </label>
            <Input
              type="text"
              placeholder="Enter blog image link"
              id="image"
              name="image"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="repository" className="text-sm font-medium">
              Repository Link
            </label>
            <Input
              type="text"
              placeholder="Enter repository link"
              id="repository"
              name="repository"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>

          <div>
            <label htmlFor="liveLink" className="text-sm font-medium">
              Live Link
            </label>
            <Input
              type="text"
              placeholder="Enter live site link"
              id="liveLink"
              name="liveLink"
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

export default DashboardProjectPage;
