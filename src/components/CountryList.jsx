import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
function CountryList() {
  const { cities, isLoading } =useCities();
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add cities to the list by clicking on the map..." />
    );
const countries=cities.reduce((arr,curr)=>{
    if(!arr.map(item=>item.country).includes(curr.country)){
        return [...arr,{country:curr.country,emoji:curr.emoji}]
    }else{
        return arr
    }
},[]);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country}/>
      ))}
    </ul>
  );
}

export default CountryList;
