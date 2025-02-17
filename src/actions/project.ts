"use server";

import { redirect } from "next/navigation";

export const createProject = async (data: FormData) => {
  const projectData = Object.fromEntries(data.entries());

  const res = await fetch(`${process.env.Base_Url}/project`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(projectData),
  });

  const projectInfo = await res.json();

  if (projectInfo) {
    redirect(`/projects/${projectInfo.insertedId}`);
  }

  return projectInfo;
};

export const deleteProject = async (projectId: string) => {
  try {
    const res = await fetch(`${process.env.Base_Url}/project/${projectId}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error("Failed to delete project");
    }

    // Redirect to the projects page after successful deletion
    redirect("/projects");
  } catch (error) {
    console.error("Error deleting project:", error);
    throw error;
  }
};
