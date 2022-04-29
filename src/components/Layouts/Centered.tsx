import Section, { SectionProps } from "./Section";

function Centered({ className, style, children }: SectionProps) {
  return (
    <Section className={`mx-auto max-w-screen-xl ${className}`} style={style}>
      {children}
    </Section>
  );
}

export default Centered;
