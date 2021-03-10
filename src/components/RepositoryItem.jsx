export function RepositoryItem (props){
    return(
        <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.descrition}</p>

        <a href={props.repository.html_url}>
            Acessar repositorio
        </a>
    </li>
    )
}