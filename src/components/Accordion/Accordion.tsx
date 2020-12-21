import React, { useEffect, useState } from "react";
import clsx from "clsx";

interface AccordionProps {
  children?: React.ReactNode;
  defaultActiveKey?: number;
  toggleOnOf?: boolean;
}

export const AccordionContext = React.createContext<{
  activeKey: number;
  toggle: (activeKey: number) => void;
}>(null);

export function useAccordionContext() {
  return React.useContext(AccordionContext);
}

function Accordion({
  children,
  defaultActiveKey = -1,
  toggleOnOf = false,
}: AccordionProps) {
  const [activeKey, setActiveKey] = useState(defaultActiveKey);
  const toggle = (newActiveKey: number) => {
    if (toggleOnOf && newActiveKey === activeKey) {
      setActiveKey(-1);
    } else {
      setActiveKey(newActiveKey);
    }
  };

  return (
    <AccordionContext.Provider value={{ activeKey, toggle }}>
      {children}
    </AccordionContext.Provider>
  );
}

interface AccordionContentsProps {
  children: React.ReactNode;
}

Accordion.Contents = function AccordionContents({
  children,
}: AccordionContentsProps) {
  const { activeKey } = useAccordionContext();
  const { eventKey } = useSelectableContext();

  if (eventKey === activeKey) {
    return <>{children}</>;
  }

  return <></>;
};

interface AccordionToggleProps {
  children: React.ReactElement;
  eventKey: number;
}

Accordion.Toggle = function AccordionToggle({
  children,
  eventKey,
}: AccordionToggleProps) {
  const { toggle, activeKey } = useAccordionContext();

  const newEventKey = eventKey === activeKey ? -1 : eventKey;
  const refinedChildren = React.cloneElement(children, {
    onClick: () => {
      toggle(newEventKey);
    },
  });

  return <>{refinedChildren}</>;
};

export const SelectableContext = React.createContext<{
  isActive: boolean;
  eventKey: number;
}>(null);

interface AccordionItemProps {
  children: React.ReactNode;
  eventKey: number;
}

export function useSelectableContext() {
  return React.useContext(SelectableContext);
}

Accordion.Item = function AccordionItem({
  children,
  eventKey,
}: AccordionItemProps) {
  const { activeKey } = useAccordionContext();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(eventKey === activeKey);
  }, [eventKey, activeKey]);

  return (
    <SelectableContext.Provider value={{ isActive, eventKey }}>
      <div>{children}</div>
    </SelectableContext.Provider>
  );
};

export default Accordion;
