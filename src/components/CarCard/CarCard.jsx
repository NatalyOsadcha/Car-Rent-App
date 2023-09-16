import {
  Photo,
  Title,
  Span,
  Text,
  Button,
  Description,
    FunctionTitle,
    Wrapper,
    ConditionWrapper,
    ColorSpan,
    FontSpan
} from './CarCard.styled';

export default function CarCard({ toggleModal, car }) {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    fuelConsumption,
    type,
    mileage,
    accessories,
    id,
    engineSize,
    description,
    functionalities,
    rentalConditions,
  } = car;
  const location = address.split(',');
    const mileageWithK = mileage.toLocaleString('en-US');
    const rentalCondition = rentalConditions.split('\n');
    const minAge = rentalCondition[0].split(':');
  return (
    <>
      <Photo src={img} alt={{ make } && { model }} />

      <Title>
        {make} <Span>{model}</Span>, {year}
      </Title>

      <Text>
        {location[1]} | {location[2]} | Id: {id} | Year: {year} | Type: {type}
      </Text>
      <Text>
        Fuel Consumption: {fuelConsumption} | EngineSize: {engineSize}
      </Text>
      <Description>{description}</Description>
      <FunctionTitle>Accessories and functionalities:</FunctionTitle>
      <Text>
        {accessories.map(accessory => (
          <span>{accessory} | </span>
        ))}
      </Text>
      <Text>
        {functionalities.map(functionality => (
          <span>{functionality} | </span>
        ))}
      </Text>
          <FunctionTitle>Rental Conditions: </FunctionTitle>
          <Wrapper>
              <ConditionWrapper><FontSpan>{minAge[0]}:</FontSpan><ColorSpan>{minAge[1]}</ColorSpan></ConditionWrapper>
              <ConditionWrapper>{rentalCondition[1]}</ConditionWrapper>
              <ConditionWrapper>{ rentalCondition[2]}</ConditionWrapper>
              <ConditionWrapper><FontSpan>Mileage:</FontSpan><ColorSpan>{mileageWithK }</ColorSpan></ConditionWrapper>
             <ConditionWrapper><FontSpan>Price:</FontSpan><ColorSpan>{rentalPrice}</ColorSpan></ConditionWrapper>
          </Wrapper>

    <Button href="tel:+380730000000">Rental car</Button>

    </>
  );
}
