const supabase = require('../supabaseClient');

exports.createSubService = async (req, res) => {
  const { data, error } = await supabase.from('sub_services').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllSubServices = async (req, res) => {
  const { data, error } = await supabase.from('sub_services').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getSubServiceById = async (req, res) => {
  const { data, error } = await supabase.from('sub_services').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateSubService = async (req, res) => {
  const { data, error } = await supabase.from('sub_services').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteSubService = async (req, res) => {
  const { error } = await supabase.from('sub_services').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 