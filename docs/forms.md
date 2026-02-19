# Forms

## Formspree Account

- **Form ID:** `xpqjjwdy`
- **Endpoint:** `https://formspree.io/f/xpqjjwdy`
- **Dashboard:** https://formspree.io/forms/xpqjjwdy/submissions
- Log in at formspree.io with the account that owns this form to view submissions

## How the Form Works

The contact form in `src/components/Contact.astro` uses a vanilla JS `fetch` approach — no page redirect, no Formspree redirect page shown to the user.

**Flow:**
1. User fills in Name, Email, Phone (optional), Message and clicks "Send Message"
2. JavaScript intercepts the `submit` event with `e.preventDefault()`
3. `fetch(formAction, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })` sends the data
4. If `res.ok` → form resets, success message appears
5. If not `res.ok` or network error → error message appears with direct email fallback

**Why `Accept: application/json`?**
Formspree returns a JSON response (instead of an HTML redirect page) when this header is set. This is required for the inline fetch approach to work correctly.

## Changing the Endpoint

The endpoint is read from an environment variable with a hardcoded fallback:

```js
const formspreeEndpoint = import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/xpqjjwdy';
```

To change the endpoint:
1. Create a new form at formspree.io
2. Update the `PUBLIC_FORMSPREE_ENDPOINT` environment variable in Vercel project settings
3. Redeploy

For local development, copy `.env.example` to `.env` and set the value there.

## Formspree Dashboard — Key Settings

Log in to formspree.io → select your form → configure:

| Setting | Recommendation |
|---|---|
| **Notification email** | Set to `info@vflandscapedesign.com` so submissions arrive in your inbox |
| **Subject line** | e.g. `New inquiry from vflandscapedesign.com` |
| **reCAPTCHA** | Enable on free plan for spam protection |
| **Honeypot** | Enable (catches basic bot submissions) |
| **Allowed domains** | Add `vflandscapedesign.com` to prevent off-site abuse |

## Viewing Submissions

1. Go to https://formspree.io/forms/xpqjjwdy/submissions
2. Or check your notification email (set above)
3. Free plan stores up to 50 submissions/month; older ones are cleared

## Free Plan Limits

Formspree free tier allows **50 submissions/month**. For a landscaping inquiry form this is typically sufficient. If volume exceeds this, upgrade to Gold (~$10/mo) for unlimited submissions.
