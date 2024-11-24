import seedPoems from "@/utils/seed-blog"; // Adjust the import path if necessary

export default async function SeedPoemsPage() {
  await seedPoems();

  return <div>Poems seeded successfully!</div>;
}
