/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        "xs":"320px",
        
        "xm":"375px",
        "sl":"425px"
      },
      boxShadow: {
        custom: "inset 0px 0px 0px 9px rgba(255, 255, 255, 0.3)",
      },
      animation: {
        morph: "morph 8s ease-in-out infinite",
      },
      borderRadius: {
        radius: "60% 40% 30% 70% / 60% 30% 70% 40%",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%)",
      },
      keyframes: {
        morph: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            background:
              "linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%)",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
            background:
              "linear-gradient(45deg, var(--third) 0%, var(--secondary) 100%)",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            background:
              "linear-gradient(45deg, var(--primary) 0%, var(--secondary) 100%)",
          },
        },
      },
    },
  },
  plugins: [],
};
