#!/usr/bin/env node

import fs from "fs/promises";
import path from "path";
import process from "process";

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please provide a component name");
  process.exit(1);
}

// Convert component name to PascalCase for the component
const pascalCaseName =
  componentName.charAt(0).toUpperCase() + componentName.slice(1);
// Convert component name to kebab-case for the component styles
const kebabCaseName = componentName
  .replace(/([A-Z])/g, "-$1")
  .toLowerCase()
  .replace(/^-/, "");
// Convert component name to camelCase for the page
const camelCaseName =
  componentName.charAt(0).toLowerCase() + componentName.slice(1);

const COMPONENT_TEMPLATE = `import React from "react";
import clsx from "clsx";

interface ${pascalCaseName}Props {
  // Add your props here
}

const ${pascalCaseName}: React.FC<${pascalCaseName}Props> = () => {
  return <div className={"${kebabCaseName}"}>${pascalCaseName} Component</div>;
};

export default ${pascalCaseName};
`;

const MODULE_CSS_TEMPLATE = `.${kebabCaseName} {
  /* Add your styles here */
}
`;

const PAGE_TEMPLATE = `import React from "react";
import useTitle from "../hooks/useTitle";
import ${pascalCaseName} from "../components/${pascalCaseName}";
import styles from "./${camelCaseName}.module.css";

function ${pascalCaseName}Page() {
  useTitle("${pascalCaseName} Component");

  return (
    <div className={styles.container}>
      <${pascalCaseName} />
    </div>
  );
}

export default ${pascalCaseName}Page;
`;

const PAGE_CSS_TEMPLATE = `.container {
  padding-top: 112px;
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
}
`;

const INDEX_TEMPLATE = `import ${pascalCaseName} from "./${pascalCaseName}";

export default ${pascalCaseName};
`;

async function createFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log(`Created ${filePath}`);
  } catch (error) {
    console.error(`Error creating ${filePath}:`, error);
  }
}

async function createDirectory(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
    console.log(`Created directory ${dirPath}`);
  } catch (error) {
    console.error(`Error creating directory ${dirPath}:`, error);
  }
}

async function init() {
  // Create component directory and files
  const componentDir = path.join("src", "components", pascalCaseName);
  await createDirectory(componentDir);

  await createFile(
    path.join(componentDir, `${pascalCaseName}.tsx`),
    COMPONENT_TEMPLATE
  );
  await createFile(path.join(componentDir, "index.tsx"), INDEX_TEMPLATE);

  // Create page files
  await createFile(
    path.join("src", "pages", `${camelCaseName}.tsx`),
    PAGE_TEMPLATE
  );
  await createFile(
    path.join("src", "pages", `${camelCaseName}.module.css`),
    PAGE_CSS_TEMPLATE
  );

  console.log(`\nComponent ${pascalCaseName} initialized successfully!`);
}

init().catch(console.error);
