import { Link } from 'react-router-dom';
import { Shield, Lock, Users } from 'lucide-react';

const Home = () => {
    return (
        <div className="container flex flex-col items-center justify-center min-h-[80vh] text-center animate-fade-in">
            <div className="mb-8 p-4 rounded-full bg-blue-600/20 border border-blue-500/30">
                <Shield size={64} className="text-blue-500" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                RBAC-Bharathan_Task
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
                A robust Role-Based Access Control system built with the MERN stack.
                Secure your application with enterprise-grade authentication and authorization.
            </p>

            <div className="flex gap-6">
                <Link to="/login" className="btn btn-primary text-lg px-8 min-w-[140px]">
                    Login
                </Link>
                <Link to="/register" className="btn btn-outline text-lg px-8 min-w-[140px]">
                    Register
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40 w-full">
                <div className="card p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-full bg-green-100 mb-6">
                        <Lock className="text-green-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Secure Auth</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        JWT-based authentication with HTTP-only cookies for maximum security.
                    </p>
                </div>

                <div className="card p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-full bg-blue-100 mb-6">
                        <Users className="text-blue-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Role Management</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Distinct dashboards and permission levels for Admins, Managers, and Users.
                    </p>
                </div>

                <div className="card p-8 flex flex-col items-center hover:scale-105 transition-transform duration-300">
                    <div className="p-4 rounded-full bg-purple-100 mb-6">
                        <Shield className="text-purple-600" size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">Protected Routes</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Middleware to guard sensitive API endpoints and pages against unauthorized access.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
