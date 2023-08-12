const RemovePerson = ({ id, person, setPerson }) => {
  
  const remove = (id) => {
    const newArr = person.filter((item) => item.id !== id)
    setPerson(newArr)
  };

  return (
    <button type="button" className="remove" onClick={() => remove(id)}>
      Remove
    </button>
  )
}
export default RemovePerson;