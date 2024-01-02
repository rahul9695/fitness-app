import "../App.css";
import ExerciseCard from "./ExerciseCard";
import { useState, useEffect } from 'react';

function ExercisesSection() {
    const [dataLimit, setDataLimit] = useState(20);
    const [originalGymData, setOriginalGymData] = useState([]);
    const [gymData, setGymData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [load, setLoad] = useState("Load more")

    useEffect(() => {
        async function fetchData() {
            setLoad("Loading...")
            const url = `https://exercisedb.p.rapidapi.com/exercises?limit=${dataLimit}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'de7865dd9amsh7e2da7e5ace283dp16a548jsn249791282b60',
                    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                setOriginalGymData(result);
                setGymData(result);
                setLoad("Load more")
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, [dataLimit]);

    function inputHandler(e) {
        const inputValue = e.target.value.toLowerCase();
        const updatedArray = originalGymData.filter((data) => (
            data.bodyPart.toLowerCase().includes(inputValue) ||
            data.name.toLowerCase().includes(inputValue) ||
            data.target.toLowerCase().includes(inputValue)
        ));
        console.log(updatedArray);
        setGymData(updatedArray);
        setInputValue(e.target.value);
    }


    return (
        <div className="exerciseContainer">
            <h2>Exercise List</h2>
            <input type="text" value={inputValue} placeholder="Search by target, body part or exercise" onChange={(e) => inputHandler(e)} />
            <div className="exerciseCards">
                {
                    gymData.map((data) => <ExerciseCard key={data.id} {...data} />)
                }
            </div>
            <button className="loadMore" onClick={()=>{
                setDataLimit((prevValue) => prevValue += 20)}}>{load}</button>
        </div>
    )
}

export default ExercisesSection;
