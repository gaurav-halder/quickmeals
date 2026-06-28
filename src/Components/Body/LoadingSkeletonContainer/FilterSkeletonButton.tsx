const FilterSkeletonButton = () => {
    // Widths for the different filter button placeholders to look natural
    const widths = ["w-24", "w-28", "w-20", "w-16", "w-32", "w-28"];

    return (
        <div className="filter-button flex gap-3 justify-center my-3 flex-wrap">
            {widths.map((width, index) => (
                <div 
                    key={index} 
                    className={`${width} h-9 bg-slate-200 animate-pulse rounded-full border border-slate-100`}
                />
            ))}
        </div>
    );
};

export default FilterSkeletonButton;
