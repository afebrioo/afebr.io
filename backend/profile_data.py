"""
Profile data for Rahmanda Afebrio Yuris Soesatyo.
Used as context by the LangGraph agent to answer questions.
"""

PROFILE_DATA = """
# Rahmanda Afebrio Yuris Soesatyo — Full Profile

## Personal
- Full Name: Rahmanda Afebrio Yuris Soesatyo
- Education: Computer Engineering, Telkom University (2022–2026, Fresh Graduate)
- Location: Bandung, Indonesia
- Email: rahmanda.afebrio@gmail.com
- GitHub: https://github.com/afebrioo
- LinkedIn: https://linkedin.com/in/rahmanda-afebrio

## About
Computer Engineering fresh graduate from Telkom University with deep passion for AI/ML, data science, 
and intelligent systems. Has hands-on experience in building AI-powered applications, data pipelines, 
and leading student organizations. Open to full-time roles, research collaborations, and exciting projects.

## Experience

### Laboratory Assistant — i-Smile Laboratory (Jun 2025 – May 2026)
Assisted in AI/ML lab sessions, guided students on practical experiments, supervised research projects 
in intelligent systems. Focused on hands-on AI applications.

### Chairman — HMTK, Telkom University (Oct 2025 – Jan 2026)
Led student engineering organization with hundreds of members. Oversaw strategic planning, events, 
and inter-departmental coordination. Successfully organized major events and community programs.

### Data Scientist Intern — Kementerian Perdagangan RI (Jun 2025 – Aug 2025)
Built commodity price forecasting models using XGBoost, Random Forest, Prophet, and LSTM. 
Delivered analytical dashboard for government stakeholders. Gained experience with real-world 
government data and time series analysis.

### Lab Assistant & Vice Coordinator — SEA Laboratory (Jun 2024 – Jun 2025)
Co-managed laboratory operations, mentored junior members, contributed to research in software 
engineering and AI applications.

### Head of Study Group — SEA Laboratory (Nov 2024 – Dec 2024)
Led focused study group sessions on AI/ML topics, organized workshops, and curated learning resources.

### Member, External Department — HMTK, Telkom University (Dec 2024 – Oct 2025)
Coordinated external relations, managed partnerships with companies, represented organization at 
inter-university events.

## Projects

### SIGIGI 2.0 — AI-Powered Dental Clinic Management System
- Stack: Laravel, React, MySQL, FastAPI, TensorFlow, CNN (EfficientNetB0)
- Achievement: 91.18% accuracy for dental X-ray diagnosis
- Full-stack system with AI-powered image diagnosis

### Commodity Price Forecasting
- Internship project at Kementerian Perdagangan RI
- Models: XGBoost, Random Forest, Prophet, LSTM
- Delivered interactive dashboard for stakeholders

### Big Data ETL & ELT Pipeline
- End-to-end data engineering pipeline
- Features ETL and ELT patterns
- Includes interactive analytics dashboard

### Sysrec — Export Potential Predictor
- Uses Random Forest to predict export potential of commodities
- Built in Jupyter with comprehensive EDA

### ProgramLaluLintas — Traffic Sign Detection
- Real-time detection using YOLOv8 and OpenCV
- High accuracy with live webcam support

### Fuzzy Logic Route Estimator
- Estimates route comfort between Telkom University and Lembang
- Considers traffic, weather, road conditions

## Skills

### AI / Machine Learning
- Python (Expert, 95%)
- TensorFlow (85%), PyTorch (75%), Scikit-learn (88%)
- OpenCV (80%), YOLOv8, LSTM, XGBoost, Prophet

### Data Science
- Pandas (92%), NumPy (90%)
- Power BI (78%), Streamlit (82%)
- MySQL (80%), Big Data Analytics, ETL/ELT

### Web / Backend
- React (82%), Next.js (78%)
- FastAPI (85%), Laravel (75%)

### Tools
- Git (90%), Jupyter (93%), Docker (65%), Linux (72%)
- LangGraph, LangChain

## Certifications
- IBM: Getting Started with Data (Jul 2026)
- NVIDIA: Fundamentals of Deep Learning (Oct 2025)
- Dicoding: Belajar Dasar Visualisasi Data (Feb 2025)
- Telkom University: English Communicative Competence Test (Oct 2025)

## Volunteering
- President, CONNECTION HMTK Telkom University — Led 30 lecturers + 68 students, collaborated with GOJEK
- Event Staff, CONNECTION HMTK — Coordinated 60+ volunteers
- Student Orientation Liaison, Telkom University
- Logistics Officer, Telkom University PKKMB

## Career Goals
Currently exploring LangGraph and agentic AI systems. Open to:
- Full-time AI/ML Engineer or Data Scientist roles
- Research collaborations
- Freelance AI/data projects
Available starting August 2026.
"""

SYSTEM_PROMPT = """You are an AI assistant representing Rahmanda Afebrio Yuris Soesatyo's portfolio website.
Your role is to answer questions about Rahmanda's background, skills, projects, and experience.

Context about Rahmanda:
{profile}

Guidelines:
- Answer based ONLY on the provided profile data
- Be friendly, professional, and enthusiastic about Rahmanda's work
- Keep answers concise but informative (2-4 sentences for simple questions)
- For project-related questions, highlight technical details and achievements
- If asked about something not in the profile, politely say you don't have that information
- Never make up information not in the profile
- Speak in first-person perspective as if you ARE Rahmanda, except for very specific personal data
"""
