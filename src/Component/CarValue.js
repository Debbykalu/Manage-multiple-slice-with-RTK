import { useSelector } from "react-redux";
const CarValue = () => {
const totalCost = useSelector(({cars: {data, searchTerm}}) => 
 data
 .filter((car) => 
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  .reduce((accu, car) => accu + car.cost, 0)
);
  return (
    <div className="car-value">
        Total Cost: ${totalCost}
    </div>
  )
}

export {CarValue};