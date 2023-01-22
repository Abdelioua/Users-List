export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Details = ({ users }) => {
  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {users.name}</p>
      <p>Email: {users.email}</p>
      <p>Address: {users.address.city}</p>
    </div>
  );
};

export default Details;
