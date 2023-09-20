import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Wrapper,
  Label,
  Input,
  InputMile,
  Button,
  MileWrapper,
  ErrorsMessage,
  NotAvailableWrapper,
  Message,
} from './Searchbar.styled';

export default function SearchBar({ cars, onSubmit, onReset }) {
  const carMakes = Array.from(new Set(cars.map(car => car.make))).sort();

  const SearchBarValidationSchema = yup.object().shape({
    make: yup
      .string()
      .oneOf(
        carMakes,
        'The car of this brand is not available in our database.'
      ),
    rentalPrice: yup.number().min(30).max(500),
    mileageFrom: yup.number().min(4000).max(7000),
    mileageTo: yup.number().min(4000).max(7000),
    // .when(['mileageFrom'], (mileageFrom, schema) => {
    //   return mileageFrom
    //     ? schema.required('Mileage to must be greater than or equal to mileage from').test(
    //         'greater-than-mileageFrom',
    //         'Mileage to must be greater than or equal to mileage from',
    //         function (value) {
    //           return value >= mileageFrom;
    //         }
    //       )
    //     : schema;
    // }),
  });

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
            onBlur={formik.handleBlur}
            className={
              formik.errors.make && formik.touched.make ? 'has-error' : ''
            }
          />
          {formik.errors.make && formik.touched.make && (
            <ErrorsMessage>{formik.errors.make}</ErrorsMessage>
          )}

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
            style={{ width: '125px' }}
            className={
              formik.errors.rentalPrice && formik.touched.rentalPrice
                ? 'has-error'
                : ''
            }
          />
          {formik.errors.rentalPrice && formik.touched.rentalPrice && (
            <ErrorsMessage>{formik.errors.rentalPrice}</ErrorsMessage>
          )}

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
              min="4000"
              max="7000"
              step="500"
              style={{
                borderTopLeftRadius: '14px',
                borderBottomLeftRadius: '14px',
                borderRightStyle: 'solid',
                borderRightWidth: '1px',
                borderRightColor: '#121417',
              }}
              className={
                formik.errors.mileageFrom && formik.touched.mileageFrom
                  ? 'has-error'
                  : ''
              }
            />
            {formik.errors.mileageFrom && formik.touched.mileageFrom && (
              <ErrorsMessage>{formik.errors.mileageFrom}</ErrorsMessage>
            )}
            <InputMile
              type="number"
              name="mileageTo"
              placeholder="To"
              value={formik.values.mileageTo}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              min="4000"
              max="7000"
              step="500"
              style={{
                borderTopRightRadius: '14px',
                borderBottomRightRadius: '14px',
              }}
              className={
                formik.errors.mileageTo && formik.touched.mileageTo
                  ? 'has-error'
                  : ''
              }
            />
            {formik.errors.mileageTo && formik.touched.mileageTo && (
              <ErrorsMessage>{formik.errors.mileageTo}</ErrorsMessage>
            )}
          </MileWrapper>
        </div>
        <Button type="submit">Search</Button>
        <Button type="submit" onClick={handleReset}>
          Reset
        </Button>
      </Wrapper>
      {cars.length === 0 && (
        <NotAvailableWrapper>
          <Message>There are no available cars at your request</Message>
        </NotAvailableWrapper>
      )}
    </form>
  );
}
