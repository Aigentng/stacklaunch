# Editing the StackLaunch website

This guide is for editing the site's text, images and blog posts without
touching any code. It does not cover the one-off technical setup (that is a
separate document your developer will hand you).

## Logging in

1. Go to `https://stacklunch.africa/admin`.
2. Click **Log in with GitHub**.
3. A GitHub sign-in window will open. Sign in with the GitHub account your
   developer added you to the project with.
4. You will land on the content dashboard, with a list on the left:
   **Pages**, **Testimonials**, **Blog & Case Studies**.

If login fails or the page cannot find a sign-in server, the technical setup
described in the separate handover document has not been completed yet.
Contact your developer.

## Editing text on an existing page

1. Click **Pages** in the left-hand list.
2. Choose the page you want to change (Home page, Services page, About page,
   Why StackLaunch page, or Contact page).
3. The editor shows the page broken into sections, matching what you see on
   the live site top to bottom (hero, problem section, and so on). Click a
   section to expand it and see its fields.
4. Change any text field. Field labels tell you what each one is for.
5. When you are happy, click **Publish** in the top right (sometimes shown
   as **Publish now** or under a **Publish** menu).

A few fields are marked "must match exact words in heading". These control
which word or phrase in a heading is shown in colour. If you change the
heading text, update that field to match the new wording exactly, or the
colour highlight will disappear.

**Do not** change field names or delete a whole section. Only edit the text
inside the fields, since removing a section can break the page layout.

## Editing testimonials

1. Click **Testimonials** in the left-hand list.
2. To edit one, click it, change the name, role, company, quote or logo, and
   click **Publish**.
3. To add a new one, click **New Testimonials**, fill in the fields, and
   publish. The company logo is optional, so leave it blank if you do not
   have one.
4. To remove one, open it and use the delete option (usually a bin icon or
   in a menu at the top of the entry).

The testimonials section on the homepage only appears once at least one
testimonial exists, so adding your first one will make the section appear.

## Uploading or replacing an image

Wherever you see an image field (a testimonial logo, a blog cover image, the
founder photo on the About page), click it to either:

- **Upload** a new image from your computer, or
- Choose an image already uploaded to the site.

Use reasonably sized photos (roughly under 2MB) so the site stays fast.
Landscape (wider than tall) images work best for blog cover images.

## Writing and publishing a blog post or case study

1. Click **Blog & Case Studies** in the left-hand list.
2. Click **New Blog & Case Studies**.
3. Fill in:
   - **Title**: the post headline.
   - **Date**: used for sorting and the date shown on the post.
   - **Category**: choose Blog or Case study.
   - **Cover image**: the image shown on the listing page and at the top
     of the post.
   - **Excerpt**: a short one or two sentence summary, shown on the
     listing page.
   - **Tags** (optional): short topic labels.
   - **Body**: the full post. Use the toolbar for headings, bold, links,
     lists, quotes and images, the same way you would in a word processor.
4. Leave **Draft** switched off to publish, or switch it on to save your
   work without it appearing on the live site yet.
5. Click **Publish**.

Your new post will appear on `/insights`, newest first, and at its own web
address automatically generated from the title.

## What happens after you click Publish

Publishing saves your change to the website's GitHub repository, which
automatically triggers Cloudflare Pages to rebuild and redeploy the site.
This takes about a minute. Refresh the live page after a minute or two to
see your change.

If a change does not appear after a few minutes, check the **Deployments**
tab in the Cloudflare Pages dashboard for a failed build, and contact your
developer with a screenshot if you see a red/failed status.
