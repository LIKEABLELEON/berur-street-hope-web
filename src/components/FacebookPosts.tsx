
const FacebookPosts = () => {
  // Array of Facebook post iframes to embed
  const postIframes = [
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02eGduAovMF94ChT3if956TeSoByBRCdwFrUm9Wd98rnWU7PMhdneJvJYVaAH12eNNl%26id%3D100064422830485&show_text=true&width=500",
      width: "500",
      height: "640"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02ztAEjR1C7Kvp8AakHhSyaGy6CYxgfJAuHtm2QUjctCbQ2mCaqc8GVVvbrf2FzazNl%26id%3D100064422830485&show_text=true&width=500",
      width: "500",
      height: "684"
    },
    {
      src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02C6ciBj72uhPXU1FAWXLYCM1TasM7knUu24gvbuPF22wCmB1dT1DwJrWubDPhmgwel%26id%3D100064422830485&show_text=true&width=500",
      width: "500",
      height: "607"
    }
  ];

  return (
    // Main section container with padding and background
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
          {/* Map through post iframes to create embedded Facebook posts */}
          {postIframes.map((post, index) => (
            <div key={index} className="flex justify-center">
              {/* Facebook post iframe embed */}
              <iframe 
                src={post.src}
                width={post.width}
                height={post.height}
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
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
