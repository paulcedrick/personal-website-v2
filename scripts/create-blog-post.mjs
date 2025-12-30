import fs from "fs";
import path from "path";

const title = process.argv[2];

if (!title) {
  console.error("Error: Please provide a title");
  console.error('Usage: pnpm blog:create "My Blog Post Title"');
  process.exit(1);
}

// Generate slug from title
const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);

// Check if file already exists
if (fs.existsSync(filePath)) {
  console.error(`Error: File already exists: ${filePath}`);
  process.exit(1);
}

// Generate today's date in ISO format
const date = new Date().toISOString().split("T")[0];

const content = `---
title: "${title}"
description: ""
date: "${date}"
published: false
tags: []
---

`;

fs.writeFileSync(filePath, content);
console.log(`Created: ${filePath}`);
