// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import  AuthProvider  from "@/auth/components/AuthProvider";
import { Sidebar, TopMenu } from "@/components";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded">{children}</div>
      </div>
    </AuthProvider>
  );
}
