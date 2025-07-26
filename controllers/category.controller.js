const supabase = require('../supabaseClient');

exports.createCategory = async (req, res) => {
  const { data, error } = await supabase.from('categories').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllCategories = async (req, res) => {
  const { data, error } = await supabase.from('categories').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getCategoryById = async (req, res) => {
  const { data, error } = await supabase.from('categories').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateCategory = async (req, res) => {
  const { data, error } = await supabase.from('categories').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteCategory = async (req, res) => {
  const { error } = await supabase.from('categories').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 