import { useEffect, useState } from "react";
import { makeRequest } from "../axios";

const useFetch = () => {
  const [getAllProducts, setGetAllProducts] = useState({
    products: [],
    isLoading: false,
    err: null,
  });
  useEffect(() => {
    const getData = async () => {
      setGetAllProducts((prev) => ({ ...prev, isLoading: true }));
      try {
        const res = await makeRequest.get("/products");

        setGetAllProducts((prev) => ({ ...prev, products: res.data }));
      } catch (error) {
        setGetAllProducts((prev) => ({ ...prev, err: error }));
      } finally {
        setGetAllProducts((prev) => ({ ...prev, isLoading: false }));
      }
    };

    getData();
  }, []);

  // const refetch = () => {
  //   setGetAllProducts((prev) => ({ ...prev, isLoading: true }));
  //   getData();
  // };
  return getAllProducts;
};

export default useFetch;
