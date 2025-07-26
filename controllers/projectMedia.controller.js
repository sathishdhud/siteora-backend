const supabase = require('../supabaseClient');

exports.createProjectMedia = async (req, res) => {
  const { data, error } = await supabase.from('project_media').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllProjectMedia = async (req, res) => {
  const { data, error } = await supabase.from('project_media').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getProjectMediaById = async (req, res) => {
  const { data, error } = await supabase.from('project_media').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateProjectMedia = async (req, res) => {
  const { data, error } = await supabase.from('project_media').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteProjectMedia = async (req, res) => {
  const { error } = await supabase.from('project_media').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 