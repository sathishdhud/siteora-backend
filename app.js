require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Use CORS before any routes
app.use(cors());

// ✅ Parse JSON bodies
app.use(express.json());

// ✅ Define API routes
app.use('/api/services', require('./routes/service.routes'));
app.use('/api/sub-services', require('./routes/subService.routes'));
app.use('/api/projects', require('./routes/project.routes'));
app.use('/api/project-services', require('./routes/projectService.routes'));
app.use('/api/project-media', require('./routes/projectMedia.routes'));
app.use('/api/categories', require('./routes/category.routes'));
app.use('/api/authors', require('./routes/author.routes'));
app.use('/api/blogs', require('./routes/blog.routes'));
app.use('/api/blog-tags', require('./routes/blogTag.routes'));
app.use('/api/team-members', require('./routes/teamMember.routes'));
app.use('/api/testimonials', require('./routes/testimonial.routes'));

// ✅ Root route (optional)
app.get('/', (req, res) => {
  res.send('SiteOra API is running');
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
