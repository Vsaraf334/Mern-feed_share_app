import React from "react";

import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPClbUxBdluW8NihjAFKH3B65V57akWQtcGEjol=s1360-w1360-h1020",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9944191,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Empire State Building",
    description:
      "Iconic, art deco office tower from 1931 with exhibits & observatories on the 86th & 102nd floors.",
    imageUrl:
      "https://lh3.googleusercontent.com/p/AF1QipPClbUxBdluW8NihjAFKH3B65V57akWQtcGEjol=s1360-w1360-h1020",
    address: "20 W 34th St., New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9944191,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  return (
    <PlaceList
      items={DUMMY_PLACES.filter((place) => place.creator === userId)}
    />
  );
};

export default UserPlaces;
