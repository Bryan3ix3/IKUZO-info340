
export function FriendsButton(props) {
    return(
      <button id="friend-icon" onClick={props.handleModalCallback()}>
          <img src={"img/friend.png"} alt="Friend icon" />
      </button>
    );
  }