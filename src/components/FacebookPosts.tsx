

import { useEffect } from 'react';

// Declare Facebook SDK types for TypeScript
// This tells TypeScript that window.FB exists and what methods it has
declare global {
  interface Window {
    FB: {
      XFBML: {
        parse: () => void;
      };
    };
  }
}

const FacebookPosts = () => {
  // Effect hook to initialize Facebook SDK when component mounts
  useEffect(() => {
    // Check if Facebook SDK has loaded and FB object is available
    // Load Facebook SDK
    if (window.FB) {
      // Parse all Facebook social plugins on the page
      // This makes the fb-post divs render as actual embedded posts
      window.FB.XFBML.parse();
    }
  }, []); // Empty dependency array means this runs once on mount

  // Array of Facebook post URLs to embed
  // These are placeholder URLs - replace with actual post URLs from your Facebook page
  const posts = [
    // Example post URLs - you'll need to replace these with actual post URLs from your Facebook page
    "https://www.facebook.com/permalink.php?story_fbid=pfbid02Example1&id=100064422830485",
    "https://www.facebook.com/permalink.php?story_fbid=pfbid02Example2&id=100064422830485",
    "https://www.facebook.com/permalink.php?story_fbid=pfbid02Example3&id=100064422830485"
  ];

  return (
    {/* Main section container with padding and background */}
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header with title and description */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey and see the impact we're making in the lives of street children in Eldoret, Kenya.
          </p>
        </div>
        
        {/* Grid layout for Facebook posts - responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Map through posts array to create embedded Facebook posts */}
          {posts.map((postUrl, index) => (
            <div key={index} className="flex justify-center">
              {/* Facebook post embed div - Facebook SDK converts this to actual post */}
              <div 
                className="fb-post" 
                data-href={postUrl}        // URL of the Facebook post to embed
                data-width="350"           // Width of the embedded post
                data-show-text="true"      // Show post text content
              ></div>
            </div>
          ))}
        </div>
        
        {/* Call-to-action button to visit Facebook page */}
        <div className="text-center mt-12">
          <a 
            href="https://www.facebook.com/profile.php?id=100064422830485"
            target="_blank"              // Open in new tab
            rel="noopener noreferrer"     // Security attributes for external links
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Follow Us on Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacebookPosts;

