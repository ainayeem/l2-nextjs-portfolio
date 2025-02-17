"use client";

import { createProject } from "@/actions/project";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Form from "next/form";

const DashboardProjectPage = () => {
  const handleSubmit = async (formData: FormData) => {
    await createProject(formData);
  };

  return (
    <div className="min-h-screen py-6 px-4 sm:px-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">Create Project</h1>
        <span className="w-20 h-1 mx-auto bg-teal-500 rounded block"></span>
      </div>

      <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto">
        <Form action={handleSubmit} className="space-y-5 sm:px-10 py-8 rounded-lg">
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
            <label htmlFor="tools" className="text-sm sm:text-base font-medium">
              Tools
            </label>
            <Input
              type="text"
              placeholder="Enter tools-comma separate"
              id="tools"
              name="tools"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="details" className="text-sm sm:text-base font-medium">
              Description
            </label>
            <Textarea
              className="border border-gray-300 rounded-md px-4 py-2 w-full h-32 focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Write description"
              name="details"
              required
            />
          </div>

          <div>
            <label htmlFor="image" className="text-sm sm:text-base font-medium">
              Project Image Link
            </label>
            <Input
              type="text"
              placeholder="Enter project image link"
              id="image"
              name="image"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="repository" className="text-sm sm:text-base font-medium">
              Repository Link
            </label>
            <Input
              type="text"
              placeholder="Enter repository link"
              id="repository"
              name="repository"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div>
            <label htmlFor="liveLink" className="text-sm sm:text-base font-medium">
              Live Link
            </label>
            <Input
              type="text"
              placeholder="Enter live site link"
              id="liveLink"
              name="liveLink"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="xl:col-span-2">
            <Button type="submit" className="w-full sm:w-auto py-3 bg-teal-500 text-white rounded-md hover:bg-teal-600">
              Create Project
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DashboardProjectPage;
