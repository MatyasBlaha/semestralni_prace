// LinkButton.jsx
import { Link } from 'react-router-dom';

export default function LinkButton({ to, children, variant }) {

    const variantClasses = {
        profileNav: 'text-blue-500 hover:no-underline',
        homeNav: 'text-blue-500 hover:no-underline'
    };

    const className = variantClasses[variant] || 'text-blue-800';

    return (
            <Link to={to} className={`link ${className}`}>
                {children}
            </Link>
    );
}