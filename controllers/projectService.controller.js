const supabase = require('../supabaseClient');

exports.createProjectService = async (req, res) => {
  const { data, error } = await supabase.from('project_services').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllProjectServices = async (req, res) => {
  const { data, error } = await supabase.from('project_services').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getProjectServiceById = async (req, res) => {
  const { data, error } = await supabase.from('project_services').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateProjectService = async (req, res) => {
  const { data, error } = await supabase.from('project_services').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteProjectService = async (req, res) => {
  const { error } = await supabase.from('project_services').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 