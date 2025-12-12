import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }]
  },
  { timestamps: true }
);

export default mongoose.model("Course", courseSchema);
