import { ProfileAvatar } from "./ProfileAvatar";

export function ProfileInfo(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <ProfileAvatar imgSource="https://st.depositphotos.com/2001121/1964/i/950/depositphotos_19644459-stock-photo-example-word-dictionary.jpg"></ProfileAvatar>
      <div>
        <p>Info about {props.name}</p>
        <ul className="">
          <li>I am {props.age} years old</li>
          <li>I am {props.height} sm tall</li>
          <li>
            I like {props.favouriteProduct1} and {props.favouriteProduct2}
          </li>
        </ul>
      </div>
    </div>
  );
}
