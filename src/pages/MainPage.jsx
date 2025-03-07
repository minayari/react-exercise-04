import { useEffect, useRef, useState } from "react";
import AllProducts from "../components/AllProducts";
import Header from "../components/Haeder";
import Footer from "../components/Footer";

export default function MainPage() {
  const [allData, setAllData] = useState(
    JSON.parse(localStorage.getItem("allData")) || []
  );
  const searchRef = useRef(null);
  const [searchRes, setsearchRes] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("allData", JSON.stringify(data));
        setAllData(data);
      });
  }, []);

  function searchHnadler() {
    setsearchRes(
      allData.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(searchRef.current.value.toLowerCase()) ||
          item.price.toString().includes(searchRef.current.value)
      )
    );
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center mt-[1.5rem] mb-[1.5rem]">
        <input
          type="text"
          placeholder="Search name or price..."
          ref={searchRef}
          onChange={searchHnadler}
          className="w-[20rem] border-[2px] border-cyan-700 p-[0.3rem] rounded-[0.8rem] focus:outline-none"
        />
      </div>
      <div className="flex flex-wrap justify-between p-[1rem]">
        {searchRes.length === 0
          ? allData.map((data) => (
              <AllProducts
                key={data.id}
                image={data.image}
                title={data.title}
                price={data.price}
                id={data.id}
              />
            ))
          : searchRes.map((data) => (
              <AllProducts
                key={data.id}
                image={data.image}
                title={data.title}
                price={data.price}
                id={data.id}
              />
            ))}
      </div>
      <Footer />
    </>
  );
}
