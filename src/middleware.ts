export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/dashboard", "/dashboard/create-project", "/dashboard/blogs", "/dashboard/view-message"],
};
