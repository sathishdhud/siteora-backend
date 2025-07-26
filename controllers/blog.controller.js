const supabase = require('../supabaseClient');

exports.createBlog = async (req, res) => {
  const { data, error } = await supabase.from('blogs').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllBlogs = async (req, res) => {
  const { data, error } = await supabase.from('blogs').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getBlogById = async (req, res) => {
  const { data, error } = await supabase.from('blogs').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateBlog = async (req, res) => {
  const { data, error } = await supabase.from('blogs').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteBlog = async (req, res) => {
  const { error } = await supabase.from('blogs').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 