import express from "express";
import { getProfileAndRepos } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", getProfileAndRepos);

export default router;
