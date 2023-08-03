async function getData() {
  const res = await fetch(
    "http://localhost:3000/api/posts",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("failed to load data");
  }

  return res.json();
}

const page = async () => {
  const data = await getData();
  console.log(data);
  return (
    <div>
      {data.map((post) => (
        <h1>{post.content}</h1>
      ))}
    </div>
  );
};

export default page;
