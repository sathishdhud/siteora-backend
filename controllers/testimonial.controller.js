const supabase = require('../supabaseClient');

exports.createTestimonial = async (req, res) => {
  const { data, error } = await supabase.from('testimonials').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllTestimonials = async (req, res) => {
  const { data, error } = await supabase.from('testimonials').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getTestimonialById = async (req, res) => {
  const { data, error } = await supabase.from('testimonials').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateTestimonial = async (req, res) => {
  const { data, error } = await supabase.from('testimonials').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteTestimonial = async (req, res) => {
  const { error } = await supabase.from('testimonials').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 