import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Add 5 pre-existing poems to the database
  const poems = [
    { title: 'Hope', content: 'Hope is the thing with feathers that perches in the soul...' },
    { title: 'Dreams', content: 'Hold fast to dreams, for when dreams go, life is a barren field...' },
    { title: 'Courage', content: 'It takes courage to grow up and become who you really are.' },
    { title: 'Peace', content: 'Peace comes from within. Do not seek it without.' },
    { title: 'Strength', content: 'Strength does not come from physical capacity. It comes from an indomitable will.' }
  ];

  for (const poem of poems) {
    await prisma.poem.create({
      data: poem,
    });
  }

  console.log('Poems seeded successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
