import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="mt-auto py-6 border-t border-slate-200 bg-white">
            <div className="container flex flex-col md:flex-row justify-center items-center gap-4">
                <div className="flex items-center gap-6">
                    <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Github size={18} />
                    </a>
                    <a href="https://x.com/home" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Twitter size={18} />
                    </a>
                    <a href="https://www.linkedin.com/in/bharathan-rajkumar-346a10259/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-blue-600 transition-colors">
                        <Linkedin size={18} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
