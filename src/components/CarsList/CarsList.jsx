import CarItem from '../CarItem/CarItem';
import { List } from './CarsList.styled';

export default function CarsList({cars}) {
    return (
        <List >
        {cars.map(car => (
          <CarItem car={car} key={car.id} />
        ))}
      </List>
    )
}