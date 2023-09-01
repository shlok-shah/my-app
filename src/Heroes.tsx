import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import {Hero} from "./Interface/Herointerface"


const Heroes = () => {

    const [heroes, setHeroes] = useState<null | Hero[]>(null)

    useEffect(() => {
        fetch('http://localhost:8000/heroes')
        .then((res: Response): Promise<Hero[]>=> {
            return res.json()
        }).then(data => {
            setHeroes(data);
        }).catch((err: Error) => console.log(err))
    }, [])
    
    return (
        <div className="hero-list">
            <h3>Hero List</h3>
            {
                heroes && (heroes.map((hero) => (
                    <Link to={`/hero/${hero.id}`} key={hero.id}><div className="hero-list-element">{hero.name}</div></Link>
                )))
            }
        </div>
    );
}
 
export default Heroes;