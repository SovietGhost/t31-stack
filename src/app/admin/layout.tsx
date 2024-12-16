import { getServerSession } from "@/server/auth";
import { redirect } from "next/navigation";
import NotAdmin from "./_components/not-admin";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();
    if (!session) return redirect("/auth/login");
    if (session.user.role !== "admin") return <NotAdmin />;

    return <>{children}</>;
}
