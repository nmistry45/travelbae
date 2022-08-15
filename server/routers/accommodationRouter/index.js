/**
 * Author: Sangramsinh More
 * Feature: Accommodation
 * Task: Accommoadation router for backend calls
 */
const accommodationRouter = require("express").Router();
const accommodationService = require("../../middleware/accommodationService");

accommodationRouter.post(
  "/searchAccommodation",
  accommodationService.searchAccommodation
);
module.exports = accommodationRouter;
