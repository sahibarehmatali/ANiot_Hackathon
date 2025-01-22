// app/dashboard/page.tsx
import AnalyticsDashboard from "../components/AnalyticsDashboard";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <AnalyticsDashboard />
    </div>
  );
}