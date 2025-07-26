const supabase = require('../supabaseClient');

exports.createProject = async (req, res) => {
  const { data, error } = await supabase.from('projects').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllProjects = async (req, res) => {
  const { data, error } = await supabase.from('projects').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getProjectById = async (req, res) => {
  const { data, error } = await supabase.from('projects').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateProject = async (req, res) => {
  const { data, error } = await supabase.from('projects').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteProject = async (req, res) => {
  const { error } = await supabase.from('projects').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 