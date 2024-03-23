const Home = () => {
    return (
        <div>
            <div className="h-14 border-b-2">
                <div className="flex items-center max-w-md mx-auto bg-white rounded-lg " x-data="{ search: '' }">
                <div className="w-full">
                    <input type="search" className="w-full px-4 py-1 text-gray-800 rounded-full focus:outline-none"
                        placeholder="search" x-model="search"/>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
