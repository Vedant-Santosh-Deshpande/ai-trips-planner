const fs = require('fs');

const readmeContent = `
# 🌍 AI Trip Planner

An intelligent travel assistant that helps users plan trips effortlessly, upload and view trip photos, and explore travel blogs based on trip locations.

---

## ✨ Features

- 🌐 **AI-Powered Trip Planning**: Generates trip plans based on user inputs like destination, dates, and interests.
- 🖼 **Trip Image Upload**: Users can upload and view photos for each trip, linked via Firebase ID.
- ☁️ **Firebase Integration**: Stores trip data and image URLs securely.
- 📖 **Travel Blog Integration**: View travel blogs related to the destination through the \`ViewBlog\` page.
- 📱 **Responsive Design**: Seamless experience across all devices.
- 🔍 **Real-time Blog Fetching**: Fetches live blog content based on the trip’s location.

---

## 🚀 Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: Firebase (Firestore + Storage)
- **Others**: OpenAI API (if used for AI planning), REST APIs

---

## 📸 How It Works

1. **Plan Your Trip**: Enter location, dates, and preferences.
2. **Upload Photos**: Add photos to each trip — all stored via Firebase under a unique ID.
3. **View Blogs**: Click *View Blog* to read real-time articles about your chosen destination.
4. **Manage Trips**: View and manage all your trips in one place.

---

## 📂 Folder Structure

\`\`\`bash
ai-trip-planner/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   │   ├── ViewBlog.jsx
│   ├── firebase/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
└── README.md
\`\`\`

---

## 🛠️ Setup Instructions

\`\`\`bash
# Clone the repository
git clone https://github.com/Vedant-Santosh-Deshpande/ai-trips-planner.git

# Navigate into the folder
cd ai-trips-planner

# Install dependencies
npm install

# Run the app
npm run dev
\`\`\`

> 📝 Make sure to add your Firebase credentials and OpenAI API key in the \`.env\` file.

---

## 📬 Contact

For any queries or feedback, feel free to reach out:

- 📧 vedantdeshpande03@gmail.com  
- 🌐 [LinkedIn](https://www.linkedin.com/in/vedant-deshpande-853b6025a/)  
- 💻 [GitHub](https://github.com/Vedant-Santosh-Deshpande)
`;

fs.writeFileSync('README.md', readmeContent.trim());
console.log('✅ README.md file created!');
