---
name: nano-banana-prompter
description: Generates high-fidelity, texture-focused image generation prompts in the "Nano Banana" style based on a reference image.
---

# Nano Banana Prompter

This skill analyzes a reference image (or a detailed description of one) and generates a structured, high-density prompt suitable for high-quality image generation models.

## Prompt Style Characteristics
The "Nano Banana" style is defined by:
-   **Structured Layout**: Starts with a shot type, followed by categorical breakdowns (e.g., Outfit, Body, Lighting), and ends with Aesthetic/Mood.
-   **Texture & Physics Focus**: deeply descriptive about materials ("ribbed knit", "liquid fabric look"), how light interacts with them ("dappled indoor light", "soft highlights on satin"), and physical interactions ("pooling fabric", "adhering to skin").
-   **"Perfect Imperfection"**: Mentions realistic details like "natural skin imperfections", "individual hair strands", "industrial grime", or "condensation droplets".
-   **Linguistic Pattern**: Dense, comma-separated lists of specific adjectives and nouns. objective tone but evocative content. No flowery prose; just descriptive data points.

## Instructions

1.  **Analyze the Input**: Look at the reference image or read the description provided by the user. Identify the key subject, clothing/objects, environment, lighting, and mood.
2.  **Draft the Prompt**: Construct the prompt using the following sections. If a section isn't relevant, omit it, but maintain the density of the others.

    *   **Header**: [Shot Type] + [Subject/Action]
    *   **[Category 1 (e.g., Top/Vehicle/Face)]**: [Detailed description of material, texture, fit, and specific details]
    *   **[Category 2 (e.g., Bottoms/Outfit/Hair)]**: [Detailed description focusing on fabric physics, light interaction, and color]
    *   **[Category 3 (e.g., Accessories/Hand/Drink)]**: [Specific items, their material properties, and how they are held/placed]
    *   **Body/Skin/Condition**: [Details on skin texture, tone, imperfections, or object condition (e.g., "clean paint")]
    *   **Lighting**: [Specific lighting setup, direction, quality (soft/hard), and interaction with materials]
    *   **Aesthetic/Mood**: [Keywords describing the vibe, color palette, and photographic style]

3.  **Refine**: Ensure the language is punchy and comma-separated. Remove any "The image shows..." phrases. It should read like a raw stream of high-fidelity metadata.

## Examples

**Example 1 (Fashion/Portrait):**
> High-angle close-up torso shot, sitting position, focus on fabric interplay. Top: cream/off-white ribbed knit long sleeve, lettuce-edge hem (ruffles) on cuffs and waist, semi-sheer texture, visible vertical ribbing, soft cotton yarn. Bottoms: high-shine silver/pearl satin trousers, liquid fabric look, deep chaotic wrinkles, pooling fabric around legs, light catching folds, shimmering texture. Accessories: thin gold chain necklace with oval pendant, large chunky cream resin bangle on wrist, silver rings. Body: collarbone definition, tanned skin tone, natural skin imperfections, hands resting on lap, relaxed fingers, manicured nails. Lighting: dappled indoor light, soft highlights on satin, diffused shadows in knitwear grooves. Aesthetic: fashion detail shot, textural contrast (matte vs glossy), soft dreamy vibe, slight motion blur on hands, creamy color palette, muted tones, intimate perspective, unposed snapshot, editorial crop, authentic fabric physics.

**Example 2 (Street/Automotive):**
> Candid full-body street photography, urban industrial backdrop. Vehicle: dark Midnight Blue vintage Porsche 911 (964), rear three-quarter view, wide rear fender flares, silver alloy wheels (Cup style), red brake caliper hint. Condition: clean paint, dry surface, no rain droplets. Action: woman entering driver's side door, body turned away from camera, motion blur on hands. Outfit: white super loose-fitting trousers, white long-sleeve top. Accessory focal point: massive beige shearling/faux-fur tote bag slung over shoulder, distinct fuzzy wool texture, soft voluminous shape contrasting with hard car metal. Background: grey corrugated metal roller shutter door, horizontal slat lines, industrial grime, concrete floor with oil stains, dry asphalt street. Lighting: flat overcast daylight, neutral white balance, raw unpolished composition. Mood: everyday luxury, "caught off guard", gritty city texture, muted color palette, casual cool.
