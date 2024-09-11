//All Function's For RestFull API
//Get Data.JSON With this.fetchData
const fetchData = async () => {
  const response = await fetch("data.json");
  const json = await response.json();
  return json;
};

export { fetchData };
