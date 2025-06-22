
// Import React hooks and routing utilities
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  // Get current route information from React Router
  const location = useLocation();

  // Log 404 errors for debugging and analytics purposes
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]); // Re-run effect when pathname changes

  return (
    // Full screen container with centered content
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Large 404 error number */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        
        {/* User-friendly error message */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        
        {/* Return home link for user recovery */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
