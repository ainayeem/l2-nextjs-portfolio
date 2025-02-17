import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen my-2 container mx-auto">
      <div className="flex justify-between">
        <div className="w-[20%] lg:w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%] lg:w-[80%] ml-3 border-l-2">{children}</div>
      </div>
    </div>
  );
}
