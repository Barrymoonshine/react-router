import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Error 404 - page not found</h1>
    </div>
  );
};

export default NotFound;
