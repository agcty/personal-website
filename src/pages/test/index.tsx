import Accordion, {
  useAccordionContext,
  useSelectableContext,
} from "@components/Accordion/Accordion";
import clsx from "clsx";

function Page(): JSX.Element {
  const specificBehaviour = () => {
    // do something specific, like uploading a file
  };

  return (
    <div>
      <ButtonWithStandardBehaviour onClick={() => specificBehaviour()}>
        Specific Behaviour
      </ButtonWithStandardBehaviour>

      <ButtonWithStandardBehaviour>
        Only Standard Behaviour
      </ButtonWithStandardBehaviour>
    </div>
  );
}

function ButtonWithStandardBehaviour({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const standardBehaviour = () => {
    // do something that all buttons of this kind need to do
  };
  return (
    <button
      onClick={() => {
        standardBehaviour();
        // if an onClick is passed -> run it
        onClick?.();
      }}
      type="button"
    >
      {children}
    </button>
  );
}

function ComplexButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { isActive, eventKey } = useSelectableContext();
  const { toggle } = useAccordionContext();

  return (
    <button
      type="button"
      className={clsx(
        `flex items-center justify-between px-3 py-1.5 rounded-md hover:bg-dark-600 focus:outline-none w-full bg-dark-700 overflow-ellipsis text-xs`,
        {
          "bg-dark-700 text-dark-100": isActive,
          "text-dark-300": !isActive,
        }
      )}
      onClick={() => {
        toggle(eventKey);
        onClick?.();
      }}
    >
      <div>{children}</div>

      {isActive ? "+" : "-"}
    </button>
  );
}

export default Page;

{
  /* <Accordion toggleOnOf>
<Accordion.Item eventKey={1}>
  <Accordion.Toggle eventKey={1}>
    <button>Test</button>
  </Accordion.Toggle>

  <Accordion.Contents>
    <div>Hello</div>
  </Accordion.Contents>
</Accordion.Item>
</Accordion> */
}
