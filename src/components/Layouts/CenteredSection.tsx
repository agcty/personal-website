import Section, { SectionProps } from "./Section";

function CenteredSection({ className, style, children }: SectionProps) {
  return (
    <Section className={`max-w-screen-xl mx-auto ${className}`} style={style}>
      {children}
    </Section>
  );
}

export default CenteredSection;
