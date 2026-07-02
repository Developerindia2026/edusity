const express = require("express");
const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    resumeUrl: {
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Pending",
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
    resumeOriginalName: {
    type: String,
    required: true,
},

});

const ApplicationData = mongoose.model("ApplicationData", ApplicationSchema);

module.exports = ApplicationData;