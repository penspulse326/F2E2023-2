import voteData_2020 from "../constants/vote-2020.json";
import voteData_2016 from "../constants/vote-2016.json";
import voteData_2012 from "../constants/vote-2012.json";

const formatNumber = (data) => [
  Number(((data["黃雞排"] / data["有效票數"]) * 100).toFixed(2)),
  Number(((data["陳珍奶"] / data["有效票數"]) * 100).toFixed(2)),
];

const getTargetData = (dataArray, key, value) => {
  return dataArray.filter((item) => item[key] === value)[0];
};

export const formatVoteData = (city, district) => {
  let target = voteData_2020[0];

  if (city) {
    target = getTargetData(voteData_2020, "行政區別", city);
  }

  if (district) {
    target = getTargetData(target["各區票數"], "鄉鎮市區", district);
  }

  const values = formatNumber(target);

  return [
    { name: "黃雞排", value: values[0], color: "#F9D849" },
    { name: "陳珍奶", value: values[1], color: "#CEBDAD" },
  ];
};

export const formatHistoryData = (city) => {
  const years = [`2020`, "2016", "2012"];
  const dataArrays = [voteData_2020, voteData_2016, voteData_2012];

  return years.map((year, index) => {
    const data = getTargetData(dataArrays[index], "行政區別", city);
    const values = formatNumber(data);

    return {
      name: year,
      黃雞排: values[0],
      陳珍奶: values[1],
    };
  });
};
