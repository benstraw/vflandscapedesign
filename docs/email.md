# Email Setup — Zoho Mail Free

## Overview

The business email `info@vflandscapedesign.com` is hosted on **Zoho Mail Free**, which provides up to 5 mailboxes at no cost. DNS for the domain must be configured before completing these steps.

## Step-by-Step Setup

### 1. Sign Up for Zoho Mail

1. Go to https://www.zoho.com/mail/ → click **Get Started** → choose **Free Plan**
2. Enter `vflandscapedesign.com` as your domain
3. Create a Zoho account (or sign in with an existing one)

### 2. Verify Domain Ownership

Zoho will give you a **TXT record** to add to your domain's DNS:

| Type | Host / Name | Value |
|---|---|---|
| TXT | `@` (root) | `zoho-verification=...` (Zoho provides the value) |

Add this at your DNS provider (Vercel DNS dashboard, Cloudflare, GoDaddy, etc.). Wait up to 30 minutes for propagation, then click **Verify** in Zoho.

### 3. Add MX Records

Zoho provides MX records to route incoming email to their servers. Add all three:

| Type | Host | Points To | Priority |
|---|---|---|---|
| MX | `@` | `mx.zoho.com` | 10 |
| MX | `@` | `mx2.zoho.com` | 20 |
| MX | `@` | `mx3.zoho.com` | 50 |

**Remove any existing MX records** before adding Zoho's (especially if the domain had a previous email provider).

### 4. Create the Mailbox

1. In Zoho Admin Console → **Mail Accounts** → **Add Account**
2. Set username: `info`
3. Full address: `info@vflandscapedesign.com`
4. Set a secure password

### 5. Add SPF Record

SPF tells receiving servers that Zoho is authorized to send email from your domain. Add:

| Type | Host | Value |
|---|---|---|
| TXT | `@` | `v=spf1 include:zoho.com ~all` |

### 6. Add DKIM Record

DKIM cryptographically signs outgoing emails. In Zoho Admin Console → **Email Authentication** → **DKIM** → **Add Selector**.

Zoho provides a TXT record like:

| Type | Host | Value |
|---|---|---|
| TXT | `zoho._domainkey` | `v=DKIM1; k=rsa; p=...` (Zoho provides the key) |

**Why SPF and DKIM matter:** Without them, email from your domain is more likely to land in spam. Gmail, Outlook, and Apple Mail all check these records. Set them up before sending any business email.

### 7. Configure DMARC (Recommended)

DMARC tells servers what to do when SPF/DKIM fail. Add:

| Type | Host | Value |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:info@vflandscapedesign.com` |

Start with `p=none` (monitor only) and move to `p=quarantine` or `p=reject` after confirming legitimate email passes.

## Accessing Email

**Webmail:** https://mail.zoho.com — sign in with `info@vflandscapedesign.com`

**Apple Mail (IMAP):**
- Incoming: `imap.zoho.com`, port 993, SSL
- Outgoing: `smtp.zoho.com`, port 465, SSL
- Username: `info@vflandscapedesign.com`

**Outlook (IMAP):**
- Same server settings as above
- Zoho also offers a direct Outlook add-in

## Formspree → This Inbox

In the Formspree dashboard for form `xpqjjwdy`:
1. Go to **Settings → Notifications**
2. Set the notification email to `info@vflandscapedesign.com`
3. Every contact form submission will trigger an email to this inbox with the form contents
