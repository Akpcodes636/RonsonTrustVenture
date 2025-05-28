// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// lib/live.ts (or wherever your live config is)
import { defineLive } from "next-sanity";
import { createClient } from '@sanity/client'

// Create client directly in defineLive to avoid type conflicts
export const { sanityFetch, SanityLive } = defineLive({
  client: createClient({
    projectId: 'j911shvx',
    dataset: 'production', // Your dataset name
    apiVersion: 'vX',
    useCdn: false, // Important for live content
  })
});