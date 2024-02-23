import { useParams } from "react-router-dom";
import events from "../events.json";

function EventDetails() {

    const { name } = useParams();
    const [event] =events.filter((e) => e.name == name);
    return ( 
        <div>
        <h2>Event Detail</h2>
        <ul>
         
            <li key={event.name}>
              <div>
                <h3>{event.name}</h3>
                <p>{event.description}</p>
               
              </div>
            </li>
          
        </ul>
      </div>
     );
}

export default EventDetails;