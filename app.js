/*
 * Ocean-Minded Application Script
 *
 * Copyright © Vladislav Kazantsev
 * All rights reserved.
 * This code is the intellectual property of Vladislav Kazantsev.
 * You are welcome to clone the related repository and use the code for exploratory purposes.
 * However, unauthorized reproduction, modification, or redistribution of this code (including cloning of related repository or altering it for activities beyond exploratory use) is strictly prohibited.
 * Code snippets may be shared only when the original author is explicitly credited and a direct link to the original source of the code is provided alongside the code snippet.
 * Sharing the link to the file is permitted, except when directed toward retrieval purposes.
 * Any form of interaction with this file is strictly prohibited when facilitated by the code, except when such interaction is for discussion or exchange purposes with others.
 * This copyright notice applies globally.
 * For inquiries about collaboration, usage outside exploratory purposes, or permissions, please contact: hypervisor7@pm.me
 */

import express from "express";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import pkg from "twig";

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { twig } = pkg;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Home page route
app.get("/", (req, res) => {
  const brandTitlePath = path.join(
    __dirname,
    "views",
    "partials",
    "brand-title.twig"
  );
  const brandTitle = fs.readFileSync(brandTitlePath, "utf8");

  const rendered = twig({ data: brandTitle }).render({
    title: "Ocean-Minded",
    subtitle: "Your Way to Beautiful Journeys",
    imageClass: "logo img-fluid",
    imageSrc: "images/logo.jpg",
    imageAlt: "The Ocean-Minded Logo Image",
  });

  res.render("index.ejs", { brandTitle: rendered });
});

// About page route
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

// Services page route
app.get("/services", (req, res) => {
  res.render("services.ejs");
});

// Team page route
app.get("/team", (req, res) => {
  res.render("team.ejs");
});

// Contact page route
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Caribbean Beauty page route
app.get("/destinations/caribbean", (req, res) => {
  res.render("destinations/caribbean.ejs");
});

// Pacific Northwest page route
app.get("/destinations/pacific-northwest", (req, res) => {
  res.render("destinations/pacific-northwest.ejs");
});

// Mediterranean Sea page route
app.get("/destinations/mediterranean", (req, res) => {
  res.render("destinations/mediterranean.ejs");
});

// Hawaii page route
app.get("/destinations/hawaii", (req, res) => {
  res.render("destinations/hawaii.ejs");
});

// Subscription route
app.post("/subscribe", (req, res) => {
  const { email } = req.body;
  console.log(`New subscription: ${email}`);
  res.status(200).send("Subscription successful");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
