import {useState, useEffect} from 'react'
import { RepositoryItem } from "./RepositoryItem";

import '../styles/repositories.scss'


export function RepositoryList(){

    const [repositories, setRepositories] = useState([]);
    
    useEffect(()=>{
        fetch('https://api.github.com/orgs/rocketseat/repos')
            .then(response=>response.json())
            .then(data => setRepositories(data))
    },[])

    return(
        <section className="repository-list">
            <h1>Lista de reposórios</h1>

            <ul>
              {
                repositories.map(item=>(
                  <RepositoryItem repository={item} key={item.name}/>
                )
              )
            }


            </ul>
        </section>
    )
}