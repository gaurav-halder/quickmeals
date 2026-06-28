import { quickMealsLogo } from "../Utils/Constants";

const Header = () => {
    return (
        <div className="header flex justify-between items-center shadow-lg">
            <div>
                <img className="logo w-24" src={quickMealsLogo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="flex gap-8 text-[18px] font-bold">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;