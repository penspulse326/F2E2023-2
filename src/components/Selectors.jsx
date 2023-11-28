import { useState, useEffect, useContext } from "react";
import Select from "react-select";
import districts from "../constants/districts.json";
import CityContext from "../contexts/CityContext";

// styles for react-select
const customStyles = {
  control: (styles, state) => ({
    ...styles,
    borderColor: state.isFocused ? "#D67A7A" : "#999999",
    borderRadius: "6px",
    boxShadow: "none",
    "&:hover": {
      boxShadow: "0 0 0px 2px #D67A7A",
    },
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "5px",
    maxHeight: "500px",
  }),
  option: (provided, state) => ({
    ...provided,
    margin: "4px 0",
    backgroundColor: state.isSelected ? "#F1CBC9" : "white",
    borderRadius: "6px",
    color: "#333",
    ":hover": {
      backgroundColor: "#F1CBC9",
    },
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "#999999",
  }),
  indicatorSeparator: () => "",
};

// icon for react-select
const DropdownIndicator = () => (
  <div className="p-[10px]">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.0574 5.8074C2.11545 5.74919 2.18442 5.70301 2.26035 5.67151C2.33629 5.64 2.41769 5.62378 2.4999 5.62378C2.58211 5.62378 2.66351 5.64 2.73944 5.67151C2.81537 5.70301 2.88434 5.74919 2.9424 5.8074L9.9999 12.8661L17.0574 5.8074C17.1155 5.74929 17.1845 5.70319 17.2604 5.67174C17.3363 5.64029 17.4177 5.62411 17.4999 5.62411C17.5821 5.62411 17.6635 5.64029 17.7394 5.67174C17.8153 5.70319 17.8843 5.74929 17.9424 5.8074C18.0005 5.86551 18.0466 5.93449 18.0781 6.01042C18.1095 6.08634 18.1257 6.16772 18.1257 6.2499C18.1257 6.33208 18.1095 6.41345 18.0781 6.48938C18.0466 6.5653 18.0005 6.63429 17.9424 6.6924L10.4424 14.1924C10.3843 14.2506 10.3154 14.2968 10.2394 14.3283C10.1635 14.3598 10.0821 14.376 9.9999 14.376C9.91769 14.376 9.83629 14.3598 9.76035 14.3283C9.68442 14.2968 9.61545 14.2506 9.5574 14.1924L2.0574 6.6924C1.99919 6.63434 1.95301 6.56537 1.92151 6.48944C1.89 6.41351 1.87378 6.33211 1.87378 6.2499C1.87378 6.16769 1.89 6.08629 1.92151 6.01035C1.95301 5.93442 1.99919 5.86545 2.0574 5.8074Z"
        fill="#999999"
      />
    </svg>
  </div>
);

export const CitySelector = () => {
  const { city, setCity, setDistrict } = useContext(CityContext);
  const [selectedOption, setSelectedOption] = useState(null);

  const cityOptions = districts.map(({ name }) => ({
    value: name,
    label: name,
  }));

  useEffect(() => {
    if (!city) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption({ value: city, label: city });
  }, [city]);

  const handleChange = (choice) => {
    setSelectedOption(choice);
    setCity(choice.value);
    setDistrict(null);
  };

  return (
    <Select
      options={cityOptions}
      value={selectedOption}
      components={{ DropdownIndicator }}
      onChange={(choice) => handleChange(choice)}
      placeholder="請選擇縣市"
      styles={customStyles}
    />
  );
};

export const DistrictSelector = () => {
  const { city, district, setDistrict } = useContext(CityContext);

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(null);

    if (!city) return; // prevent invalid call when initializing

    setOptions(() => {
      const target = districts.filter(({ name }) => name === city)[0];

      return target.district.map((item) => ({
        value: item,
        label: item,
      }));
    });
  }, [city]);

  useEffect(() => {
    if (!district) {
      setSelectedOption(null);
      return;
    }
    setSelectedOption({ value: district, label: district });
  }, [district]);

  const handleChange = (choice) => {
    setSelectedOption(choice);
    setDistrict(choice.value);
  };

  return (
    <Select
      options={options}
      value={selectedOption}
      isDisabled={!city}
      onChange={(choice) => handleChange(choice)}
      components={{ DropdownIndicator }}
      placeholder="請選擇鄉鎮市區"
      styles={customStyles}
    />
  );
};
