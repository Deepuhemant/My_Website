import gurgaonImg from './assets/Gurgaon_property_price_prediction.jpg';
import wineImg from './assets/Wine_quality_ML_Pipeline.png';
import ragOcrImg from './assets/RAG_system_ocr.png';
import gurgaonPropImg from './assets/Gurgaon_property_price_prediction.png';
import chatbotImg from './assets/Langraph_chatbot_with_RAG_MCP.png';
import movieImg from './assets/Movie_Recommender_system.png';

export const Personal_data = {
    personal: {
        name: "Deepu Kumar",
        role: "Data Scientist | AI Engineer | ML Engineer",
        email: "deepuhemant18@gmail.com",
        phone: "+91-9097476835",
        location: "Gurugram, India",
        linkedin: "https://www.linkedin.com/in/deepu-kumar-45884220b/", // Assumed or need to ask? I'll leave it generic or try to find it.
        github: "https://github.com/Deepuhemant",
        summary: "Data Scientist with 3 years of hands-on experience building production-grade ML models, scalable end-to-end pipelines, and intelligent agentic workflows. Skilled in orchestrating LLMs with external tools, APIs, and retrieval systems to automate complex decision-making tasks. Strong background in feature engineering, model optimization, and deploying data-driven solutions across real-world environments. Adept at collaborating with cross-functional teams, designing robust architectures, and delivering high-impact AI systems that scale."
    },
    experience: [
        {
            role: "Data Specialist",
            company: "Outlier AI",
            duration: "Jun 2024 - Present",
            type: "Remote",
            details: [
                "Developed an XGBoost regression pipeline for Gurgaon real-estate valuation achieving R² = 0.87, with a 40% decrease in MAE through RFE-based feature selection, hyperparameter tuning, and production deployment on AWS.",
                "Built a modular machine learning pipeline for wine quality prediction that includes automated data preprocessing, MLflow-based experiment tracking, Docker containerization for deployment, CI/CD integration, and production-level model monitoring with Prometheus and Grafana.",
                "Developed a chatbot powered by an MCP-based RAG system, leveraging LangGraph for agentic workflows, LLM orchestration with external APIs, retrieval pipelines, and enhanced capabilities such as streaming, state persistence, and evaluation via LangSmith; boosted response accuracy by 78% through prompt engineering and context optimization.",
                "Comprehensive document ingestion workflow that performs OCR to extract text from images, builds vector indexes, and uses retrieval-augmented generation to deliver precise answers.",
                "Fine-tuned the Llama-3.2 3B model with Unsloth LoRA (r=16, alpha=8) on the ServiceNow AIR dataset using SFT training, reaching a tokenization throughput of 120.28 examples/s on a T4 GPU with 4-bit quantization."]
        },
        {
            role: "MIS Executive and Analyst",
            company: "Rance Polymers Pvt Ltd",
            duration: "Oct 2023 - Jun 2024",
            location: "Gurgaon, India",
            details: [
                "Making KPIs, Dashboards and charts to analyze the daily, monthly and yearly Progress of every process from expenses to maintenance of moulds.",
                "Analysis of breakdown cost by comparing KPIs of months over months and reduced the cost by 12% by implementing the timely maintenance of moulds.",
                "Extracting data from database using Mysql and create pivot tables and charts used in key decision making."

            ]
        },
        {
            role: "Consultant",
            company: "Omega Qms Pvt Ltd",
            duration: "Dec 2022 - Oct 2023",
            location: "New Delhi, India",
            details: [
                "talking to the stakeholder and CEOs briefing the whole process about ISI Certifications.",
                "Assisting with the BIS officers in inhouse testing of manufactured product."
            ]
        }
    ],
    internship: [
        {
            role: "Data Science Intern",
            company: "Unified Mentor",
            duration: "July 2024 - Jan 2025",
            details: [
                "Build a movie recommender system to show the most 5 relevant movies based on the previous watched movies content using similarity score in Sklearn.",
                "model having highest similarity score predict the similar movie. Build UI using streamlit and deploy it on aws."
            ]
        }
    ],
    education: [
        {
            degree: "Bachelor of Technology",
            institution: "National Institute of Technology Mizoram",
            duration: "Aug 2018 - June 2022",
            grade: "CGPA: 7.88/10.00"
        }
    ],
    certifications: [
        {
            name: "Data Science Mentorship Program",
            issuer: "Campusx",
            date: "Aug 2025",
            url: "https://example.com/certificate"
        },
        {
            name: "Data Science Bootcamp 2025",
            issuer: "365 Careers",
            date: "Dec 2025",
            url: "https://example.com/certificate"
        },
        {
            name: "MLops complete Bootcamp",
            issuer: "Krish AI Technology Pvt Ltd",
            date: "Oct 2025",
            url: "https://example.com/certificate"
        },
        {
            name: "Power BI",
            issuer: "Maven Analytics",
            date: "Nov 2024",
            url: "https://example.com/certificate"
        },
        {
            name: "MYSQL for Data Analytics and Business Intelligence",
            issuer: "365 Careers",
            date: "Sept 2024",
            url: "https://example.com/certificate"
        }
    ],
    skills: {
        languages: ["Python", "SQL", "Java", "JavaScript"],
        databases: ["MySQL", "MongoDB"],
        frameworks: ["Streamlit", "FastAPI", "Flask"],
        cloud: ["AWS (IAMUser, S3, EC2)", "Docker", "CI/CD"],
        tools: ["SQLAlchemy", "RESTAPIs", "Git/Github", "Mlflow"],
        monitoring: ["Prometheus", "Grafana", "Langsmith"],
        others: ["Numpy", "Pandas", "Matplotlib", "Seaborn EDA", "Statistics", "Machine Learning", "Deep Learning", "Gen AI", "RAG", "Pytorch", "Tensorflow", "MLOps", "LLM-Finetuning", "Transformers", "Self-attention", "Langchain", "Langgraph", "Power BI"]
    }
};

export const projects = [
    {
        name: "Property price prediction",
        description: "Gurgaon real estate price prediction using machine learning with Streamlit web app and AWS deployment",
        url: "https://github.com/Deepuhemant/Gurgaon_property_price_prediction",
        stars: 0,
        language: "Python, Jupyter Notebook",
        image: gurgaonImg
    },
    {
        name: "Wine Quality ML Pipeline",
        description: "End-to-end ML pipeline for wine quality prediction of wine with MLflow tracking and Flask deployment",
        url: "https://github.com/Deepuhemant/DataScience_Complete_ML_Pipeline",
        stars: 0,
        language: "Python, Mlflow",
        image: wineImg
    },
    {
        name: "RAG Chatbot with OCR",
        description: "High-performance RAG system combining optimized OCR and semantic search with LangChain integration",
        url: "https://github.com/Deepuhemant/RAG_Systems_with_OCR",
        stars: 0,
        language: "Python, Langchain",
        image: ragOcrImg
    },
    {
        name: "Gurgaon properties price predictor",
        description: "Production-ready Streamlit app for real estate price prediction deployed on AWS",
        url: "https://github.com/Deepuhemant/Gurgaon_properties_price_predictor",
        stars: 0,
        language: "Python",
        image: gurgaonPropImg
    },
    {
        name: "chatbot with RAG and MCP",
        description: "Intelligent chatbot with RAG and LangGraph for advanced workflow automation and multi-agent collaboration",
        url: "https://github.com/Deepuhemant/Chatbot_MCP_RAG_Langgraph",
        stars: 0,
        language: "Python, Langgraph",
        image: chatbotImg
    },
    {
        name: "Movie Recommender System",
        description: "Movie recommender system using Sklearn similarity scores to predict relevant movies, with a Streamlit UI deployed on AWS",
        url: "https://github.com/Deepuhemant/Movie_Recommender_system",
        stars: 0,
        language: "Jupyter Notebook",
        image: movieImg
    },

];
