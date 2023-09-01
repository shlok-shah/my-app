import { useState,useEffect } from "react";
import { NavigateFunction, Params, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {Hero} from "./Interface/Herointerface"

const HeroPage = () => {

    const [heroName, setHeroName] = useState<string | null>(null)


    const navigate : NavigateFunction = useNavigate();
    const {id}: Readonly<Params<string>> = useParams()

    
    useEffect((): void => {
        fetch(`http://localhost:8000/heroes/${id}`)
        .then((res: Response): Promise<Hero> => {
            return res.json()
        }).then((data : Hero) => {
            setHeroName(data.name);
        }).catch((err: Error) => console.log(err))
    }, [id])

    
    const handleUpdate = (id: string,e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        e.preventDefault();
        fetch(`http://localhost:8000/heroes/${id}`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify({
                name: heroName
            })
        }).then((res: Response): Promise<JSON> => {
            return res.json();
        }).then((res) => {
            console.log(res);
            navigate(-1);
        })
        .catch((err: Error) => console.log(err));
    }

    return (
        heroName && (<div className="hero-page">
            <h2>Hero: {heroName}</h2>
            <h3>id: {id}</h3>
            <form>
                <label>Hero name</label>
                <input type="text" value={heroName} onChange={(e) => {setHeroName(e.target.value)}}></input>
                <Link to="/">
                    <button className="back-button" onClick={(e) => {handleUpdate(id!,e)}}>Back</button>
                </Link>
                
            </form>
        </div>)
    );
}
 
export default HeroPage;