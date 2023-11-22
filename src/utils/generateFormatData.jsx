import voteData from "../constants/vote-2020.json";

const formatNumber = (data) => [
  Number(((data["黃雞排"] / data["有效票數"]) * 100).toFixed(2)),
  Number(((data["陳珍奶"] / data["有效票數"]) * 100).toFixed(2)),
];
const generateFormatData = (city = null, district = null) => {
  let target = voteData[0];

  if (city && !district) {
    target = voteData.filter((item) => item["行政區別"] === city)[0];
  }

  const values = formatNumber(target);

  return [
    { name: "黃雞排", value: values[0], color: "#F9D849" },
    { name: "陳珍奶", value: values[1], color: "#CEBDAD" },
  ];
};

export default generateFormatData;
