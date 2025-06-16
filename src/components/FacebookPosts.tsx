
import { useEffect } from 'react';

const FacebookPosts = () => {
  useEffect(() => {
    // Load Facebook SDK
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  const posts = [
    // Example post URLs - you'll need to replace these with actual post URLs from your Facebook page
    "https://www.facebook.com/permalink.php?story_fbid=pfbid02Example1&id=100064422830485",
    "https://www.facebook.com/permalink.php?story_fbid=pfbid02Example2&id=100064422830485",
    "https://www.facebook.com/permalink.php?story_fbid=pfbid02Example3&id=100064422830485"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Latest Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our journey and see the impact we're making in the lives of street children in Eldoret, Kenya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((postUrl, index) => (
            <div key={index} className="flex justify-center">
              <div 
                className="fb-post" 
                data-href={postUrl}
                data-width="350"
                data-show-text="true"
              ></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.facebook.com/profile.php?id=100064422830485"
            target="_blank"
            rel="noopener noreferrer"
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
