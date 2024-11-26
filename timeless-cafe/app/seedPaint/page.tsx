import seedPoems from "@/utils/seed-blog"; // Adjust the import path if necessary
import seedPaintings from "@/utils/seed-paintings";

export default async function SeedPaintingPage() {
  await seedPaintings();

  return <div>Poems seeded successfully!</div>;
}
