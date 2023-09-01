import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Hero } from "./Interface/Herointerface";

const Home = (): JSX.Element => {

    const [heroes, setHeroes] = useState<Hero[] | null>(null)

    useEffect(() => {
        fetch('http://localhost:8000/heroes')
        .then((res: Response): Promise<Hero[]> => {
            return res.json()
        }).then(data => {
            setHeroes(data);
        }).catch((err: Error) => console.log(err))
    }, [])

    
        
        return (
            heroes ?
    (
    <div className="home">
        <h3>Top Heroes</h3>
        <Link to="/hero/1"><button>{heroes[0].name}</button></Link>
        <Link to="/hero/2"><button>{heroes[1].name}</button></Link>
        <Link to="/hero/3"><button>{heroes[2].name}</button></Link>
        <Link to="/hero/4"><button>{heroes[3].name}</button></Link>
    </div>
    ) : <div> Not Available </div>
    )
    }

 
export default Home;