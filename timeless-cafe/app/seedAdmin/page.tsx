import seedAdmin from "@/utils/seed-admin"; // Adjust path as necessary

export default async function SeedAdminPage() {
  await seedAdmin();  // Seed admin user
  return <div>Admin user seeded successfully!</div>;
}
