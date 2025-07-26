const supabase = require('../supabaseClient');

exports.createTeamMember = async (req, res) => {
  const { data, error } = await supabase.from('team_members').insert([req.body]).single();
  if (error) return res.status(400).json({ error: error.message });
  res.status(201).json(data);
};

exports.getAllTeamMembers = async (req, res) => {
  const { data, error } = await supabase.from('team_members').select('*');
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.getTeamMemberById = async (req, res) => {
  const { data, error } = await supabase.from('team_members').select('*').eq('id', req.params.id).single();
  if (error) return res.status(404).json({ error: error.message });
  res.json(data);
};

exports.updateTeamMember = async (req, res) => {
  const { data, error } = await supabase.from('team_members').update(req.body).eq('id', req.params.id).single();
  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
};

exports.deleteTeamMember = async (req, res) => {
  const { error } = await supabase.from('team_members').delete().eq('id', req.params.id);
  if (error) return res.status(400).json({ error: error.message });
  res.status(204).send();
}; 