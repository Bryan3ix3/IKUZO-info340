import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database'

function FriendChoice({friend}) {
  const [showHobbies, setShowHobbies] = useState(false);
  const [friendClicked, setFriendClicked] = useState(false);

  let friendClass = "";
  if(friendClicked) {
    friendClass = "friend-card friend-card-clicked";
  } else {
    friendClass = "friend-card";
  }

  return (
    <div className={friendClass} onClick={() =>  setFriendClicked(!friendClicked)} onMouseEnter={() => setShowHobbies(true)} onMouseLeave={() => setShowHobbies(false)}>
      <img src={friend.img} alt={friend.alt} />
      <div className="d-flex flex-column friend-font">
        <p><strong>{friend.name}</strong></p>
        {showHobbies && (
          <p>
            {friend.hobby}
          </p>
        )}
      </div>
    </div>
  );
}

export function FriendList(props) {
  const [userInterests, setUserInterests] = useState([{}]);
  const [userHobbies, setUserHobbies] = useState([{}]);
  const db = getDatabase(); //get database address from firebase servers

  useEffect(() => {
    const interestArrRef = ref(db, "Profile/interests") //  dir/key for reference
    const hobbyArrRef = ref(db, "Profile/hobbies") //  dir/key for reference
    //addEventListener for database value change
    const offFunction1 = onValue(interestArrRef, (snapshot) => {
      const interests = snapshot.val(); //extract the value from snapshot
      //const interestsKeyArr = Object.keys(interests); used for non index based mapping
      setUserInterests(interests);
      //setCurrectEventKeys(interestsKeyArr); used for non index based mapping
    });
    const offFunction2 = onValue(hobbyArrRef, (snapshot) => {
      const hobbies = snapshot.val(); //extract the value from snapshot
      //const interestsKeyArr = Object.keys(interests); used for non index based mapping
      setUserHobbies(hobbies);
      //setCurrectEventKeys(interestsKeyArr); used for non index based mapping
    });
    return () => {
      offFunction1();
      offFunction2();
    }
  }, []);
  const recommendedFriends = props.friends.map((item) => {
    if (userInterests.includes(item.activity) || userHobbies.includes(item.hobby)) {
      return <FriendChoice friend={item} key={item.name}/>
    }
  });

  return (
    <section className="box friends friend-web-view" style={props.style}>
      <h1>Recommend Friends:</h1>
      <div>
        {recommendedFriends}
      </div>
    </section>
  );
}