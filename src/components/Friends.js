import React from 'react';

export function Friends() {
  return (
    <section class="box friends">
        <h1>Recommend Friends:</h1>
        <div>
            <div className="friend-card">
                <img src={"img/pfp3.jpg"} alt="Serena Williams pic" />
                <p><strong>Serena Williams</strong></p>
            </div>

            <div className="friend-card">
                <img src={"img/pfp1.png"} alt="Among Us pic" />
                <p><strong>Among Us</strong></p>
            </div>

            <div className="friend-card">
                <img src={"img/pfp2.png"} alt="Rafael Nadal pic" />
                <p><strong>Rafael Nadal</strong></p>
            </div>
        </div>
    </section>
  );
}

export function FriendsButton() {
    <button id="filter-icon">
        <img src={"img/filter.png"} alt="Filter icon" />
    </button>
}