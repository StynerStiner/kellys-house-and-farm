# To do with the client

Two things on the site need details or a login only the client has:

1. Finish the footer email sign-up
2. Add PayPal and Zelle to the footer

## 1. Finish the footer email sign-up

The sign-up box in the footer ("Enter your email address …" with the arrow button) sends each sign-up to **lashakelly@gmail.com** through [FormSubmit](https://formsubmit.co). The code is done. FormSubmit won't deliver anything until someone logged in to that Gmail account clicks an activation link. The client wasn't available to do that, so we'll finish it together when they are.

### Where things stand

- **Code:** `src/app/ui/Forms/FooterForm.tsx`. The address is set in `FORM_ENDPOINT`.
- **Tested:** on localhost with FormSubmit's reply faked, so no real email was sent. Success shows "Thank you! You're signed up." and a refused sign-up shows "Sign-up didn't go through. Please try again later."
- **Until it's activated,** anyone who signs up on the live site sees "Sign-up didn't go through." Nothing breaks, but no sign-ups are collected.

### When the client is with us

1. **Make sure the latest site is live:** `git push`, then `vercel --prod`.
2. **Trigger the activation email.** On https://kellys-house-and-farm.vercel.app, scroll to the footer, enter a test address (for example `test@example.com`) and click the arrow. The site will say "Sign-up didn't go through". That's expected the first time.
3. **The client activates it.** They open **lashakelly@gmail.com** and find the email from FormSubmit asking to activate the form. Check Spam and Promotions if it's not in the inbox. They click **Activate Form**.
4. **Test again.** Sign up once more with a test address. The site should say "Thank you! You're signed up.", and within a minute an email arrives at lashakelly@gmail.com with the subject **"New sign-up from the Kelly's House and Farm website"**. Hitting Reply on it goes straight to the person who signed up.
5. **Get the key (recommended).** After activation, FormSubmit gives a random string that can stand in for the email address, so spam bots can't find lashakelly@gmail.com in the page's code. Ask the client to forward it to us.
6. **Swap in the key.** In `FooterForm.tsx`, change `FORM_ENDPOINT` from `https://formsubmit.co/ajax/lashakelly@gmail.com` to `https://formsubmit.co/ajax/<the-random-string>`. Then run step 4 again to confirm it still arrives.
7. **Ship it:** commit, `git push`, `vercel --prod`.

### If something goes wrong

- **No activation email:** check Spam and Promotions, then submit the form once more. The activation email only goes to lashakelly@gmail.com.
- **"Didn't go through" after activating:** make sure the activation link was clicked in the same inbox the form sends to, and that the live site has the latest code.
- **If we ever switch to Web3Forms instead:** create an access key for lashakelly@gmail.com at web3forms.com. The key is emailed to that inbox. Add it to Vercel as `NEXT_PUBLIC_API_KEY`, and point `FooterForm.tsx` back at `https://api.web3forms.com/submit`.

## 2. Add PayPal and Zelle to the footer

The footer's **SUPPORT THE GARDEN** row shows the ways to give as rounded buttons. Venmo is live. PayPal and Zelle each have a slot ready but stay hidden until they're filled in, so no one taps a button that goes nowhere.

### What to get from the client

- **PayPal:** their PayPal.me link, for example `https://paypal.me/…`. They can find or create it at paypal.me.
- **Zelle:** the email or phone number their Zelle is registered to, and the name donors will see when they send, so people know it's the right person.

### Where it goes

In `src/app/ui/Footer/Footer1.tsx`, fill in `giveOptions`:

```ts
{ label: "PayPal", url: "https://paypal.me/…" },
{ label: "Zelle", copy: "<email or phone>" },
```

Tapping PayPal opens their page in a new tab. Zelle has no web link, so tapping it copies the email or phone and shows a "copied" message.

### Also update

The "Help the Garden Grow Again" section just above the footer still has only a **Give via Venmo** button. Its note says "Gifts through Venmo go directly to Keisha and aren't tax-deductible." Add the PayPal and Zelle options there too, and reword the note to cover all of them.

Then commit, `git push` and `vercel --prod`.
