// app/components/AnalyticsDashboard.tsx
export default function AnalyticsDashboard() {
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Analytics Dashboard</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">Total Sales</h2>
            <p>$10,000</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">Total Users</h2>
            <p>500</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">Total Orders</h2>
            <p>200</p>
          </div>
        </div>
      </div>
    );
  }