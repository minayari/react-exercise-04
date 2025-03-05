import { useNavigate } from "react-router-dom";

export default function AllProducts({ image, title, price, id }) {
  const navigate = useNavigate();

  function handleSingelProductNav() {
    navigate("/product", { state: { image, title, price, id } });
  }

  return (
    <div
      onClick={handleSingelProductNav}
      className="flex flex-col h-[30rem] w-[18rem] p-[1rem] mb-[1.3rem] ring-2 ring-cyan-900/60 rounded-[1rem]"
    >
      <img className="h-[65%]" src={image} />
      <div className="h-[30%]">
        <h2 className="text-[1.3rem] font-bold truncate mt-[2rem] mb-[1rem]">
          {title}
        </h2>
        <span className="text-cyan-700 text-[1.1rem]">${price}</span>
      </div>
    </div>
  );
}
