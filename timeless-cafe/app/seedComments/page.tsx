import seedComment from "@/utils/seed-comment";

export default async function SeedCommentPage() {
  await seedComment();

  return <div>Comments seeded successfully!</div>;
}
