
export interface RestaurantCardProps {
    resName: string;
    cuisine: string;
    rating: number;
    time: number;
    labelHeader?: string;
    labelSubHeader?: string;
    discountTagHeader?: string;
    image?: string;
}
const RestaurantCard = (props: RestaurantCardProps) => {
    const { resName, cuisine, rating, time, labelHeader, labelSubHeader, discountTagHeader, image } = props;
    return (
        <div className="restaurant-card w-64 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-slate-100 cursor-pointer flex flex-col">
            <div className="img-container relative">
                <img
                    className="w-full h-40 object-cover"
                    src={image}
                    alt={resName}
                />
                {labelHeader && labelHeader !== "undefined" && (
                    <div className="labelHeader absolute bottom-2 left-3 right-3 text-white font-extrabold text-lg drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] uppercase leading-tight">
                        <div>{labelHeader}</div>
                        {labelSubHeader && labelSubHeader !== "undefined" && (
                            <div className="labelSubHeader text-sm font-bold opacity-90">
                                {labelSubHeader}
                            </div>
                        )}
                        {discountTagHeader && discountTagHeader !== "undefined" && (
                            <div className="discountTagHeader text-sm font-bold opacity-90">
                                {discountTagHeader}
                            </div>
                        )}
                    </div>
                )}
            </div>
            <div className="p-4 flex flex-col gap-1">
                <h2 className="font-bold text-lg text-slate-800 truncate">{resName}</h2>
                <h3 className="text-slate-500 text-sm truncate font-medium">{cuisine}</h3>
                <div className="flex justify-between items-center mt-3 text-sm font-semibold">
                    <span className="bg-green-600 text-white px-2 py-0.5 rounded flex items-center gap-1">
                        ★ {rating}
                    </span>
                    <span className="text-slate-600">{time} mins</span>
                </div>
            </div>
        </div>
    )
};
export default RestaurantCard;