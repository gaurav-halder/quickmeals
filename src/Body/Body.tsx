import RestaurantContainer from "./RestaurantContainer/RestaurantContainer";
import Search from "./Search/Search";

const Body = () => {
    return (
        <div className="body">
            <Search/>
           <RestaurantContainer/>
        </div>
    );
};
export default Body;