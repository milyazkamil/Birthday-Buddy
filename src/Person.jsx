import RemovePerson from "./RemovePerson";

const Person = ({ id, img, name, age, person, setPerson }) => {
  return (
    <>
      <div className="person-row">
        <div className="container">
          <img src={img} alt={name} />
          <div className="name-container">
            <h2>{name}</h2>
            <span>{age} years</span>
          </div>
        </div>
        <RemovePerson id={id} person={person} setPerson={setPerson} />
      </div>
    </>
  );
}
export default Person;