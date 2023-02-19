import { A } from '@solidjs/router';
import styles from './Button.module.scss';

export default function Button(props: any) {
  return props?.href ? (
    <A href={props.href} style={{ 'text-decoration': 'none' }}>
      <button
        class={`${styles.button} ${props.button}`}
        style={props?.style || {}}
        type={props?.type || 'button'}
      >
        {props.children}
      </button>
    </A>
  ) : (
    <button
      class={`${styles.button} ${props.button}`}
      style={props?.style || {}}
      type={props?.type || 'button'}
    >
      {props.children}
    </button>
  );
  // return (
  //   // <button class={styles?.button || ''} style={props?.style || {}} type={props?.type || 'button'}>
  //   //   {props.children}
  //   // </button>
  //   <A href="/#contact" style={{ 'text-decoration': 'none' }}>
  //     <button
  //       class={`${styles.button} ${props.button}`}
  //       style={props?.style || {}}
  //       type={props?.type || 'button'}
  //     >
  //       {props.children}
  //     </button>
  //   </A>
  // );
}
