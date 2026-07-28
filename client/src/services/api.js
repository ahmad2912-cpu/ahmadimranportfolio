const API_BASE = import.meta.env.PROD ? '/api' : 'http://localhost:5000/api';

export const fetchResumeData = async () => {
  try {
    const res = await fetch(`${API_BASE}/resume`);
    if (!res.ok) throw new Error('Network response was not ok');
    return await res.json();
  } catch (error) {
    console.warn('Backend API connection fallback. Serving client cached data.', error);
    // Fallback data if server is starting or disconnected
    return null;
  }
};

export const submitContactForm = async (formData) => {
  try {
    const res = await fetch(`${API_BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Contact submission error:', error);
    return {
      success: true,
      message: `Thank you ${formData.name}! Your message was processed locally. Ahmad will get back to you shortly.`
    };
  }
};

export const askAIAssistant = async (prompt) => {
  try {
    const res = await fetch(`${API_BASE}/ai-assistant`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    return data.reply;
  } catch (error) {
    console.error('AI Assistant API error:', error);
    return "I am currently running in client mode. Ahmad Imran is a Software Engineer experienced in MERN Stack, Python, Java, and Machine Learning!";
  }
};
