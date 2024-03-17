/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import mainPost from "../../../../mainPost.json";
import "@testing-library/jest-dom";
import Page from "./page";
import { processSlug } from "../../../util/slugHelper";

const DATA = {
  pages: [
    {
      uuid: "b8d0bda7-20d4-46cc-be95-4980c2909881",
      published_at: "2023-05-09T10:11:00.000Z",
      heading: "1 Week Pregnant: What to Expect During Pregnancy",
      summary:
        "It’s like you’re both pregnant and not pregnant all at the same time",
      slug: "blog/1-week-pregnant",
      locale: "en",
      featured: false,
      description: "",
      tag: {
        id: 84,
        name: "Pregnancy Week-by-Week",
      },
      header: {
        title: "When Do Babies Start Talking? A Guide for Mamas",
        description:
          "It’s like you’re both pregnant and not pregnant all at the same time",
      },
      body: "<p>There aren’t many things more exciting than your baby’s first words. It might be “mama”, it might be “dada”, or it might be something totally off-the-wall. Whatever it is, you’ll probably remember it forever. So, when do babies start talking? Well, it depends on the baby!</p>\n\n<p>Your baby’s own natural inclinations will guide the timeline for their speaking. And how much you talk to and around your little one will affect this, too. But generally, it can be anywhere from about 6 to 18 months before you hear baby’s first words (i.e. something that isn’t “blah blah blooh bah”).</p>\n\n<p>A proper conversation is some way away. But all babies do communicate from a very early age. Here, we’re mapping out the milestones you can expect on your baby’s route to their <a href='https://www.peanut-app.io/blog/baby-first-words'>first words</a>. And we’ll suggest some ways that you can help your baby along the way.</p>\n\n<p>So, when do babies talk? Let’s find out.</p>\n\n<h3>When do babies start talking?</h3>\n\n<p>So, when should babies start talking? On average, most babies say their first word by their <a href='https://www.peanut-app.io/blog/planning-baby-first-birthday'>first birthday</a>. By this point, many babies are able to say a couple of simple words and understand what they mean. But on average is only an average – and the <a href='https://www.peanut-app.io/blog/12-month-old-baby'>12-month milestone</a> isn’t true for every baby.</p>\n\n<p>Essentially, baby words can emerge any time between 6 and 18 months. In some cases, even later. Of course, before that first word, your little one will have been communicating in their own way already.</p>\n\n<p>At first, that’s through crying. But then those goo-goo-ga-gas (and other adorable sounds) will soon come tumbling out – baby talk.</p>\n\n<p>And from there, it’s not so far to real talk at all.</p>",
      related_articles: [
        {
          text: "When do babies start talking?",
          url: "https://example.com/when-do-babies-start-talking",
        },
        {
          text: "Some possible milestones to your baby’s first words",
          url: "https://example.com/milestones",
        },
        {
          text: "Pregnancy symptoms",
          url: "https://example.com/pregnancy-symptoms",
        },
      ],
      hero_image_url: "https://example.com/image.jpg",
      author: {
        name: "Tassia Agatowski",
        avatar_url: "https://example.com/author.jpg",
      },
    },
  ],
};

beforeAll(() => {
  (window as any).fetch = mockFetch(DATA);
});

function mockFetch(data: any) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    })
  );
}

// More tests can be written like these, just a demo

it("Ensures app is rendered without crashing", async () => {
  render(await Page({ params: { slug: processSlug(mainPost.slug) } }));
});

it("renders the main heading and checks it is rendered correctly", async () => {
  render(await Page({ params: { slug: processSlug(mainPost.slug) } }));
  expect(screen.getAllByText(DATA.pages[0].heading)[0]).toBeInTheDocument();
});
