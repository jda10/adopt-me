import { useState, useEffect } from "react";

import Pet from "./Pet";



const animals = ['bird', 'cat', 'dog', 'reptile', ]

const SearchParams = () => {

    const [location, setLocation] = useState("Seattle, WA")
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const breeds = [];


    useEffect(() => {
        requestPets();
    }, [])


    async function requestPets(){

        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        )

        const json = await res.json();

        console.log(json.pets)
        setPets(json.pets);
        
    }
     
    return (
        <div className="search-params">

            <form>
                <label htmlFor="location"> 
                    Location
                    <input id="location"
                    onChange={e => setLocation(e.target.value)} 
                    placeholder="Location"
                    value={location}></input>
                    <button>Submit</button>
                </label>
                <br></br>
                <label htmlFor="animal">Animal
                <select id="animal"
                    value={animal} 
                    onChange={e => setAnimal(e.target.value)} 
                    onBlur={e => setAnimal(e.target.value)}>
                    {
                        animals.map(animal => (
                            <option value={animal} key={animal}>{animal}</option>
                        ))
                    }
                </select>
                </label>
                <label htmlFor="animal">Breed
                <select id="animal"
                    value={breed} 
                    onChange={e => setBreed(e.target.value)} 
                    onBlur={e => setBreed(e.target.value)}>
                    {
                        breeds.map(breed => (
                            <option value={breed} key={breed}>{breed}</option>
                        ))
                    }
                </select>
                </label>
            </form>
            {pets.map((pet) => (
                <Pet name={pet.name} animal={pet.animal} breed={pet.breed} key={pet.id}></Pet>
            ))}
        </div>
    )
}


export default SearchParams;