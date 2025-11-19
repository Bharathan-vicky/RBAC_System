import { useAuth } from '../context/AuthContext';

const ManagerDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="container animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">Manager Dashboard</h1>
                <p className="text-gray-400 mt-2">Oversee team performance and projects.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Team Overview</h3>
                    <p className="text-gray-300">Team Members: 12</p>
                    <p className="text-gray-300">Projects Active: 4</p>
                </div>
                <div className="glass-panel p-6">
                    <h3 className="text-xl font-bold mb-2 text-pink-400">Pending Approvals</h3>
                    <p className="text-gray-300">Leave Requests: 2</p>
                    <p className="text-gray-300">Expense Reports: 5</p>
                </div>
            </div>
        </div>
    );
};

export default ManagerDashboard;
