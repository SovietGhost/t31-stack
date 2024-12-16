import { getServerSession } from "@/server/auth";

export default async function Home() {
    const session = await getServerSession();
    return (
        <main>
            {session?.user.email} {session?.user.role}
        </main>
    );
}
