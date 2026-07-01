import { quickMealsLogo } from "../Utils/Constants";
import { useState } from "react";
import Search from "../Body/Search/Search";

interface HeaderProps {
    searchText: string;
    setSearchText: (text: string) => void;
}

const Header = ({ searchText, setSearchText }: HeaderProps) => {
    const [buttonName, setButtonName] = useState("Login");

    return (
        <div className="header flex justify-between items-center shadow-lg">
            <div>
                <img className="logo w-24" src={quickMealsLogo} alt="logo" />
            </div>
            <div className="nav-items mr-6">
                <ul className="flex items-center gap-8 text-[18px] font-bold">
                    <Search searchText={searchText} setSearchText={setSearchText} />
                    <button className="login hover:bg-slate-200 p-2 px-4 rounded-full border border-gray-300" onClick={() => { buttonName === "Login" ? setButtonName("Logout") : setButtonName("Login") }}>{buttonName}</button>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;