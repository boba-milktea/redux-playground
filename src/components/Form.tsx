import Button from './Button';

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Form = ({ onSubmit, value, onChange }: FormProps) => {
  return (
    <>
      <form className="search-form" onSubmit={onSubmit}>
        <label className="sr-only">Movie Search</label>
        <input
          className="search-input"
          type="text"
          value={value}
          onChange={onChange}
        />

        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default Form;
