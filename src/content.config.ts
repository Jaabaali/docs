import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema({
			extend: z.object({
				// Every page needs a description: it becomes the search-result snippet,
				// the social preview text and the summary AI assistants quote.
				description: z
					.string({ error: 'Add a `description` to the frontmatter (50–160 characters).' })
					.min(50, 'The `description` should be at least 50 characters.')
					.max(160, 'Keep the `description` under 160 characters so search engines show all of it.'),
				// Set `faq: true` on pages made of questions. Every `###` heading that ends with "?"
				// and the text under it is published as FAQ structured data.
				faq: z.boolean().optional(),
			}),
		}),
	}),
};
