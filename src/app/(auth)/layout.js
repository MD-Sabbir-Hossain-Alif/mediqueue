import Navbar from '@/components/Home/Navbar';
export default function LoginLayout({ children }) {
    return (
        <div className="container mx-auto">
            <Navbar />
            {children}
        </div>
    );
}