import SearchIcon from '@mui/icons-material/Search';

interface HeaderProps {
    searchText: string;
    setSearchText: (text: string) => void;
}

const Search = ({ searchText, setSearchText }: HeaderProps) => {

    return (
        <div className="flex border border-gray-300 rounded overflow-hidden p-2">
            <input type="search" placeholder="Search for restaurants" className='focus:outline-none w-[400px] text-[16px] font-semibold' value={searchText} onChange={(e) => (setSearchText(e.target.value))} />
            <button className="flex items-center justify-center ">
                <SearchIcon fontSize="medium" className='text-slate-500 hover:text-orange-500 transition-colors duration-200' />
            </button>
        </div>
    );
};
export default Search;