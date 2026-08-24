import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/** A short line of copy where one phrase renders in the accent colour.
 *  `accentPhrase` must be an exact substring of `heading`. */
const accentHeading = z.object({
  heading: z.string(),
  accentPhrase: z.string(),
});

const homePage = defineCollection({
  loader: glob({ pattern: 'home.yaml', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      headlineLine1: z.string(),
      headlineLead: z.string(),
      headlineAccentA: z.string(),
      headlineAccentB: z.string(),
      body: z.string(),
      primaryCtaLabel: z.string(),
      secondaryCtaLabel: z.string(),
      trustLeft: z.string(),
      trustRight: z.string(),
    }),
    problem: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      accentPhraseA: z.string(),
      accentPhraseB: z.string(),
      intro: z.string(),
      items: z.array(z.object({ n: z.string(), a: z.string(), b: z.string() })),
      closing: z.string(),
    }),
    howWeHelp: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      panelsLabel: z.string(),
      reliabilityTitle: z.string(),
      reliabilityBody: z.string(),
      reachTitle: z.string(),
      reachBody: z.string(),
      automationTitle: z.string(),
      automationBody: z.string(),
    }),
    marquee: z.object({
      plainWords: z.string(),
      accentWord: z.string(),
    }),
    howItWorks: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      steps: z.array(z.object({ n: z.string(), title: z.string(), body: z.string() })),
    }),
    architecture: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      cards: z.array(
        z.object({ n: z.string(), title: z.string(), body: z.string() }),
      ),
    }),
    industries: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      items: z.array(
        z.object({ n: z.string(), label: z.string(), icon: z.string() }),
      ),
    }),
    closingCta: z.object({
      ...accentHeading.shape,
      body: z.string(),
      ctaLabel: z.string(),
    }),
  }),
});

const servicesPage = defineCollection({
  loader: glob({ pattern: 'services.yaml', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      body: z.string(),
      primaryCtaLabel: z.string(),
      secondaryCtaLabel: z.string(),
    }),
    services: z.array(
      z.object({
        n: z.string(),
        icon: z.string(),
        title: z.string(),
        promise: z.string(),
        body: z.string(),
        span: z.string(),
      }),
    ),
    marquee: z.object({
      beforeAccent: z.string(),
      accentWord: z.string(),
      afterAccent: z.string(),
    }),
    stack: z.object({
      eyebrow: z.string(),
      heading: z.string(),
      accentPhrase: z.string(),
      body: z.string(),
      groups: z.array(
        z.object({ label: z.string(), items: z.array(z.string()) }),
      ),
    }),
    closingCta: z.object({
      ...accentHeading.shape,
      body: z.string(),
      ctaLabel: z.string(),
    }),
  }),
});

const aboutPage = defineCollection({
  loader: glob({ pattern: 'about.yaml', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      statusLabel: z.string(),
      teamsLabel: z.string(),
    }),
    story: z.object({
      lead: z.string(),
      quotePlain: z.string(),
      quoteAccent: z.string(),
      paragraphs: z.array(z.string()),
    }),
    marquee: z.object({
      plainWords: z.string(),
      accentWord: z.string(),
    }),
    howWeThink: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      principles: z.array(
        z.object({ n: z.string(), title: z.string(), body: z.string() }),
      ),
    }),
    founderNote: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      paragraphs: z.array(z.string()),
      name: z.string(),
      title: z.string(),
      linkedinUrl: z.string().url(),
      photo: z.string(),
    }),
    closingCta: z.object({
      ...accentHeading.shape,
      body: z.string(),
      ctaLabel: z.string(),
    }),
  }),
});

const whyStackLaunchPage = defineCollection({
  loader: glob({ pattern: 'why-stacklaunch.yaml', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      body: z.string(),
    }),
    comparison: z.object({
      options: z.array(
        z.object({
          n: z.string(),
          title: z.string(),
          summary: z.string(),
          highlighted: z.boolean(),
          badgeLabel: z.string().optional(),
          rows: z.array(z.object({ k: z.string(), v: z.string() })),
        }),
      ),
    }),
    reasons: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      countLabel: z.string(),
      items: z.array(
        z.object({ n: z.string(), title: z.string(), body: z.string() }),
      ),
    }),
    closingCta: z.object({
      ...accentHeading.shape,
      body: z.string(),
      ctaLabel: z.string(),
    }),
  }),
});

const contactPage = defineCollection({
  loader: glob({ pattern: 'contact.yaml', base: './src/content/pages' }),
  schema: z.object({
    hero: z.object({
      eyebrow: z.string(),
      ...accentHeading.shape,
      body: z.string(),
    }),
    expect: z.array(
      z.object({ n: z.string(), title: z.string(), body: z.string() }),
    ),
    form: z.object({
      namePlaceholder: z.string(),
      emailPlaceholder: z.string(),
      companyPlaceholder: z.string(),
      detailPlaceholder: z.string(),
      submitLabel: z.string(),
      confirmationLabel: z.string(),
      errorLabel: z.string(),
      footnote: z.string(),
    }),
    info: z.object({
      email: z.string().email(),
      offices: z.array(
        z.object({
          label: z.string(),
          addressLines: z.array(z.string()),
          phone: z.string(),
          phoneHref: z.string(),
        }),
      ),
      availabilityLabel: z.string(),
    }),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    company: z.string(),
    quote: z.string(),
    logo: z.string().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum(['blog', 'case-study']),
    coverImage: z.string(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  homePage,
  servicesPage,
  aboutPage,
  whyStackLaunchPage,
  contactPage,
  testimonials,
  posts,
};
