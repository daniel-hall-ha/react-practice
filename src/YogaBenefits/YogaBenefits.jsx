import FetchData from "./FetchData.jsx";
import Card from "./Card.jsx";

function YogaBenefits() {
  const data_fetched = FetchData("http://localhost:3001/api/fruits");
  return data_fetched ? (
    <div className="flex flex-col w-full h-full overflow-scroll p-10 gap-5">
      <div className="mt-20">
        <h1 className="font-medium text-3xl">Nutritious Diets</h1>
      </div>
      <div className="flex flex-col justify-center items-center mt-5">
        <div className="columns-1 sm:columns-1 md:columns-2 lg:columns-3 xl:columns-4 2xl:columns-4 gap-10">
          {data_fetched.map((item) => (
            <Card item={item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center w-full h-full">
      Loading...
    </div>
  );
}

export default YogaBenefits;
