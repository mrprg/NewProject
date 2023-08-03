async function getData(id) {
  const res = await fetch(
    `http://localhost:3000/api/posts/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("failed to catch data");
  }

  return res.json();
}

const page = async ({ params }) => {
  const { id } = params;
  const data = await getData(id);
  return <div>{data.title}</div>;
};

export default page;
