import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import AuthProvider from "@/app/context/AuthProvider"; // Import the Client Component

export default async function ServerAuthProvider({ children }: { children: React.ReactNode }) {
    const session = await getServerSession(options); // Fetch session on the server
    return <AuthProvider session={session}>{children}</AuthProvider>;
}
