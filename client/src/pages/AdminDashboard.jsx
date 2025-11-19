import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="container animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Admin Dashboard</h1>
                <p className="text-gray-400 mt-2">Manage system settings and users.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-2 text-blue-400">System Stats</h3>
                    <p className="text-gray-300">Total Users: 1,240</p>
                    <p className="text-gray-300">Active Sessions: 45</p>
                </div>
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-2 text-purple-400">Security Logs</h3>
                    <p className="text-gray-300">No recent threats detected.</p>
                    <p className="text-gray-300">Last backup: 2 hours ago</p>
                </div>
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-2 text-green-400">User Management</h3>
                    <button className="btn btn-primary w-full mt-2">Manage Users</button>
                </div>
            </div>

            <div className="glass-panel p-6 mt-8">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex justify-between items-center border-b border-gray-700 pb-2 last:border-0">
                            <span className="text-gray-300">User registration #{1000 + i}</span>
                            <span className="text-sm text-gray-500">Just now</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
