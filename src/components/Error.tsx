import type { ReactNode } from 'react';
import { useNavigate } from 'react-router';
import Button from './Button';
import errorImg from '../assets/error.png';

const Error = ({ children }: { children?: ReactNode }) => {
  const navigate = useNavigate();

  if (!children) {
    return (
      <div className="flex flex-col items-center">
        <Button style="link" onClick={() => navigate(-1)}>
          &larr; Go Back
        </Button>
        <img src={errorImg} alt="error image" />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center">
      <Button style="link" onClick={() => navigate(-1)}>
        &larr; Go Back
      </Button>
      <h2>{children}</h2>
      <img src={errorImg} alt="error image" />
    </div>
  );
};

export default Error;
