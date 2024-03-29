import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue, set as fbset } from 'firebase/database'

function FriendChoice(props) {
  const [showInfo, setShowInfo] = useState(false);
  const [isFriend, setIsFriend] = useState(false);
  const db = getDatabase();

  useEffect(() => {
    const isFriendRef = ref(db, "Friends/" + props.count + "/isFriend"); //  dir/key for reference
    //addEventListener for database value change
    const offFunction = onValue(isFriendRef, (snapshot) => {
      const isF = snapshot.val(); //extract the value from snapshot
      setIsFriend(isF);
    });
    return () => {
      offFunction();
    }
  }, []);

  function friendClick() {
    try {
      const isFriendArrRef = ref(db, "Friends/" + props.count + "/isFriend");
      fbset(isFriendArrRef, !isFriend);
    } catch (error) {
      props.friend.activity = error;
    }
  }

  return (
    <div className={props.friend.isFriend ? "friend-card friend-card-clicked" : "friend-card"} onClick={() =>  friendClick()} onMouseEnter={() => setShowInfo(true)} onMouseLeave={() => setShowInfo(false)}>
      <img src={props.friend.img} alt={props.friend.alt} />
      <div className="d-flex flex-column friend-font">
        {!showInfo && (
          <p><strong>{props.friend.name}</strong></p>
        )}
        {showInfo && (
          <p>
            <strong>A: {props.friend.activity}</strong><br/>
            <strong>H: {props.friend.hobby}</strong>
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
    const interestArrRef = ref(db, "Profile/interests"); //  dir/key for reference
    const hobbyArrRef = ref(db, "Profile/hobbies"); //  dir/key for reference
    //addEventListener for database value change
    const offFunction1 = onValue(interestArrRef, (snapshot) => {
      const interests = snapshot.val(); //extract the value from snapshot
      setUserInterests(interests);
    });
    const offFunction2 = onValue(hobbyArrRef, (snapshot) => {
      const hobbies = snapshot.val(); //extract the value from snapshot
      setUserHobbies(hobbies);
    });
    return () => {
      offFunction1();
      offFunction2();
    }
  }, []);

  const recommendedFriends = props.friends.map((item, index) => {
    if (userInterests.includes(item.activity) || userHobbies.includes(item.hobby)) {
      return <FriendChoice friend={item} key={item.name} count={index} />
    }
  });

  return (
    <section className="box friends friend-web-view" style={props.style}>
      <h2>Recommend Friends:</h2>
      <div>
        {recommendedFriends}
      </div>
    </section>
  );
}