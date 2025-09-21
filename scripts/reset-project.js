import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Tạo __dirname tương tự như CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resetProject() {
  const dirsToDelete = ["node_modules", ".expo", ".next"];

  dirsToDelete.forEach((dir) => {
    const fullPath = path.join(__dirname, "..", dir);

    if (fs.existsSync(fullPath)) {
      fs.rmSync(fullPath, { recursive: true, force: true });
      console.log(`🗑️ Deleted: ${fullPath}`);
    }
  });

  console.log("✅ Project reset. Run `npm install` again.");
}

resetProject();
