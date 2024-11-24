import prisma from "@/utils/db"; // Ensure this points to your Prisma client instance

export default async function seedPoems() {
  const poems = [
    {
      title: "Ode to Nature",
      content: `The leaves whisper secrets of the forest untamed, 
                As the rivers hum their ancient song, 
                The mountains stand tall, proud and silent, 
                Watching over the earth for so long. 
                In the wild, nature's beauty unfolds, 
                A tapestry of colors, bright and bold, 
                With every gust of wind and every ray of light, 
                Nature speaks, in silence, its endless might.`,
      author: "Emily Green",
    },
    {
      title: "Journey of the Stars",
      content: `Through the cosmos vast and wide, 
                Dreams take flight, like birds they glide, 
                Across the blackened skies they soar, 
                Seeking answers to mysteries galore. 
                Stars light the path of the dreamer's heart, 
                Leading them to places far apart, 
                Where the heavens whisper stories untold, 
                Of forgotten worlds and dreams of gold.`,
      author: "Alexander Moon",
    },
    {
      title: "Reflections of Time",
      content: `Mirror of life, reflecting moments gone by, 
                Time slips away, like a soft sigh. 
                We live, we love, we laugh, we cry, 
                But in the end, we all must say goodbye. 
                The moments we hold, like sand in our hand, 
                Slowly fade, like the waves on the sand. 
                Yet in the heart, memories remain, 
                Reflections of time, forever a stain.`,
      author: "Lara Stone",
    },
    {
      title: "Heart of the Forest",
      content: `In the green embrace of ancient trees, 
                The forest breathes, alive with peace. 
                With every leaf that flutters down, 
                A story is told, of a world renowned. 
                The birds sing songs of distant lands, 
                The ground hums softly beneath our hands. 
                Here in the heart of the forest deep, 
                Secrets are buried, and dreams still sleep.`,
      author: "Sylvia Wood",
    },
    {
      title: "The River’s Song",
      content: `Flowing gently, steady and strong, 
                The river hums its ageless song. 
                It winds through valleys, over stones, 
                Carving paths, as it silently groans. 
                The water's rhythm, the earth’s heartbeat, 
                A melody endless, both bitter and sweet. 
                The river's song will never end, 
                A constant companion, a lifelong friend.`,
      author: "Ryan Brook",
    },
    {
      title: "Whispers of the Sea",
      content: `The sea whispers secrets on the shore, 
                Of ships and sailors, of ancient lore. 
                The waves crash fiercely, then retreat, 
                Only to rise again, steady and sweet. 
                Beneath the surface, life thrives untold, 
                In the depths of the ocean, the stories unfold. 
                The sea is a mystery, vast and wide, 
                With whispers of adventure that forever abide.`,
      author: "Ocean Blue",
    },
    {
      title: "The Dance of Autumn",
      content: `The trees begin to shed their leaves, 
                In the cool embrace of autumn’s breeze. 
                The golden hues paint the sky, 
                As the earth whispers its goodbye. 
                The wind carries the scent of change, 
                While the leaves in the air gently arrange. 
                Autumn dances, both wild and free, 
                A season of transition for you and me.`,
      author: "Autumn Ray",
    },
    {
      title: "The Song of the Mountains",
      content: `The mountains stand tall, reaching the skies, 
                With snow-capped peaks that touch the sun’s rise. 
                In their shadows, the world feels small, 
                Yet within them, a strength that echoes for all. 
                The wind through the valleys sings a tune, 
                Of ages gone by and the rise of the moon. 
                The mountains are silent, but they speak in the breeze, 
                Telling tales of the earth and the vast, ancient seas.`,
      author: "Oliver Stone",
    },
    {
      title: "The Light of the Moon",
      content: `Beneath the moon's soft, silver glow, 
                The world lies still, with hearts aglow. 
                The stars above, so bright and clear, 
                Whispers of dreams, of love, of fear. 
                The moon watches over, calm and wise, 
                Reflecting all the wonder in our eyes. 
                In the stillness of night, it speaks without sound, 
                A gentle reminder that peace can be found.`,
      author: "Luna Night",
    },
    {
      title: "The Silent Garden",
      content: `In the silent garden, flowers bloom, 
                Unnoticed by the world, in the quiet room. 
                Their colors speak in hues so bright, 
                Painting the air with pure delight. 
                The trees stand witness, proud and still, 
                Sheltering the garden from the winds' chill. 
                In the silence, there is life, there is song, 
                A quiet beauty that all belongs.`,
      author: "Rose Williams",
    },
    {
      title: "The Dreamer’s Path",
      content: `A dreamer walks a winding road, 
                With visions in their heart, and stories untold. 
                They wander through the night and day, 
                Searching for truths along the way. 
                The world may turn, the seasons change, 
                But the dreamer's heart stays true, never strange. 
                For they know that dreams are what we seek, 
                A path to follow, though often bleak.`,
      author: "Eliot Blue",
    },
    {
      title: "The Echo of the Forest",
      content: `The forest speaks in whispers deep, 
                Of secrets it has sworn to keep. 
                The trees stand tall, their branches wide, 
                Sheltering all from the world outside. 
                Beneath the roots, the earth does sing, 
                A melody of ancient things. 
                The echo of the forest calls to me, 
                A timeless rhythm, forever free.`,
      author: "Isla Green",
    },
    {
      title: "The Flame of Hope",
      content: `A flame burns bright in the darkest night, 
                A beacon of hope, a guiding light. 
                Though winds may blow and storms may rage, 
                The flame stands firm, it will not age. 
                In its warmth, we find our strength, 
                To carry on, to go the length. 
                The flame of hope, it will not die, 
                It burns within us, reaching the sky.`,
      author: "Aidan Hope",
    },
    {
      title: "Echoes of Yesterday",
      content: `The echoes of yesterday call to me, 
                Of moments lost and memories free. 
                We walk the path, but time slips by, 
                Like whispers of wind, like the fading sky. 
                Yet in the heart, the echoes remain, 
                A reminder of joy, and of pain. 
                Yesterday's whispers, they shape who we are, 
                Guiding us forward, though we're never far.`,
      author: "Mia Sands",
    },
    {
      title: "The Wings of Freedom",
      content: `The wings of freedom stretch wide and strong, 
                Taking us places where we belong. 
                Through skies of blue, through clouds of gray, 
                We soar above, finding our way. 
                The world below, so vast and deep, 
                Holds the dreams we long to keep. 
                The wings of freedom are the soul’s flight, 
                A journey of hope, into the light.`,
      author: "Sierra Sky",
    },
  ];
  
  for (const poem of poems) {
    await prisma.poem.create({
      data: poem,
    });
  }
  
  console.log("Poems seeded successfully!");
  

}
