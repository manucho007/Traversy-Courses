const members = require('../../Members');
const express = require('express');
const uuid = require('uuid');
const router = express.Router();
// Create a Rest Endpoint that return JSON with all members
router.get('/', (req, res) => res.json(members));

// Get one member
router.get('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No member with the id ${req.params.id}` });
  }
});

// Create a member
router.post('/', (req, res) => {
  //   res.send(req.body);
  const newMember = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: 'Active'
  };
  if (!newMember.name || !newMember.email) {
    return res.status(400).json({ msg: 'Include name and email' });
  }
  members.push(newMember);
  //   res.json(members);
  res.redirect('/');
});

// Update member
router.put('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    const updMember = req.body;
    members.forEach(member => {
      if (member.id === parseInt(req.params.id)) {
        member.name = updMember.name ? updMember.name : member.name;
        member.email = updMember.email ? updMember.email : member.email;

        res.json({ msg: 'Member updated', member });
      }
    });
  } else {
    res.status(400).json({ msg: `No member with the id ${req.params.id}` });
  }
});

// Delete a member
router.delete('/:id', (req, res) => {
  const found = members.some(member => member.id === parseInt(req.params.id));
  if (found) {
    res.json({
      msg: 'Member deleted',
      members: members.filter(member => member.id !== parseInt(req.params.id))
    });
  } else {
    res.status(400).json({ msg: `No member with the id ${req.params.id}` });
  }
});
module.exports = router;
