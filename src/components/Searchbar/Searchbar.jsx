import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Wrapper,
  Label,
  Input,
  InputMile,
  Button,
  MileWrapper,
  // ErrorsMessage,
} from './Searchbar.styled';

export default function SearchBar({ cars, onSubmit, onReset }) {
  const SearchBarValidationSchema = yup.object().shape({});

  const carMakes = Array.from(new Set(cars.map(car => car.make))).sort();

  const minPrice = 30;
  const maxPrice = 500;
  const step = 10;
  const carPrices = [];

  for (let price = minPrice; price <= maxPrice; price += step) {
    carPrices.push(price);
  }

  const handleReset = () => {
    formik.resetForm();
    onReset();
  };

  const formik = useFormik({
    initialValues: {
      make: '',
      rentalPrice: '',
      mileageFrom: '',
      mileageTo: '',
    },
    validationSchema: SearchBarValidationSchema,

    onSubmit: values => {
      let searchCars = cars;

      if (values.make !== '') {
        searchCars = searchCars.filter(car => car.make === values.make);
      }

      if (values.rentalPrice !== '') {
        searchCars = searchCars.filter(car => {
          const carRentalPrice = parseFloat(car.rentalPrice.replace('$', ''));
          return carRentalPrice <= values.rentalPrice;
        });
      }

      if (values.mileageFrom !== '') {
        searchCars = searchCars.filter(car => {
          const carMileage = Number(car.mileage);
          const mileageFrom = Number(values.mileageFrom);
          return carMileage >= mileageFrom;
        });
      }

      if (values.mileageTo !== '') {
        searchCars = searchCars.filter(car => {
          const carMileage = Number(car.mileage);
          const mileageTo = Number(values.mileageTo);
          return carMileage <= mileageTo;
        });
      }

      if (searchCars.length === 0) {
        console.log('Nothing found by your request');
      }

      onSubmit(searchCars);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Wrapper>
        <div>
          <Label htmlFor="make">Car brand</Label>
          <Input
            list="brands"
            name="make"
            id="make"
            placeholder="Enter the text"
            value={formik.values.make}
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            // hasError={!!formik.errors.make && !!formik.touched.make}
          />
          {/* {formik.errors.make && formik.touched.make && (
            <ErrorsMessage>{formik.errors.make}</ErrorsMessage>
          )} */}

          <datalist id="brands">
            {carMakes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </datalist>
        </div>

        <div>
          <Label htmlFor="rentalPrice">Price/ 1 hour</Label>
          <Input
            list="price"
            type="number"
            name="rentalPrice"
            id="rentalPrice"
            placeholder="To $"
            value={formik.values.rentalPrice.toLocaleString()}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            // hasError={
            //   !!formik.errors.rentalPrice && !!formik.touched.rentalPrice
            // }
          />
          {/* {formik.errors.rentalPrice && formik.touched.rentalPrice && (
            <ErrorsMessage>{formik.errors.rentalPrice}</ErrorsMessage>
          )} */}

          <datalist id="price">
            {carPrices.map(price => (
              <option key={price} value={price}>
                {price}
              </option>
            ))}
          </datalist>
        </div>
        <div>
          <Label>Сar mileage / km </Label>
          <MileWrapper>
            <InputMile
              type="number"
              name="mileageFrom"
              placeholder="From"
              value={formik.values.mileageFrom}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // hasError={
              //   !!formik.errors.mileageFrom && !!formik.touched.mileageFrom
              // }
            />
            {/* {formik.errors.mileageFrom && formik.touched.mileageFrom && (
              <ErrorsMessage>{formik.errors.mileageFrom}</ErrorsMessage>
            )} */}
            <InputMile
              type="number"
              name="mileageTo"
              placeholder="To"
              value={formik.values.mileageTo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // hasError={!!formik.errors.mileageTo && !!formik.touched.mileageTo}
            />
            {/* {formik.errors.mileageTo && formik.touched.mileageTo && (
              <ErrorsMessage>{formik.errors.mileageTo}</ErrorsMessage>
            )} */}
          </MileWrapper>
        </div>
        <Button type="submit">Search</Button>
        <Button type="submit" onClick={handleReset}>
          Reset
        </Button>
      </Wrapper>
    </form>
  );
}
