import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());
app.use(cors());

// ----- الاتصال بـ MongoDB Atlas -----
mongoose.connect(
  "mongodb+srv://naglaamahmoud0321_db_user:zcd2evo6lcOGyagl@cluster0.invsejq.mongodb.net/websiteDB"
)
.then(() => console.log("MongoDB Atlas Connected"))
.catch((err) => console.log(err));

// ----- إنشاء Schemas -----

// Users
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String
});
const User = mongoose.model("User", UserSchema);

// Contact messages
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const Contact = mongoose.model("Contact", ContactSchema);

// ----- API -----

// تسجيل مستخدم جديد
app.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword
    });
    await user.save();
    res.send("User Registered Successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// تسجيل الدخول
app.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send("User not found");
    const valid = await bcrypt.compare(req.body.password, user.password);
    if (!valid) return res.status(400).send("Wrong password");
    res.send("Login Success");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// Contact form
app.post("/contact", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.send("Message Sent Successfully");
  } catch (err) {
    res.status(400).send("Error: " + err.message);
  }
});

// ----- تشغيل السيرفر -----
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
