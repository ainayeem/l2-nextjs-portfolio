"use server";

import { redirect } from "next/navigation";

export const createBlog = async (data: FormData) => {
  const blogData = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.Base_Url}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });

  const blogInfo = await res.json();

  if (blogInfo) {
    redirect(`/blogs/${blogInfo.insertedId}`);
  }

  return blogInfo;
};

export const deleteBlog = async (blogId: string) => {
  try {
    const res = await fetch(`${process.env.Base_Url}/blog/${blogId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete project");
    }

    // Redirect to the projects page after successful deletion
    redirect("/blogs");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};
