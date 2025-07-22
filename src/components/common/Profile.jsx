function Profile({ src }) {
  return (
    <img
      src={src}
      loading="lazy"
      alt="Profile"
      className="w-32 md:w-48 lg:w-72 "
    ></img>
  );
}

export default Profile;
