/** Contact form: Web3Forms when an access key is configured, otherwise a prefilled mailto: link. */
export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('form[data-contact-form]');
  if (!form) return;
  const status = form.querySelector<HTMLElement>('[data-form-status]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const label = submit?.querySelector<HTMLElement>('[data-submit-label]');
  const { key = '', email = '', subject = '', success = '', error = '', sending = '' } = form.dataset;

  const setStatus = (msg: string, kind: 'ok' | 'err' | '') => {
    if (!status) return;
    status.textContent = msg;
    status.dataset.kind = kind;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    if (data.get('botcheck')) return; // honeypot filled → bot

    const name = String(data.get('name') ?? '').trim();
    const from = String(data.get('email') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!key) {
      const body = `${message}\n\n— ${name} <${from}>`;
      window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    const prevLabel = label?.textContent ?? '';
    if (submit) submit.disabled = true;
    if (label) label.textContent = sending;
    setStatus('', '');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: key,
          subject,
          from_name: 'mteminayhan.com',
          name,
          email: from,
          message,
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok && json.success !== false) {
        form.reset();
        setStatus(success, 'ok');
      } else {
        setStatus(error, 'err');
      }
    } catch {
      setStatus(error, 'err');
    } finally {
      if (submit) submit.disabled = false;
      if (label) label.textContent = prevLabel;
    }
  });
}
