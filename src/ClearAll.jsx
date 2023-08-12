const ClearAll = ({ setPerson }) => {

  const clearAll = () => {
    setPerson([])
  };

  return (
    <button onClick={clearAll} id="clear-all" type="button">
      Clear All
    </button>
  );
}

export default ClearAll;