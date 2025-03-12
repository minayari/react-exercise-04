import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Header from "../components/Haeder";
import Footer from "../components/Footer";
import { dataContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const { allData, setAllData } = useContext(dataContext);
  const searchRef = useRef(null);
  const [searchRes, setsearchRes] = useState([]);
  const singleNavigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("allData", JSON.stringify(data));
        setAllData(data);
      });
  }, []);

  const searchHnadler = useCallback(() => {
    setsearchRes(
      allData.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(searchRef.current.value.toLowerCase()) ||
          item.price.toString().includes(searchRef.current.value)
      )
    );
  }, []);

  function handleSingelProductNav() {
    singleNavigate("/product");
  }

  return (
    <>
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
              <div key={data.id}>
                <div
                  onClick={handleSingelProductNav}
                  className="flex flex-col h-[30rem] w-[18rem] p-[1rem] mb-[1.3rem] ring-2 ring-cyan-900/60 rounded-[1rem]"
                >
                  <img className="h-[65%]" src={data.image} />
                  <div className="h-[30%]">
                    <h2 className="text-[1.3rem] font-bold truncate mt-[2rem] mb-[1rem]">
                      {data.title}
                    </h2>
                    <span className="text-cyan-700 text-[1.1rem]">
                      ${data.price}
                    </span>
                  </div>
                </div>
              </div>
            ))
          : searchRes.map((data) => (
              <div key={data.id}>
                <div
                  onClick={handleSingelProductNav}
                  className="flex flex-col h-[30rem] w-[18rem] p-[1rem] mb-[1.3rem] ring-2 ring-cyan-900/60 rounded-[1rem]"
                >
                  <img className="h-[65%]" src={data.image} />
                  <div className="h-[30%]">
                    <h2 className="text-[1.3rem] font-bold truncate mt-[2rem] mb-[1rem]">
                      {data.title}
                    </h2>
                    <span className="text-cyan-700 text-[1.1rem]">
                      ${data.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </>
  );
}
