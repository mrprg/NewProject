import Link from "next/link";

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
        <Link href={`blog/${post._id}`}>
          <h1>{post.content}</h1>
        </Link>
      ))}
    </div>
  );
};

export default page;
