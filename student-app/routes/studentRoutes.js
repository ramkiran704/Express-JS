const express = require("express");

const router = express.Router();

const {
    getStudents,
    getStudent,
    addStudent,
    updateStudent,
    deleteStudent
} = require("../controllers/studentController");

// GET all students
router.get("/", getStudents);

// GET one student
router.get("/:id", getStudent);

// POST student
router.post("/", addStudent);

// PUT student
router.put("/:id", updateStudent);

// DELETE student
router.delete("/:id", deleteStudent);

module.exports = router;