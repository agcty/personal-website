import Hiker from "react-hiker";

export default function Test() {
  return (
    <div>
      <Hiker>
        <Hiker.Step id="1">Test</Hiker.Step>
        <Hiker.Step id="2">Test2</Hiker.Step>

        <Hiker.Button>
          {({ next }) => (
            <button
              onClick={() => {
                next();
              }}
            >
              Next
            </button>
          )}
        </Hiker.Button>
      </Hiker>

      {/* <NotionRenderer recordMap={data} /> */}
    </div>
  );
}
