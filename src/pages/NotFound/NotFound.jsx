import { useLocation } from 'react-router-dom';
import { Link as StyledLink } from 'components/SharedLayout/SharedLayout.styled';

const NotFound = () => {
  const location = useLocation();
  return (
    <>
      <StyledLink to={location.state ? location.state.from : '/'}>
        Обратно
      </StyledLink>
      <h1>Not Found</h1>
    </>
  );
};
export default NotFound;
