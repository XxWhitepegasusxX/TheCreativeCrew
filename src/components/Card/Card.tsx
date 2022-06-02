interface CardProps{
    image: string,
    name: string,
    role: string,
    middle?: boolean

}

export default function Card({image, name, role, middle = false}: CardProps){
    return(
        <>
        <div className={middle ? "down card flex" : 'card flex'}>
            <div className="image">
                <img src={image}/>
                <h2>{name}</h2>
            </div>
            <p className="role">{role}</p>
        </div>
        </>
    )
}