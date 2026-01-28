const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      {/* <RestaurantCard resData={resList[3]} /> */}
      <div className="res-container">
        {resList.map((restaurant, index) => {
          const info = restaurant?.card?.card?.info;
          if (!info) return null;

          return (
            <RestaurantCard key={`${info.id}-${index}`} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
