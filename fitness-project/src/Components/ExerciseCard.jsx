import '../App.css';

function ExerciseCard(props) {
    // console.log(props);
    return (
        <div className="exerciseCard">
            <img src={props.gifUrl} alt="exercise img" />
            <h4>{props.name}</h4>
            <p>{props.target}</p>
            <p>{props.bodyPart}</p>
        </div>
    )
}

export default ExerciseCard;