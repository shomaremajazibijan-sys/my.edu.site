import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    video: String,
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" }
  },
  { timestamps: true }
);

export default mongoose.model("Lesson", lessonSchema);
