import { createServerAction$, json, redirect, ServerError } from 'solid-start/server';
import { Show, For, createEffect } from 'solid-js';
import { z, ZodError } from 'zod';
import { zfd } from 'zod-form-data';
import { AiOutlineCloseCircle } from 'solid-icons/ai';
import { BsExclamationTriangleFill } from 'solid-icons/bs';
import styles from './FormComponent.module.scss';
import { Portal } from 'solid-js/web';
import Button from '~/components/Button/Button';
import { Mailer } from './nodemailer';

export default function FormComponent() {
  // server form logic.
  const [enrolling, { Form }] = createServerAction$(async (form: FormData, event) => {
    // const name = form.get('name') as string;
    // const email = form.get('email') as string;
    // const textarea = form.get('textarea') as string;
    const schema = zfd.formData({
      name: zfd.text(z.string().min(1).max(35)),
      email: zfd.text(z.string().min(6).max(75).email()),
      textarea: zfd.text(z.string().min(1).max(800)),
    });

    // const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));
    let n = '',
      emailName = '',
      t = '';
    try {
      const { name, email, textarea } = schema.parse(form);
      n = name;
      emailName = email;
      t = textarea;
      // await sleep(3000);

      // 1. send email!
      Mailer(n, emailName, t);
      console.log(name, email, textarea);
      return { name, email };
    } catch (e) {
      // check for zod error.
      if (e instanceof ZodError) {
        const err = e.issues.map((er: any) => ({ field: er.path[0], msg: er.message }));
        // await sleep(3000);
        throw new ServerError(JSON.stringify(err), { status: 422 });
      }
      // email
      console.log('Email Error?');
      console.log(e);
      // try again.
      console.log('Trying To Send Email Again:');
      Mailer(n, emailName, t).catch((e) => console.log(e));
    }
  });

  // reference to form element to 'reset' form.
  let frm: HTMLFormElement | undefined;

  // watch enrolling, set modal time to stay open, reset form if successful.
  createEffect(async () => {
    if (enrolling.error || enrolling.result) {
      await new Promise((res) => setTimeout(res, 10000));
      if (enrolling.result) {
        if (frm instanceof HTMLFormElement) {
          frm.reset();
        }
      }
      enrolling.clear();
    }
  });

  // create jsx modal close button with the option to clear the form when modal closed.
  function closeButton(clearFrom = false) {
    return (
      <button
        onClick={() => {
          if (frm instanceof HTMLFormElement && clearFrom) {
            frm.reset();
          }
          enrolling.clear();
        }}
      >
        <AiOutlineCloseCircle color="white" />
      </button>
    );
  }

  return (
    <div class={styles.formComponent}>
      <Form id="form" ref={frm} class={styles.form}>
        <div class={styles.name}>
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Name"
            title="Name"
            minLength={1}
            maxLength={35}
            spellcheck={false}
          />
        </div>

        <div class={styles.email}>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            title="Email must be valid."
            id="email"
            required
            placeholder="Email"
            spellcheck={false}
          />
          <p>
            <BsExclamationTriangleFill size={12} color="red" />
            Valid email required.
          </p>
        </div>

        <div class={styles.textarea}>
          <label for="textarea">Message </label>
          <textarea
            name="textarea"
            id="textarea"
            required
            rows="10"
            // cols="50"
            placeholder="Message"
            title="Message"
            spellcheck={true}
            form="form"
            minLength={1}
            maxlength={800}
          ></textarea>
        </div>
        <Button type="submit" style={{ '--height': '32px' }}>
          CONTACT US
        </Button>
      </Form>

      <Show when={enrolling.pending}>
        <Portal>
          <div class={styles.progressBar}>
            <div class={styles.color}></div>
          </div>
        </Portal>
      </Show>

      <Show when={enrolling.error}>
        {/* <Show when={view()}> */}
        <Portal>
          <div class={[styles.modal, styles.red].join(' ')}>
            {closeButton()}
            <h1>Errors</h1>
            <For each={JSON.parse(enrolling?.error?.message || '[{"field":"","msg":""}]')}>
              {(e, i) => {
                return (
                  <div>
                    <p>
                      <span>Please check the {e.field} field: </span>
                      <span>{e.msg}</span>
                    </p>
                  </div>
                );
              }}
            </For>
          </div>
        </Portal>
      </Show>

      <Show when={enrolling.result}>
        <Portal>
          <div class={[styles.modal, styles.green].join(' ')}>
            {closeButton(true)}
            <p>
              Thank you <span>{enrolling.result?.name}</span>!
            </p>
            <p>
              We will get back to you soon at: <span>{enrolling.result?.email}</span>
            </p>
          </div>
        </Portal>
      </Show>
    </div>
  );
}
