const Display = ({ value }: { value: number }) => {
  return (
    <div className="font-mono font-bold text-2xl p-8 border-amber-950 border-4 rounded-2xl">
      {value}
    </div>
  );
};

export default Display;
