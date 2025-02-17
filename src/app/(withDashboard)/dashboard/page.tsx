import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="w-full max-w-md">
        {session?.user && (
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-center mt-5 sm:mt-6 lg:mt-10 font-semibold">Welcome {session?.user?.name}</h1>
            <h2 className="text-sm sm:text-base md:text-lg text-center mt-3">Email: {session?.user?.email}</h2>
            <Image
              src={session?.user?.image || "https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png"}
              width={100}
              height={100}
              alt="user image"
              className="mx-auto rounded-full mt-5"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
