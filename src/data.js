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
                "XGBoost-based regression pipeline (Gurgaon property valuation): R2 = 0.87, MAE reduction 40% via RFE feature selection and hyperparameter optimization and deployment on AWS.",
                "Developed a modular ML pipeline featuring automated preprocessing, MLflow experiment logging, Dockerized deployment, CI/CD integration, and production-grade model monitoring using Prometheus and Grafana.",
                "LangGraph agentic RAG system: LLM orchestration with multi-step reasoning, 78% accuracy improvement via prompt engineering and context refinement.",
                "End-to-end document ingestion pipeline: OCR for image/text extraction, vector indexing, and retrieval-augmented generation for accurate responses.",
                "Fine-tuned Llama-3.2 3B using Unsloth LoRA (r=16, alpha=8): ServiceNow AIR dataset with SFT training; achieved 120.28 examples/s tokenization throughput on T4 GPU with 4-bit quantization."
            ]
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
            duration: "Oct 2021 - March 2022",
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
        image: "/src/assets/Gurgaon_property_price_prediction.jpg"
    },
    {
        name: "Wine Quality ML Pipeline",
        description: "End-to-end ML pipeline for wine quality prediction of wine with MLflow tracking and Flask deployment",
        url: "https://github.com/Deepuhemant/DataScience_Complete_ML_Pipeline",
        stars: 0,
        language: "Python, Mlflow",
        image: "/src/assets/Wine_quality_ML_Pipeline.png"
    },
    {
        name: "RAG Chatbot with OCR",
        description: "High-performance RAG system combining optimized OCR and semantic search with LangChain integration",
        url: "https://github.com/Deepuhemant/RAG_Systems_with_OCR",
        stars: 0,
        language: "Python, Langchain",
        image: "/src/assets/RAG_system_ocr.png"
    },
    {
        name: "Gurgaon properties price predictor",
        description: "Production-ready Streamlit app for real estate price prediction deployed on AWS",
        url: "https://github.com/Deepuhemant/Gurgaon_properties_price_predictor",
        stars: 0,
        language: "Python",
        image: "/src/assets/Gurgaon_property_price_prediction.png"
    },
    {
        name: "chatbot with RAG and MCP",
        description: "Intelligent chatbot with RAG and LangGraph for advanced workflow automation and multi-agent collaboration",
        url: "https://github.com/Deepuhemant/Chatbot_MCP_RAG_Langgraph",
        stars: 0,
        language: "Python, Langgraph",
        image: "/src/assets/Langraph_chatbot_with_RAG_MCP.png"
    },
    {
        name: "Movie Recommender System",
        description: "Movie recommender system using Sklearn similarity scores to predict relevant movies, with a Streamlit UI deployed on AWS",
        url: "https://github.com/Deepuhemant/Movie_Recommender_system",
        stars: 0,
        language: "Jupyter Notebook",
        image: "/src/assets/Movie_Recommender_system.png"
    },

];
