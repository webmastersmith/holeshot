import { A } from '@solidjs/router';
import styles from './Button.module.scss';

export default function Button(props: any) {
  return (
    // <button class={styles?.button || ''} style={props?.style || {}} type={props?.type || 'button'}>
    //   {props.children}
    // </button>
    <A href="/#contact">
      <button class={styles.button} style={props?.style || {}} type={props?.type || 'button'}>
        {props.children}
      </button>
    </A>
  );
}
