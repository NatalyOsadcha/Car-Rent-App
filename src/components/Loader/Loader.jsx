import { ProgressBar } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled'

const Loader = () => {
  return (
    <LoaderContainer>
      <ProgressBar
        height="80"
        width="80"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor=" #ea3d65"
        barColor="#72c2f8"
      />
    </LoaderContainer>
  );
};

export default Loader;

