import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([]);

    //piece of code which runs based on a condition
    useEffect(() => {
        // this is where the code runs...
        const unsubscribe = database.collection("people").onSnapshot((snapshot) => 
            setPeople(snapshot.docs.map((doc) => doc.data()))
        );

        return () => {
            //this is the cleanup...(unsubscribe listner or you're gonna call a lot of listner)
            unsubscribe();
        };
        
    }, []);

    //BAD
    //const people = [];
    //people.push('matamong')

    //GOOD(Push to an array in REACT)
    //setPeople([...people, 'matamong'])
    // '...' means keep whatever was in the state earlier(Don't completely overwrite it! Put the initial first)

    //Always give KEYS in REACT : Allows REACT to efficiently re-render a LIST(Especially huge data). Makes APP SUPER fast.


    return (
        <div>
            <div className="tinderCards__cardContainer">
                {people.map(person => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
