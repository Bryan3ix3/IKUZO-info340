import React from 'react';

function FriendChoice({friend}) {
  return (
    <div className="friend-card">
      <img src={friend.img} alt={friend.alt} />
      <p><strong>{friend.name}</strong></p>
    </div>
  );
}

export function FriendList(props) {
  const recommendedFriends = props.friends.map((item) => {
    return <FriendChoice friend={item} key={item.name}/>
  });

  return (
    <section className="box friends">
      <h1>Recommend Friends:</h1>
      <div>
        {recommendedFriends}
      </div>
    </section>
  );
}

export function FriendsButton() {
  return(
    <button id="friend-icon">
        <img src={"img/friend.png"} alt="Friend icon" />
    </button>
  );
}