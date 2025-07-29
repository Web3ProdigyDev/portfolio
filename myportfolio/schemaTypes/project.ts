import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Project Name",
      type: "string",
      description: "The title of the project (e.g., 'Portfolio Website').",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "URL-friendly identifier (e.g., 'portfolio-website').",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "A detailed description of the project.",
      validation: (Rule) => Rule.required().min(20).max(500),
    }),
    defineField({
      name: "image",
      title: "Main Image",
      type: "image",
      description: "Primary image or screenshot of the project.",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      description: "Additional images for the project (e.g., screenshots).",
      of: [{ type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "url",
      title: "Project URL",
      type: "url",
      description: "Link to the live project (e.g., 'https://example.com').",
    }),
    defineField({
      name: "sourceUrl",
      title: "Source Code URL",
      type: "url",
      description: "Link to the source code (e.g., GitHub repo).",
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      description: "Tech stack (e.g., React, Node.js).",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "dateStart",
      title: "Start Date",
      type: "date",
      description: "When the project started.",
    }),
    defineField({
      name: "dateEnd",
      title: "End Date",
      type: "date",
      description: "When the project was completed.",
    }),
    defineField({
      name: "client",
      title: "Client",
      type: "string",
      description: "Name of the client or company (if applicable).",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "reference",
      description: "The project type (e.g., Web Development).",
      to: [{ type: "projectType" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      description: "Keywords for filtering (e.g., 'frontend', 'UI/UX').",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "featured",
      title: "Featured Project",
      type: "boolean",
      description: "Mark as a highlighted project on the portfolio.",
      initialValue: false,
    }),
    defineField({
      name: "video",
      title: "Video Demo",
      type: "url",
      description: "Link to a video demo or walkthrough (e.g., YouTube).",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      description: "Your role in the project (e.g., 'Lead Developer').",
    }),
    defineField({
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      description: "Client or user feedback.",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "quote",
              title: "Quote",
              type: "text",
            }),
            defineField({
              name: "author",
              title: "Author",
              type: "string",
            }),
          ],
        },
      ],
    }),
  ],
});