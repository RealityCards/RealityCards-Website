import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider, createGlobalStyle, css } from "styled-components";

export const AppContext = createContext();

const theme = {
  lightTheme: {
    colors: {
      background: "white",
      text: "#222",
      headings: "#222",
      link: "#00aeef",
      testimonial: "transparent",
      testimonialName: "#222",
      switchBg: "rgb(140, 140, 140)",
      switchBulb: "#222",
      nav: "#222",
      navHover: "#9ca9b3",
    },
    transition: "0.3s",
  },
  darkTheme: {
    colors: {
      background: "linear-gradient(90deg, #000, rgba(0, 0, 0, 0.6))",
      text: "white",
      headings: "white",
      link: "#eceded",
      testimonial: "#25282c",
      testimonialName: "#eceded",
      switchBg: "rgb(140, 140, 140)",
      switchBulb: "rgb(255, 255, 144)",
      nav: "#9ca9b3",
      navHover: "#eceded",
    },
    transition: "0.3s",
  },
};

const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
      html {
        body {
            background: ${theme.colors.background};
            color: ${theme.colors.text};
            
            h1, h2, h3, h4, h5 {
                color: ${theme.colors.headings};
            }
            a:not(.button) {
                color: ${theme.colors.link};
            }
            .cta-slogan {
                h3 { 
                    color: white;
                }
                a:not(.button) { 
                    color: white;
                    text-decoration: underline;
                }
            }
            .testimonial .tiles-item-inner {
                background: ${theme.colors.testimonial};
            }
            .testimonial-item-name.text-color-high {
                color: ${theme.colors.testimonialName};
            }
            .testimonial-item-link a:not(.button) {
                color: #1cb68b;

                &:hover {
                    color: #73efcc;
                }
            }
            .theme-switcher {
                background: ${theme.colors.switchBg};

                .bulb {
                    fill: ${theme.colors.switchBulb};
                }
            }
            .header-nav a:not(.button) {
                color: ${theme.colors.nav};

                &:hover {
                    color: ${theme.colors.navHover};
                }
            }
      }
    `}
`;

const AppProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("theme") || "lightTheme"
  );

  const toggleTheme = () => {
    setThemeMode((prevState) => {
      if (prevState === "lightTheme") {
        return "darkTheme";
      } else {
        return "lightTheme";
      }
    });
  };

  const value = { toggleTheme, themeMode };
  const costumTheme = theme[themeMode];

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <AppContext.Provider value={value}>
      <ThemeProvider theme={costumTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppContext.Provider>
  );
};

export default AppProvider;
