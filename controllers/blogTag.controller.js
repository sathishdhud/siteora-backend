const supabase = require('../supabaseClient');

exports.createBlogTag = async (req, res) => {
  const { data, error } = await supabase.from('blog_tags').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllBlogTags = async (req, res) => {
  const { data, error } = await supabase.from('blog_tags').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getBlogTagById = async (req, res) => {
  const { data, error } = await supabase.from('blog_tags').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateBlogTag = async (req, res) => {
  const { data, error } = await supabase.from('blog_tags').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteBlogTag = async (req, res) => {
  const { error } = await supabase.from('blog_tags').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 