import express from "express";
import { login, registration, getregisteredUser } from "../controllers/authController.js";

const authRoutes = express.Router()

authRoutes.get('parsedUserData', getregisteredUser)

authRoutes.post('/api/register/:userId', registration)
authRoutes.post('/api/login', login)


export default authRoutes
