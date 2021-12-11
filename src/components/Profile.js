import React, { useState, useEffect } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import PhotoUpload  from './PhotoUpload';
import ScriptTag from 'react-script-tag';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { getDatabase, ref, set as firebaseSet, onValue } from 'firebase/database';

export function ProfileScreen() {
    const [name, setName] = useState('');
    const db = getDatabase();

    const [editBioIsDisplayed, setEditBioIsDisplayed] = useState('none');
    const [interestsFormIsDisplayed, setInterestsFormIsDisplayed] = useState('none');
    const [hobbiesFormIsDisplayed, setHobbiesFormIsDisplayed] = useState('none');
    
    const [textValue, setTextValue] = useState(''); //text value for bio input. Send to db
    const [bioTextValue, setBioTextValue] = useState(''); //download from db
    
    const [interestsArray, setInterestsArray] = useState(''); //download from db
    const [interestInput0, setInterestInput0] = useState(''); //upload to db
    const [interestInput1, setInterestInput1] = useState(''); //upload to db
    const [interestInput2, setInterestInput2] = useState(''); //upload to db

    const [hobbiesArray, setHobbiesArray] = useState('');
    const [hobbieInput0, setHobbieInput0] = useState(''); //upload to db
    const [hobbieInput1, setHobbieInput1] = useState(''); //upload to db
    const [hobbieInput2, setHobbieInput2] = useState(''); //upload to db

    useEffect(() => {
        const profileRef = ref(db, "Profile");
        onValue(profileRef, (snapshot) => {
            const newValue = snapshot.val(); //extract  value from snapshot
            console.log(newValue);
            setBioTextValue(newValue.bio);
            setInterestsArray(newValue.interests);
            setHobbiesArray(newValue.hobbies);
            setName(newValue.name);
        })
    }, []);

    const handleClick = () => { //handle edit bio click
        return setEditBioIsDisplayed('block');
    }

    const handleInput = (event) => { //handle bio text field input
        setTextValue(event.target.value);
    }

    let updateBio = () => {    //handle "check" button
        if(!textValue == '') {
            const bioRef = ref(db, "Profile/bio")
            firebaseSet(bioRef, textValue);
            setEditBioIsDisplayed('none');
        }       
    }

    // interests form handlers show/close
    const showInterestsForm = () => {
        setInterestsFormIsDisplayed('block');
    }

    const closeInterestsForm = () => {
        const interestsRef0 = ref(db, "Profile/interests/0");
        const interestsRef1 = ref(db, "Profile/interests/1");
        const interestsRef2 = ref(db, "Profile/interests/2");
        firebaseSet(interestsRef0, interestInput0);
        firebaseSet(interestsRef1, interestInput1);
        firebaseSet(interestsRef2, interestInput2);
        setInterestsFormIsDisplayed('none');
    }

    // hobbies form handlers show/close
    const showHobbiesForm = () => {
        setHobbiesFormIsDisplayed('block');
    }

    const closeHobbiesForm = () => {
        const hobbiesRef0 = ref(db, "Profile/hobbies/0");
        const hobbiesRef1 = ref(db, "Profile/hobbies/1");
        const hobbiesRef2 = ref(db, "Profile/hobbies/2");
        firebaseSet(hobbiesRef0, hobbieInput0);
        firebaseSet(hobbiesRef1, hobbieInput1);
        firebaseSet(hobbiesRef2, hobbieInput2);
        setHobbiesFormIsDisplayed('none');
    }
    
    return (
        <React.Fragment>
            <section className='banner mb-2'>
                <img src="/img/pexels-tony-jamesandersson-1674752.jpg" className="profile-pic" alt="profiles"/>
                <PhotoUpload/>
                <p className='userName'><strong>{name}</strong></p>
            </section>


            <section className="content">
                <section className="d-flex justify-content-center">
                    <section className="card">
                        <section className="card-body">
                        <h1 className="card-title">Bio</h1>
                        <p className="card-text" id="p-body">{bioTextValue}</p>
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
                                        <li className="list-group-item">{interestsArray[0]}</li>
                                        <li className="list-group-item">{interestsArray[1]}</li>
                                        <li className="list-group-item">{interestsArray[2]}</li>
                                        <section className="form-popup" id="myForm" style={{display: interestsFormIsDisplayed}}>
                                            <form action="/action_page.php" className="form-container interestsClass">
                                                <input type="text" value={interestInput0} onChange={(e) => setInterestInput0(e.target.value)} className='form-control' placeholder="Interest #1"/>
                                                <input type="text" value={interestInput1} onChange={(e) => setInterestInput1(e.target.value)} className='form-control' placeholder="Interest #2"/>
                                                <input type="text" value={interestInput2} onChange={(e) => setInterestInput2(e.target.value)} className='form-control' placeholder="Interest #3"/>
                                                <button type="button" class="btn btn-danger mt-1" onClick={closeInterestsForm}>Done</button>
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
                                        <li className="list-group-item">{hobbiesArray[0]}</li>
                                        <li className="list-group-item">{hobbiesArray[1]}</li>
                                        <li className="list-group-item">{hobbiesArray[2]}</li>
                                        <section className="form-popup" id="myForm" style={{display: hobbiesFormIsDisplayed}}>
                                            <form action="/action_page.php" className="form-container hobbiesClass">
                                                <input type="text" value={hobbieInput0} onChange={(e) => setHobbieInput0(e.target.value)} className='form-control' placeholder="Hobbie #1"/>
                                                <input type="text" value={hobbieInput1} onChange={(e) => setHobbieInput1(e.target.value)} className='form-control' placeholder="Hobbie #2"/>
                                                <input type="text" value={hobbieInput2} onChange={(e) => setHobbieInput2(e.target.value)} className='form-control' placeholder="Hobbie #3"/>
                                                <button type="button" class="btn btn-danger mt-1" onClick={closeHobbiesForm}>Done</button>
                                            </form>
                                        </section>
                                        <button className="btn btn-info fa fa-edit" onClick={showHobbiesForm}></button>
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