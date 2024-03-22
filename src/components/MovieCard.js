import { imageCDN } from "../utils/constants";
import React from "react";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="w-40 pr-4">
      <img className="rounded-lg" alt="Movie Card" src={imageCDN + posterPath} />
    </div>
  );
};
export default MovieCard;