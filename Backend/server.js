import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import dotenv from "dotenv";
import { readFileSync } from "fs";
import { getFirestore, doc, setDoc } from "firebase-admin/firestore";

dotenv.config(); // Load environment variables

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(
  readFileSync(new URL("./serviceAccountKey.json", import.meta.url))
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(express.json());
app.use(cors());

const auth = admin.auth();
const db = getFirestore();

// Signup Route
app.post("/signup", async (req, res) => {
  const { email, password, displayName, age, role } = req.body;
  try {
    const userRecord = await auth.createUser({ email, password, displayName });
    
    // Store user data in Firestore
    await setDoc(doc(db, "users", userRecord.uid), {
      email,
      displayName,
      age,
      role,
      createdAt: new Date(),
    });

    res.status(201).json({ message: "User created successfully", user: userRecord });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login Route
app.post("/login", async (req, res) => {
  const { idToken } = req.body;
  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    res.status(200).json({ message: "Login successful", uid: decodedToken.uid });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

// Middleware to verify token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ error: "No token provided" });

  try {
    const decodedToken = await auth.verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
};

// Protected Route Example
app.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "Access granted", user: req.user });
});

// Logout Route
app.post("/logout", verifyToken, async (req, res) => {
  try {
    await auth.revokeRefreshTokens(req.user.uid);
    res.status(200).json({ message: "User logged out" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start Server
const PORT = process.env.PORT || 5665;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
