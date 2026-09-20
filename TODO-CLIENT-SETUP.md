# To do with the client

Everything below is live on https://kellys-house-and-farm.vercel.app, but these things need details, a login or a yes from the client:

1. Finish the footer email sign-up
2. Add PayPal and Zelle to the footer
3. Confirm some wording with Keisha

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

The footer's **SUPPORT** column shows three slim pill buttons: **Venmo**, **PayPal** and **Zelle**. Venmo works. Until we have their details, tapping PayPal or Zelle says "…is coming soon. You can give through Venmo today."

### What to get from the client

- **Zelle or Cash App?** Confirm which one the third button should be. Changing it is one word.
- **PayPal:** their PayPal.me link, for example `https://paypal.me/…`. They can find or create it at paypal.me.
- **Zelle:** the email or phone number their Zelle is registered to, and the name donors will see when they send, so people know it's the right person. (If it's Cash App instead, get their `$Cashtag`. That's a link, `https://cash.app/$…`, so it works like PayPal.)

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

## 3. Confirm some wording with Keisha

We wrote these from the photos and the story. They should hear Keisha's yes before anyone treats them as final. Each one is a one-line change in `src/app/(pages)/(home)/page.tsx`.

### Meaning and dedication

- **Cowrie tribute dedication:** "In loving memory of Henry and Rosie Lee Kelly." Is the shell piece for them, or for the ancestors more broadly?
- **The Garden Now, step 04:** "Here they honor Henry and Rosie Lee Kelly and all who came before." Same question.
- **An Offering:** "Before the harvest is carried away, some of it goes back… A thank-you to the soil, the rain and the hands that came before." Does that describe what the offering means to Keisha?

### Crop names we guessed from photos

- **Sorghum** (harvest slider): the red and gold seed heads could be broomcorn or millet.
- **Lettuce** (harvest slider): described as "butter lettuce."
- **Amaranth** and **Poppies** (In the Field): "red amaranth among the squash" and "California poppies and calendula."
- **Ginger & Bitter Melon** (harvest slider): the photo also shows long beans.
- **Canna ‘Cannova Yellow’** (The Garden Now, step 03): step 03 now names the cannas as this variety, and the plant facts around it (height, bloom season, blue-green leaves) all describe Cannova Yellow specifically. That came from a gardening site, not from Keisha. If she planted a different yellow canna, the variety name and those details should come out and it goes back to just “yellow canna lilies.”

### The Garden Now (steps 01–05)

Steps 01, 02 and 05 were filled out from the photos so all five cards read at the same
weight. Three things in them are inference, not record:

- **Step 01:** “soil that had rested since Henry and Rosie Lee Kelly last worked it”
  takes it that nothing was grown in the yard between their passing and this spring.
  That matches Our Story, but Keisha would know if anything was planted in between.
- **Step 02 has no date.** Every other card is dated (May 11, 16, 17). Breaking ground
  falls between the 11th and the 16th, but we don’t know the day, so the card simply
  doesn’t say. If Keisha remembers it, it’s one line. If not, leaving it undated
  reads fine.
- **Step 05:** “Cut the pods young and the plant keeps setting more” is general okra
  growing, not how Keisha picks hers.

Also the land clip caption under the tribute: **“The land they kept · Canton, Mississippi.”**

### Years of Growing pop-out cards

Each card's "at a glance" facts are general growing facts (for example, carrots take about 70 to 80 days). They don't say how or where Keisha grew anything. If Keisha wants to add more, like varieties, where each was grown, or a memory, it goes in the `details` of each card.

Also check the first card's photo caption: "Pitchfork in hand on a pile of wood chips, January 2020." The date comes from the photo file.
