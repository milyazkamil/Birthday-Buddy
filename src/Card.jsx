import { useState } from "react";
import people from "./people";
import Person from "./Person";
import Refresh from "./Refresh";
import ClearAll from "./ClearAll";

const Card = () => {

  const [person, setPerson] = useState(people);
  let peopleLength = person.length;

  return (
    <>
      <div className="card">
        <div className="title-container">
          <h1>{peopleLength} Birthdays Today</h1>
          {
            peopleLength === 0 && <Refresh setPerson={setPerson} />
          }
        </div>
        {
          person.map((item) => (
            <Person
              key={item.id}
              {...item}
              person={person}
              setPerson={setPerson}
            />
          ))
        }
        {
          peopleLength > 0 && <ClearAll setPerson={setPerson} />
        }
      </div>
    </>
  )
}
export default Card;