import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.json({ message: "Created pipeline, successfully deployed image on ECR using buildspec.yml file, everything running smooth! 🎉" }));

router.get("/health", (req, res) => {
  // throw new Error("Internal Server Error");
  res.status(200).json({ message: "Everything is good here 👀" });
});

export default router;
