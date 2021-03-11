interface RepositoryItemProps {
    repository:{
        name: String,
        descrition: string,
        html_url: string;
    }
}

export function RepositoryItem (props: RepositoryItemProps){
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