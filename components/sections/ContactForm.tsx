"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Fehler beim Senden der Nachricht');
      }

      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      const errorMessage = error instanceof Error ? error.message : 'Fehler beim Senden der Nachricht. Bitte versuche es später erneut.';
      alert(errorMessage);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="space-y-6 mb-12"
    >
      <div>
        <label htmlFor="name" className="block caption mb-2 text-text-secondary">
          Name
        </label>
        <motion.input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          onFocus={() => setFocusedField("name")}
          onBlur={() => setFocusedField(null)}
          required
          className="input"
          placeholder="Dein Name"
          whileFocus={{}}
          transition={{ duration: 0.2 }}
        />
        {focusedField === "name" && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-0.5 bg-text-primary mt-1"
          />
        )}
      </div>

      <div>
        <label htmlFor="email" className="block caption mb-2 text-text-secondary">
          E-Mail
        </label>
        <motion.input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          onFocus={() => setFocusedField("email")}
          onBlur={() => setFocusedField(null)}
          required
          className="input"
          placeholder="deine@email.com"
          whileFocus={{}}
          transition={{ duration: 0.2 }}
        />
        {focusedField === "email" && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-0.5 bg-text-primary mt-1"
          />
        )}
      </div>

      <div>
        <label htmlFor="message" className="block caption mb-2 text-text-secondary">
          Nachricht
        </label>
        <motion.textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          required
          rows={6}
          className="input resize-none"
          placeholder="Deine Nachricht..."
          whileFocus={{}}
          transition={{ duration: 0.2 }}
        />
        {focusedField === "message" && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="h-0.5 bg-text-primary mt-1"
          />
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting || submitted}
        whileHover={{}}
        whileTap={{ scale: 0.99 }}
        className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitted ? "Gesendet! ✓" : isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
      </motion.button>
    </motion.form>
  );
}
