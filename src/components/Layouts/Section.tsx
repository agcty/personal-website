export interface SectionProps {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

function Section({ className, style, children }: SectionProps) {
  return (
    <section className={`px-6 py-12 ${className}`} style={style}>
      {children}
    </section>
  );
}

export default Section;
