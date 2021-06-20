import { NotionRenderer } from "react-notion-x";

import notion from "@api/notion";

export default function Test({ data }) {
  return (
    <div>
      <div>{JSON.stringify(data)} </div>

      <NotionRenderer recordMap={data} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const result = await notion.blocks.children.list({
    block_id: "c84a83a3751e4d30abcf5759d582720b",
  });

  // const result = await notion.databases.query(});

  return {
    props: { data: result }, // will be passed to the page component as props
  };
}
