const SearchBar = () => {
    return (
        <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
            <input
                type="text"
                placeholder="Search"
                className="outline-none flex-1 p-2"
            />
            <button className="text-brown-800 p-2">🔍</button>
        </div>
    );
};

export default SearchBar;
