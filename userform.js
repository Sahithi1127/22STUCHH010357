import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editingUser, setEditingUser }) {
  const [formData, setFormData] = useState({ name: '', email: '', age: '' });

  useEffect(() => {
    if (editingUser) {
      setFormData(editingUser);
    } else {
      setFormData({ name: '', email: '', age: '' });
    }
  }, [editingUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(editingUser._id, formData);
    } else {
      addUser(formData);
    }
    setFormData({ name: '', email: '', age: '' });
  };

  const handleCancel = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        placeholder="Age"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <button type="submit">{editingUser ? 'Update User' : 'Add User'}</button>
      {editingUser && <button type="button" onClick={handleCancel}>Cancel</button>}
    </form>
  );
}

export default UserForm;
