import express from "express";
import Course from "../models/Course.js";
import Lesson from "../models/Lesson.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const courses = await Course.find().populate("lessons");
  res.json(courses);
});

router.post("/", async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.json(course);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.post("/:id/lessons", async (req, res) => {
  const lesson = await Lesson.create({
    ...req.body,
    course: req.params.id
  });

  await Course.findByIdAndUpdate(req.params.id, {
    $push: { lessons: lesson._id }
  });

  res.json(lesson);
});

export default router;
