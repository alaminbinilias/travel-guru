
const PlaceCard = ({ place }) => {
  return (
      <div className="cursor-pointer text-gray-200">
        <div
          className="card bg-base-100 hover:scale-105 transition ease-in-out flex h-80 w-60 bg-cover"
          style={{ backgroundImage: `url(${place.image})` }}
        >
          <div className="card-body">
            <h2 className="card-title flex-1 h-full justify-start text-2xl text items-end">
              {place.touristPlace}
            </h2>
          </div>
        </div>
      </div>
  );
};

export default PlaceCard;
