import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Input from '../ui/Input';
import Textarea from '../ui/TextArea';
import Button from '../ui/Button';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    setStatus('sending');
    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <Input
        name="name"
        value={formData.name}
        onChange={handleChange}
        label="Your Name"
        placeholder="John Doe"
        required
      />

      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        label="Your Email"
        placeholder="john@example.com"
        required
      />

      <Input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        label="Subject"
        placeholder="Project Inquiry"
        required
      />

      <Textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        label="Message"
        placeholder="Tell me about your project..."
        rows={5}
        required
      />

      <Button
        onClick={handleSubmit}
        disabled={status === 'sending'}
        variant="primary"
        size="lg"
        className="w-full"
      >
        {status === 'sending' ? (
          'Sending...'
        ) : status === 'success' ? (
          'Message Sent!'
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </Button>

      {status === 'success' && (
        <p className="text-green-400 text-center text-sm">
          Thank you! I'll get back to you soon.
        </p>
      )}
    </div>
  );
};

export default ContactForm;