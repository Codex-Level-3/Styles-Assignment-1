export default function UserProfile({ name, biography, hobbies }) {
  return (
    <div className="profile">
      <h2 className="profile__title">{name}</h2>
      <div className="profile__bio">
        {biography ? <p>{biography}</p> : <p>No biography availiable.</p>}
      </div>
      {hobbies.length ? (
        <ul className="profile__hobbies">
          {hobbies.map((hobby) => (
            <li key={crypto.randomUUID}>{hobby}</li>
          ))}
        </ul>
      ) : (
        <li>No hobbies listed.</li>
      )}
    </div>
  );
}
