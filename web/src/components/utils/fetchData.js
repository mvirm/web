const fetchData = ({ setData, fileName, setLoading }) => {
  const url = `/json/${fileName}.json`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la respuesta");
      }

      return response.json();
    })
    .then((data) => {
      setData(data[fileName]);
      setLoading(false);
    })

    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
export default fetchData;
