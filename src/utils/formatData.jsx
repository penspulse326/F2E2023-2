import voteData_2020 from "../constants/vote-2020.json";
import voteData_2016 from "../constants/vote-2016.json";
import voteData_2012 from "../constants/vote-2012.json";

const formatNumber = (data) => [
  Number(((data["黃雞排"] / data["有效票數"]) * 100).toFixed(2)),
  Number(((data["陳珍奶"] / data["有效票數"]) * 100).toFixed(2)),
];

export const formatVoteData = (city = null, district = null) => {
  let target = voteData_2020[0];

  if (city) {
    target = voteData_2020.filter((item) => item["行政區別"] === city)[0];
  }

  if (district) {
    target = target["各區票數"].filter(
      (item) => item["鄉鎮市區"] === district
    )[0];
  }

  const values = formatNumber(target);

  return [
    { name: "黃雞排", value: values[0], color: "#F9D849" },
    { name: "陳珍奶", value: values[1], color: "#CEBDAD" },
  ];
};

export const formatHistoryData = (city) => {
  const data1 = voteData_2020.filter((item) => item["行政區別"] === city)[0];
  const data2 = voteData_2016.filter((item) => item["行政區別"] === city)[0];
  const data3 = voteData_2012.filter((item) => item["行政區別"] === city)[0];

  const valueArr1 = formatNumber(data1);
  const valueArr2 = formatNumber(data2);
  const valueArr3 = formatNumber(data3);

  return [
    {
      name: `2020`,
      黃雞排: valueArr1[0],
      陳珍奶: valueArr1[1],
    },
    {
      name: "2016",
      黃雞排: valueArr2[0],
      陳珍奶: valueArr2[1],
    },
    {
      name: "2012",
      黃雞排: valueArr3[0],
      陳珍奶: valueArr3[1],
    },
  ];
};
