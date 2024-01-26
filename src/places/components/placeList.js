import React from "react";

import PlaceItem from "./placeItem";
import Card from "../../shared/components/UIElements/Card";
import "./PlaceList.css";

const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Koi add krna chahoge?</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creator={place.creatorID}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
