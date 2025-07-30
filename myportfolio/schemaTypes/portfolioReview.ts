export default {
  name: "portfolioReview",
  title: "Portfolio Review",
  type: "document",
  fields: [
    {
      name: "userName",
      title: "User Name",
      type: "string",
      validation: (Rule: any) => Rule.required().min(2).max(50),
    },
    {
      name: "userEmail",
      title: "User Email",
      type: "string",
      validation: (Rule: any) => Rule.required().email(),
    },
    {
      name: "rating",
      title: "Rating",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: "comment",
      title: "Comment",
      type: "text",
      validation: (Rule: any) => Rule.required().min(10).max(500),
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      initialValue: false,
      validation: (Rule: any) => Rule.required(),
    },
  ],
};