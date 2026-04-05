"use client";
import React, { useState } from 'react';

const FormContato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/contato/api/send-message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Mensagem enviada com sucesso!');
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' });
      } else {
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="surface-card p-8">
      <h3 className="text-2xl font-semibold text-black-deep mb-8 font-montserrat-alternates">Envie sua Mensagem</h3>
      <div className="mb-6">
        <label htmlFor="nome" className="block text-gray-medium mb-3 font-medium">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          className="w-full"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-medium mb-3 font-medium">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="telefone" className="block text-gray-medium mb-3 font-medium">Telefone</label>
        <input
          type="tel"
          id="telefone"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          className="w-full"
        />
      </div>
      <div className="mb-8">
        <label htmlFor="mensagem" className="block text-gray-medium mb-3 font-medium">Mensagem</label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          rows="5"
          className="w-full"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full btn-primary"
      >
        Enviar Mensagem
      </button>
    </form>
  );
};

export default FormContato;