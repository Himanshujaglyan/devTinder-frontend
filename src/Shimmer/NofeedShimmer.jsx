const NofeedShimmer = () => {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4 text-center space-y-6 bg-base-200 rounded-lg min-h-screen -mt-20 shadow-inner">
        {/* Fancy SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-20 w-20 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 15a4 4 0 004 4h10a4 4 0 004-4M7 15V5a2 2 0 012-2h6a2 2 0 012 2v10"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 10h6"
          />
        </svg>
  
        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-700">No More Feed Found</h2>
        <p className="text-sm text-gray-500 max-w-md">
          You’ve reached the end. Check back later for more updates or refresh the page to reload the content.
        </p>
      </div>
    );
  };
  
  export default NofeedShimmer;
  