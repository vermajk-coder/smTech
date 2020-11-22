import data from "../../data/city.json";
import "./catalogue.css";

function TravelCatalogue() {
  return (
    <div className="travel-catalogue-wrapper">
      <div className="top-section"></div>
      {data.map((cityData, index) => (
        <div key={index}>
          <div className="travel-catalogue">
            <div>
              <img src={cityData.url} alt="city" className="image-resolution" />
            </div>
            <div className="details">
              <strong>{cityData.name}:</strong>
              <span className="description">{cityData.description}</span>
            </div>
          </div>
          <div className="separator" />
        </div>
      ))}
    </div>
  );
}

export default TravelCatalogue;
