import styles from './Garrett.module.scss';
import YearsExperience from './YearsExperience/YearsExperience';
import ElectricianImage from './ElectricianImage/ElectricianImage';

export default function Garrett() {
  return (
    <div class={styles.garrett}>
      <ElectricianImage electrician={styles.electrician} />
      <div class={styles.content}>
        <h1>Holeshot Electric</h1>
        <h3>Master Electricians</h3>
        <h3>License: TECL#37447</h3>
        <h3>
          Over <span>100 years</span> combined experience!
        </h3>
        <YearsExperience years={styles.years} />
        <p class={styles.training}>
          We provide continual training and development to our technicians through the IEC apprenticeship
          program and TDLR.
        </p>
        <ul>
          <li>Texas Master Electrician Licenses</li>
          <li>OSHA 10</li>
          <li>Certified Boom lift and Fork Truck Operators</li>
          <li>First Aid and CPR Training</li>
          <li>Hot Work</li>
          <li>Bucket Truck Work</li>
          <li>English and Spanish speaking Electricians</li>
        </ul>
      </div>
    </div>
  );
}
