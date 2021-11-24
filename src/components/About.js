import React from 'react';

function AboutUsDetails() {
  return (
    <section className="detail-box">
      <h2>About Us</h2>
      <ul>
        <h3><strong>Overview</strong></h3>
        <ul>
          <p className="details">
            Maintaining and improving physical and mental health can be a challenge for university students. Students usally find it challenging to connect with people who share a similar interest in physical activity. We created an information system to help connect students who have identical availability and interest in physical activities to help them better maintain their health.
          </p>
        </ul>
        <h3><strong>Problem Space</strong></h3>
        <ul>
          <p className="details">
            A considerable number of university students have demonstrated desire and interest in maintaining a healthy lifestyle. Research published in James Clear’s Atomic Habits suggests that people are more likely to sustain habits if those habits are also practiced by the many, the powerful (influencers) or the close (proximity). We have chosen to apply the latter strategy. By connecting students with similar goals, we aim to foster long-term habit formation.
          </p>
        </ul>
        <h3><strong>Why Ikuzo</strong></h3>
        <ul>
          <p className="details">
            Fitness web apps such as <a href="https://www.crossfit.com/">CrossFit</a>  and <a href="https://www.fitnessblender.com/">Fitness Blender</a> attempt to solve this problem; however, they focus on workout routines for people who go to the gym. In addition, these web apps include virtual fitness events and ways of finding local gyms nearby. But, they lack the aspects for community and local connections with other individuals. We want to solve this problem by incorporating a wide range of fitness opportunities for university students, apart from just going to the gym.
          </p>
        </ul>
        <h3><strong>Athletic Interests</strong></h3>
        <ul>
          <p className="details">
            Here at Ikuzo, we aren't minimzing the different athletic interests students are into. We are here to help motivate and connect students based on interests while also factoring in mental & physical health.
          </p>
        </ul>
      </ul>
    </section>
  );
}

export function AboutScreen() {
  return (
    <div className="about-page">
      <AboutUsDetails />
      <img className="aboutus" src="img/health.jpeg" alt="HealthIsWealth" />
      <section className="detail-box">
        <h2> Ikuzo's Solution</h2>
          <p className="details">
            Here at Ikuzo, we have tailored our platform to cater to our audeince who are university students that attend the University of Washington.
            Students will be able to create their own profile, share interests, connect with other students, and contact other students.
            Students will also be able to view the profiles of other students who have the same interests and also view current outdoor events the student is attending.
            Ikuzo will connect students by interest which will create motivation for students to get together to socialize and also excercise.
          </p>
      </section>
    </div>
  );
}