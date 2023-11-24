import voteData from "../constants/vote-2020.json";

const formatNumber = (data) => [
  Number(((data["黃雞排"] / data["有效票數"]) * 100).toFixed(2)),
  Number(((data["陳珍奶"] / data["有效票數"]) * 100).toFixed(2)),
];

const formatData = (city = null, district = null) => {
  let target = voteData[0];

  if (city) {
    target = voteData.filter((item) => item["行政區別"] === city)[0];
  }

  if (district) {
    target = target["各區票數"].filter(
      (item) => item["鄉鎮市區"] === district
    )[0];
  }

  console.log(city, district);

  const values = formatNumber(target);

  return [
    { name: "黃雞排", value: values[0], color: "#F9D849" },
    { name: "陳珍奶", value: values[1], color: "#CEBDAD" },
  ];
};

export default formatData;
