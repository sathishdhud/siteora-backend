const supabase = require('../supabaseClient');

exports.createAuthor = async (req, res) => {
  const { data, error } = await supabase.from('authors').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllAuthors = async (req, res) => {
  const { data, error } = await supabase.from('authors').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getAuthorById = async (req, res) => {
  const { data, error } = await supabase.from('authors').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateAuthor = async (req, res) => {
  const { data, error } = await supabase.from('authors').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteAuthor = async (req, res) => {
  const { error } = await supabase.from('authors').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 