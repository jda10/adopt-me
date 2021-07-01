import { useState, useEffect } from "react";
import useBreedList from "./userBreedList";
import Results from "./Results";


const animals = ['bird', 'cat', 'dog', 'reptile', ]

const SearchParams = () => {

    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds] = useBreedList(animal);

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
        console.log(pets);
        
    }
     
    return (
        <div className="search-params">

            <form
            onSubmit={e => {
                e.preventDefault();
                requestPets();
            }}
            >
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
            <Results pets={pets}/>
        </div>
    )
}


export default SearchParams;