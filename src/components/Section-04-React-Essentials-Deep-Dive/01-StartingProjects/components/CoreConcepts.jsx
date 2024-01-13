import CoreConcept from './CoreConcept.jsx';
import { CORE_CONCEPTS } from './data.js';
import Section from './Section';

const CoreConcepts = () => {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => {
          <CoreConcept key={conceptItem.title} {...conceptItem} />;
        })}
      </ul>
    </Section>
  );
};
export default CoreConcepts;
