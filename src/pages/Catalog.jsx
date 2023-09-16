import cars from '../../src/cars.json';
import CarItem from '../components/CarItem/CarItem';
import { List } from './Catalog.styled';

export default function Catalog() {
    return (
        <List >
            {cars.map(car => (
                <CarItem car={car} key={car.id}/>
            ))}
        </List >
    )
}