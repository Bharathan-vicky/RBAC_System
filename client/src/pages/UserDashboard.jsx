import { useAuth } from '../context/AuthContext';

const UserDashboard = () => {
    const { user } = useAuth();

    return (
        <div className="container animate-fade-in">
            <div className="page-header">
                <h1 className="page-title">User Dashboard</h1>
                <p className="text-gray-400 mt-2">Welcome back, {user?.username}!</p>
            </div>

            <div className="glass-panel p-6 mb-6">
                <h3 className="text-xl font-bold mb-4">My Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="text-gray-500 text-sm">Username</label>
                        <p className="text-lg font-medium">{user?.username}</p>
                    </div>
                    <div>
                        <label className="text-gray-500 text-sm">Email</label>
                        <p className="text-lg font-medium">{user?.email}</p>
                    </div>
                    <div>
                        <label className="text-gray-500 text-sm">Role</label>
                        <span className="inline-block bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-semibold mt-1">
                            {user?.role}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;
