import { Suspense } from "react";

const MyComponent = async ({ page }: { page: string }) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const json = await data.json();
  console.log({ json });
  return <div>woohoo - {JSON.stringify(json)}</div>;
};
export default function Page({ params }: { params: { page: string } }) {
  const page = params.page;

  return (
    <div>
      <h2>My page: {page}</h2>
      <Suspense fallback={<div>loading</div>}>
        <MyComponent page={page} />
      </Suspense>
    </div>
  );
}
