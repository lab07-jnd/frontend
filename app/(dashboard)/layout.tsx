import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { LogoutButton } from "@/components/ui/Button";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-50 text-slate-900">
            <Sidebar />
            <div className="relative flex min-w-0 flex-1 flex-col">
                <Header name="Rodrigo Silva" role="Admin RH" />
                <div className="absolute right-6 top-4">
                    <LogoutButton />
                </div>
                <main className="flex-1 overflow-y-auto p-6">{children}</main>
            </div>
        </div>
    );
}