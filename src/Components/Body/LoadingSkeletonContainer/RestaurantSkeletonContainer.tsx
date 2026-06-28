const SkeletonCard = () => {
    return (
        <div className="w-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-slate-200 animate-pulse" />

            {/* Content Placeholders */}
            <div className="p-4 flex flex-col gap-2">
                {/* Title */}
                <div className="w-3/4 h-5 bg-slate-200 animate-pulse rounded-md" />

                {/* Cuisine */}
                <div className="w-1/2 h-4 bg-slate-200 animate-pulse rounded-md" />

                {/* Bottom Row (Rating & Delivery Time) */}
                <div className="flex justify-between items-center mt-4">
                    <div className="w-12 h-6 bg-slate-200 animate-pulse rounded-md" />
                    <div className="w-16 h-4 bg-slate-200 animate-pulse rounded-md" />
                </div>
            </div>
        </div>
    );
};

const RestaurantSkeletonContainer = () => {
    // Generate 12 skeleton cards to fill the screen during load
    const skeletons = Array.from({ length: 8 });

    return (
        <div className="flex flex-wrap justify-center gap-10 p-4">
            {skeletons.map((_, index) => (
                <SkeletonCard key={index} />
            ))}
        </div>
    );
};

export default RestaurantSkeletonContainer;
