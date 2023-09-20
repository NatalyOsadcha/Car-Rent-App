import Container from '../components/Container/Container';

export default function Home() {
  const paragraphStyle = {
    textAlign: 'center',
    padding: '250px 80px',
    fontSize: '36px',
    lineHeight: 2,
    fontWeight: 600,
    color: 'rgba(18, 20, 23, 0.5)',
  };

  return (
    <Container>
      <p style={paragraphStyle}>
        Welcome to our car rental service, where your journey begins! Explore
        our wide selection of vehicles and embark on unforgettable adventures
        with ease and comfort
          </p>
    </Container>
  );
}
