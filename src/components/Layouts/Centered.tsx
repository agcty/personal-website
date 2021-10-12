import Section, { SectionProps } from "./Section";

function Centered({ className, style, children }: SectionProps) {
  return (
    <Section className={`max-w-screen-xl mx-auto ${className}`} style={style}>
      {children}
    </Section>
  );
}

export default Centered;
