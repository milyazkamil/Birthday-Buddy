import people from './people';

const Refresh = ({ setPerson }) => {

  const refresh = () => {
    setPerson(people)
  };

  return (
    <button type="button" className='refresh' onClick={refresh}>
      Refresh
    </button>
  );
}

export default Refresh;
