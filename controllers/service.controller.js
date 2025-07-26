const supabase = require('../supabaseClient');

exports.createService = async (req, res) => {
  const { data, error } = await supabase.from('services').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllServices = async (req, res) => {
  const { data, error } = await supabase.from('services').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getServiceById = async (req, res) => {
  const { data, error } = await supabase.from('services').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateService = async (req, res) => {
  const { data, error } = await supabase.from('services').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteService = async (req, res) => {
  const { error } = await supabase.from('services').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 