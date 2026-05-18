window.VEO_CONFIG = {
  APP_NAME: "VeoStudio AI",
  APPS_SCRIPT_URL: "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE",
  STRIPE: {
    starter: "PASTE_STARTER_STRIPE_PAYMENT_LINK",
    creator: "PASTE_CREATOR_STRIPE_PAYMENT_LINK",
    pro: "PASTE_PRO_STRIPE_PAYMENT_LINK",
    enterprise: "PASTE_ENTERPRISE_STRIPE_OR_CONTACT_LINK",
    reseller: "PASTE_RESELLER_LICENSE_STRIPE_LINK"
  },
  LIMITS: {
    MAX_VIDEO_MINUTES: 120
  },
  PLANS: {
    free: { label: "Free", credits: 5, exports: 2, maxMinutes: 5 },
    starter: { label: "Starter", credits: 50, exports: 20, maxMinutes: 30 },
    creator: { label: "Creator", credits: 200, exports: 100, maxMinutes: 60 },
    pro: { label: "Pro Studio", credits: 1000, exports: 500, maxMinutes: 120 },
    enterprise: { label: "Enterprise", credits: 9999, exports: 9999, maxMinutes: 120 }
  },
  AFFILIATE_RATE: 0.30,
  SAMPLE_PROMPTS: [
    {
      name: "EDM Festival",
      prompt: "Create a high-energy EDM festival music video with neon lasers, massive crowd silhouettes, DJ booth shots, electric blue light beams, fast beat-synced cuts, smoke bursts, and glowing lyric overlays."
    },
    {
      name: "Hip Hop Urban",
      prompt: "Create a luxury hip hop urban music video with rainy city streets, graffiti walls, chrome cars, night skyline, confident artist closeups, handheld camera motion, and purple-blue neon reflections."
    },
    {
      name: "Pop Glam",
      prompt: "Create a pop glam music video with high-fashion wardrobe, glossy studio lights, pink neon accents, bright white backgrounds, slow-motion beauty shots, and editorial luxury camera movement."
    },
    {
      name: "Cinematic Emotional",
      prompt: "Create a cinematic emotional music video with slow-motion landscapes, golden hour lighting, dramatic closeups, soft film grain, storytelling scenes, and smooth orchestral pacing."
    },
    {
      name: "Retro Synthwave",
      prompt: "Create a retro synthwave music video with an 80s neon grid, sunset highway, vintage sports car, chrome titles, purple sky, electric blue highlights, and nostalgic beat-synced transitions."
    },
    {
      name: "AI Lyric Video",
      prompt: "Create a premium lyric video with bright white kinetic typography, glassmorphism lyric cards, cyan waveform animations, deep purple background, and smooth beat-popping word transitions."
    }
  ]
};
