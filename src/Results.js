import Pet from './Pet'

const Results = ({pets}) => {
    return(
        <div className="search">
            {pets.length === 0 ? (<h2>No pets found</h2>) :
            (
                pets.map((pet)=> {
                    return <Pet animal={pet.animal} key={pet.id} name={pet.name} images={pet.images} location={`${pet.city}, ${pet.state}`} id={pet.id} breed={pet.breed}></Pet>
                })
            )
            }
        </div>
    )
}


export default Results;