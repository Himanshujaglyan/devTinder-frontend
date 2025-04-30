const ShimmerCard = () => {
    return (
      <div className="flex items-center justify-center gap-4 my-5 animate-pulse">
        <div className="card w-96 min-h-screen bg-base-300 shadow-md">
          <div className="card-body pt-96 space-y-2">
            <div className="h-4 bg-slate-300 rounded w-1/2" />
            <div className="h-3 bg-slate-300 rounded w-1/3" />
            <div className="h-3 bg-slate-300 rounded w-3/4" />
            <div className="flex justify-center gap-2 mt-3">
            <div className="h-8 w-20 bg-pink-800 rounded" />
            <div className="h-8 w-20 bg-indigo-800 rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ShimmerCard