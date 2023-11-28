import PropTypes from "prop-types";
import { useState, createContext } from "react";

const CityContext = createContext({});

export const CityContextProvider = (props) => {
  const [city, setCity] = useState(null);
  const [district, setDistrict] = useState(null);

  const value = {
    city,
    setCity,
    district,
    setDistrict,
  };

  return (
    <CityContext.Provider value={value}>{props.children}</CityContext.Provider>
  );
};

CityContextProvider.propTypes = {
  children: PropTypes.any,
};

export default CityContext;
