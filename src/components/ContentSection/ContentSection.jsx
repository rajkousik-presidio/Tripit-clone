import React, { createContext, useContext } from "react";
import ContentSectionItem from "./ContentSectionItem";
import ContentSectionImage from "./ContentSectionImage";

// Create a single context for managing allowed usage of components
const ContentSectionContext = createContext();

export default function ContentSection({ children }) {
  return (
    <ContentSectionContext.Provider value={{ insideContentSection: true }}>
      <div>{children}</div>
    </ContentSectionContext.Provider>
  );
}

// Wrapper to handle ContentSection.Item and enforce usage inside ContentSection
function ContentSectionItemWrapper(props) {
  const context = useContext(ContentSectionContext);

  if (!context?.insideContentSection) {
    console.error("ContentSection.Item must be used inside ContentSection.");
    return null; // Prevent rendering if used incorrectly
  }

  return (
    <ContentSectionContext.Provider
      value={{ insideContentSection: true, insideContentSectionItem: true }}
    >
      <ContentSectionItem {...props} />
    </ContentSectionContext.Provider>
  );
}

// Wrapper to handle ContentSection.Image and enforce usage inside ContentSection.Item
function ContentSectionImageWrapper(props) {
  const context = useContext(ContentSectionContext);

  if (!context?.insideContentSectionItem) {
    console.error(
      "ContentSection.Image must be used inside ContentSection.Item."
    );
    return null; // Prevent rendering if used incorrectly
  }

  return <ContentSectionImage {...props} />;
}

ContentSection.Item = ContentSectionItemWrapper;
ContentSection.Image = ContentSectionImageWrapper;
