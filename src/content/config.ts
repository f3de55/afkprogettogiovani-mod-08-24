// Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// Define a `type` and `schema` for each collection
const eventsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        text: z.string(),
        date: z.date(),
        image: z.string()
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    events: eventsCollection,
};
