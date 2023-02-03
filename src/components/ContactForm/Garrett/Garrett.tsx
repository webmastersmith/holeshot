import styles from './Garrett.module.scss';

export default function Garrett() {
  return (
    <div class={styles.garrett}>
      <h1 class={styles.garrett}>Garrett Smith</h1>
      <p>Master Electrician and Partner</p>
      <p>License: TECL#33333</p>
      <p>Serving the Central Texas Area</p>
      <p>
        We provide continual training and development to our technicians through the IEC apprenticeship
        program and TDLR.
      </p>
      <ul>
        <li>Texas Master Electrician License</li>
        <li>OSHA 10</li>
        <li>Certified Boom lift and Fork Truck Operators</li>
        <li>First Aid and CPR Training</li>
        <li>Hot Work</li>
        <li>Bucket Truck Work</li>
        <li>English and Spanish speaking Electricians</li>
      </ul>
    </div>
  );
}
