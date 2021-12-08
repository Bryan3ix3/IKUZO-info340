import React, { useState } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import PhotoUpload  from './PhotoUpload';
import ScriptTag from 'react-script-tag';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getDatabase } from 'firebase/database';
// import { NavBar } from './Navigation';
// import { Footer } from './Footer';

export function ProfileScreen() {
    
    const [editBioIsDisplayed, setEditBioIsDisplayed] = useState('none');
    const [interestsFormIsDisplayed, setInterestsFormIsDisplayed] = useState('none');

    const [textValue, setTextValue] = useState('');

    const handleClick = () => {
        return setEditBioIsDisplayed('block');
    }
    const handleInput = (event) => {
        setTextValue(event.target.value);

    }

    let updateBio = () => {    //handle "check" button
        console.log("adios");
        let bioPar = document.getElementById('p-body');
        //console.log(bioPar);
        let newBio= bioPar.textContent = textValue;
        setEditBioIsDisplayed('none');
        // console.log(temp+' temp');
        return newBio;
    }

    const showInterestsForm = () => {
        setInterestsFormIsDisplayed('block');
    }

    const closeForm = () => {
        setInterestsFormIsDisplayed('none');
    }

    const db = getDatabase();
    return (
        <React.Fragment>
            <section className='banner mb-2'>
                <img src="/img/pexels-tony-jamesandersson-1674752.jpg" className="profile-pic" alt="profiles"/>
                <PhotoUpload/>
                <p className='userName'><strong>Annaka Harris</strong></p>
            </section>


            <section className="content">
                <section className="d-flex justify-content-center">
                    <section className="card">
                        <section className="card-body">
                        <h1 className="card-title">Bio</h1>
                        <p className="card-text" id="p-body"></p>
                        <button className="btn btn-info" onClick={handleClick}>Edit Bio</button>
                        </section>
                        <section style={{display: editBioIsDisplayed}}>
                            <section className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter Bio Here" aria-label="Bio" aria-describedby="basic-addon1" value={textValue} onChange={handleInput}/>
                            </section>
                            <button className="btn btn-info finish-bio fa fa-check" type="button" aria-hidden="true" onClick={updateBio}></button>
                        </section>
                    </section>
                </section>

                <section className="accordion accordion-flush m-auto" id="accordionFlushExample">
                    <section className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingOne">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Athletic Interests
                            </button>
                        </h2>

                        <section id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <section className="accordion-body">
                                <section className="card text-center">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Weightlifting</li>
                                        <li className="list-group-item">Track</li>
                                        <li className="list-group-item">Swimming</li>
                                        <section className="form-popup" id="myForm" style={{display: interestsFormIsDisplayed}}>
                                            <form action="/action_page.php" className="form-container">

                                                <input type="text" className='form-control' placeholder="Interest #1"/>

                                                <input type="text" className='form-control' placeholder="Interest #2"/>
                                                <input type="text" className='form-control' placeholder="Interest #3"/>

                                                <button type="button" class="btn btn-danger mt-1" onClick={closeForm}>Done</button>
                                            </form>
                                        </section>
                                        <button className="btn btn-info fa fa-edit" onClick={showInterestsForm}></button>
                                    </ul>
                                </section>
                            </section>
                        </section>

                        
                    </section>

                    <section className="accordion-item">
                        <h2 className="accordion-header" id="flush-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Hobbies
                            </button>
                        </h2>
                        <section id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <section className="accordion-body">
                                <section className="card text-center">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">Horror Movies</li>
                                        <li className="list-group-item">Chess</li>
                                        <li className="list-group-item" >Italian Cuisine</li>
                                        <li className="list-group-item">U.S History</li>
                                        <li className="list-group-item">Java</li>
                                        <li className="list-group-item">Power Rangers</li>
                                    </ul>
                                </section>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <ScriptTag type="text/javascript" src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></ScriptTag>
        </React.Fragment>
    )
}