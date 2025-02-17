import { authOptions } from "@/utils/authOptions";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// import { authOptions } from "@/utils/authOptions";
// import NextAuth, { NextAuthOptions } from "next-auth";
// import { NextRequest } from "next/server";

// const handler = (req: NextRequest) => NextAuth(authOptions as NextAuthOptions)(req);

// export const GET = (req: NextRequest) => handler(req);
// export const POST = (req: NextRequest) => handler(req);
