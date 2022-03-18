# INFO 340 Project

Link to page: https://info-340-final-project-17aa1.web.app/profile

Our project, Ikuzo, allows users to look at outdoor activity events on the home screen. Users can read more about what the purpose of our website aims to achieve on the About Us page. Our website has three main interactions:
  1) Filtering out events: The filter section has three separate categories.
    a) In the first section, selecting a value in the upcoming events filter all the cards based on the date. For example, picking the one-week value will filter out all events within one week. We calculate the value of the event’s date by subtracting it from today’s date to see if it’s under the selected upcoming event value.
    b) The following section is the location filter. The picked values check if the events occur in specific locations. For example, choosing IMA and Husky Track will only return events at the IMA or Husky Track.
    c) The final section is the time of day. The picked option filters out an event happening between the selected time period.
	Selecting options from all three or fewer filter categories will return an updated view of the event cards on the screen.
2) Adding an event: Users can add an event to the firestore database when entering the add event page. Once the user completes the form and submits it, they will return to the home screen to see their added event. Here, they can filter their events will the filter menu.
3) Changing recommended friends list: When users change their athletic interests or hobbies, they will see a new list of suggested friends based on their selection. For example, when changing an athletic activity to “ping pong,” they will see a new list of friends. With each existing friend, they will share the event with them with the share button on each event card.
