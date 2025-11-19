import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogOut, Shield, User, Menu, Github, Twitter, Linkedin } from 'lucide-react';

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <nav className="border-b border-slate-200 bg-white sticky top-0 z-40 shadow-sm">
            <div className="container py-4 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                    <Shield className="text-blue-600" size={24} />
                    <span>RBAC-Bharathan_Task</span>
                </Link>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex items-center gap-4 mr-2 border-r border-slate-200 pr-4">
                        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                            <Twitter size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/bharathan-rajkumar-346a10259/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                            <Linkedin size={20} />
                        </a>
                    </div>
                    {user ? (
                        <>
                            <div className="flex items-center gap-3">
                                <span className="hidden md:inline text-sm text-slate-600">
                                    <span className="text-slate-900 font-medium capitalize">{user.role}</span>
                                </span>
                                <div className="h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md" title={user.username}>
                                    <span className="font-semibold text-sm">{user.username.charAt(0).toUpperCase()}</span>
                                </div>
                            </div>
                            <button onClick={handleLogout} className="btn btn-outline text-sm">
                                <LogOut size={16} />
                                <span className="hidden md:inline">Logout</span>
                            </button>
                        </>
                    ) : (
                        <div className="flex items-center gap-4">
                            <Link to="/login" className="text-slate-700 hover:text-slate-900 font-medium transition-colors">Login</Link>
                            <Link to="/register" className="btn btn-primary">Get Started</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
