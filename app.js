import express from "express";

const app = express();
const port = 3000;

// Serve static files
app.use(express.static("public"));

// Middleware to parse JSON bodies
app.use(express.json());

// Home page route
app.get("/", (req, res) => {
  res.render("index.ejs");
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
