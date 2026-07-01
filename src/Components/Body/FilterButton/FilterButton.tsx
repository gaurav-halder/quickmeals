
import { restData } from "../../Utils/Constants";

interface FilterContainerProps {
    setListOfRestaurants: (value: any[]) => void;
    restaurantsFilterHeaderText: string;
}

const FilterButton = ({ setListOfRestaurants, restaurantsFilterHeaderText }: FilterContainerProps) => {
    const filterRating = () => {
        setListOfRestaurants(restData.restaurants.filter((rest: any) => rest.info.avgRating > 4.2));
    };

    const filterFastDelivery = () => {
        setListOfRestaurants(restData.restaurants.filter((rest: any) => rest.info.sla.deliveryTime < 22));
    };

    const filterPureVeg = () => {
        setListOfRestaurants(restData.restaurants.filter((rest: any) =>
            rest.info.cuisines.some((c: string) => c.toLowerCase().includes("veg"))
        ));
    };

    const filterOffers = () => {
        setListOfRestaurants(restData.restaurants.filter((rest: any) => rest.info.aggregatedDiscountInfoV3 !== undefined));
    };

    const filterCostRange = (min: number, max: number) => {
        setListOfRestaurants(restData.restaurants.filter((rest: any) => {
            const cost = parseInt(rest.info.costForTwo.replace(/[^0-9]/g, ""), 10);
            return cost >= min && cost <= max;
        }));
    };

    const filterCostLess = (max: number) => {
        setListOfRestaurants(restData.restaurants.filter((rest: any) => {
            const cost = parseInt(rest.info.costForTwo.replace(/[^0-9]/g, ""), 10);
            return cost < max;
        }));
    };

    const resetFilters = () => {
        setListOfRestaurants(restData.restaurants);
    };

    return (
        <div className="mb-6">
            <div className="flex justify-center my-4 text-[24px] font-bold">
                <h1>{restaurantsFilterHeaderText}</h1>
            </div>
            <div className="filter-button flex gap-3 justify-center my-4 flex-wrap">
                <button className="hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300 text-[14px]" onClick={filterFastDelivery}>Fast Delivery</button>
                <button className="hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300 text-[14px]" onClick={filterRating}>Rating 4.2+</button>
                <button className="hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300 text-[14px]" onClick={filterPureVeg}>Pure Veg</button>
                <button className="hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300 text-[14px]" onClick={filterOffers}>Offers</button>
                <button className="hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300 text-[14px]" onClick={() => filterCostRange(300, 600)}>Rs. 300-Rs. 600</button>
                <button className="hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300 text-[14px]" onClick={() => filterCostLess(300)}>Less than Rs. 300</button>
                <button className="bg-orange-500 hover:bg-orange-600 text-white p-2 px-4 rounded-full text-[14px] font-semibold transition-colors" onClick={resetFilters}>Reset</button>
            </div>
        </div>
    );
};

export default FilterButton;