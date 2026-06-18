
const Header = () => {
    return (
        <div className="header flex justify-between items-center">
            <div>
                <img className="logo w-24" src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY=" alt="logo" />
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