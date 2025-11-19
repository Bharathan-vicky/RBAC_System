import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';

const Unauthorized = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center animate-fade-in">
            <div className="mb-6 text-yellow-500">
                <AlertTriangle size={80} />
            </div>
            <h1 className="text-4xl font-bold mb-4">Access Denied</h1>
            <p className="text-gray-400 mb-8 max-w-md">
                You do not have permission to view this page. Please contact your administrator if you believe this is an error.
            </p>
            <Link to="/" className="btn btn-primary">
                Return Home
            </Link>
        </div>
    );
};

export default Unauthorized;
